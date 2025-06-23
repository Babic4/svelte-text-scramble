# 🌀 Scramble — Animated text component for Svelte

![npm](https://img.shields.io/npm/v/svelte-text-scramble)
![license](https://img.shields.io/npm/l/svelte-text-scramble)
[![GitHub](https://img.shields.io/badge/github-Babic4%2Fsvelte--text--scramble-181717?logo=github)](https://github.com/Babic4/svelte-text-scramble)

The `Scramble` component displays text with the effect of “scattered” letters (hacker-text style). Suitable for dynamic headlines, downloads or accents.

## 🚀 Installation

```bash
bun add svelte-text-scramble
# or
npm install svelte-text-scramble
```

## 📦 Utilization

```svelte
<script lang="ts">
	import { Scramble } from 'svelte-text-scramble'
</script>

<Scramble value="Hello World!" />
```

## 🔧 Props

| Title                | Type                          | Default         | Description                                                                |
| -------------------- | ----------------------------- | --------------- | -------------------------------------------------------------------------- |
| `value`              | `string`                      | —               | **Objective.** The source text that will be “scattered”.                   |
| `duration`           | `number`                      | `0.8`           | Animation duration (in seconds).                                           |
| `characterSet`       | `string`                      | `A-Z, a-z, 0-9` | The set of symbols from which the “noise” is generated.                    |
| `className`          | `string`                      | `''`            | Custom CSS Classes.                                                        |
| `as`                 | `keyof HTMLElementTagNameMap` | `'p'`           | HTML tag in which the text will be wrapped (`p`, `span`, `div`, etc.).     |
| `trigger`            | `boolean`                     | `true`          | Automatically start animation when mounted or by condition set by `trigger |
| `onScrambleComplete` | `() => void`                  | `undefined`     | Callback called after the animation is complete.                           |
| `...restProps`       | `HTMLAttributes<HTMLElement>` | —               | Any valid HTML attributes (`id`, `style`, `aria-*`, etc.).                 |

## 🎯 Examples

### Custom character set and duration

```svelte
<Scramble
	value="Secret Code"
	duration={1.5}
	characterSet="•◉◍◎★"
	as="h2"
/>
```

### Manual launch via `trigger`

```svelte
<script lang="ts">
	let active = false
</script>

<button on:click={() => (active = !active)}>Animate</button>

<Scramble value="Manual Trigger" trigger={active} />
```

### Callback after completion

```svelte
<Scramble
	value="Loaded!"
	onScrambleComplete={() => console.log('Готово!')}
/>
```

## 🛠 Technology

- ✅ **Svelte + TypeScript**
- 🎞 Animation based on [Motion One](https://motion.dev)
- ⚡️ Lightweight, no unnecessary dependencies

## 📜 License

MIT © 2025 [@babxxh-dima](https://github.com/Babic4)
