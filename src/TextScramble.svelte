<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements'

	import { untrack } from 'svelte'
	import { animate } from 'motion'

	export type ScrambleProps = {
		value: string
		duration?: number
		characterSet?: string
		className?: string
		as?: keyof HTMLElementTagNameMap
		trigger?: boolean
		onScrambleComplete?: () => void
	} & HTMLAttributes<HTMLElement>

	const defaultChars: string =
		'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

	let {
		value,
		duration = 0.8,
		characterSet = defaultChars,
		className = '',
		as = 'p',
		trigger = true,
		onScrambleComplete = undefined,
		...restProps
	}: ScrambleProps = $props()

	let displayText = $state<string>(value)
	let isAnimating = $state<boolean>(false)
	const text: string = value

	const scramble = async () => {
		if (isAnimating) return
		isAnimating = true

		await animate(0, 1, {
			duration,
			onUpdate: (progress: number) => {
				let scrambled = ''

				for (let i = 0; i < text.length; i++) {
					if (text[i] === ' ') {
						scrambled += ' '
					} else if (progress * text.length > i) {
						scrambled += text[i]
					} else {
						scrambled +=
							characterSet[Math.floor(Math.random() * characterSet.length)]
					}
				}

				displayText = scrambled
			},
		}).finished

		displayText = text
		isAnimating = false
		onScrambleComplete?.()
	}

	$effect(() => {
		if (trigger) untrack(() => scramble())
	})
</script>

<svelte:element this={as} class={className} {...restProps}
	>{displayText}</svelte:element
>
