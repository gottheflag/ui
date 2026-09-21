# @gottheflag/ui

A CSS-first component library with useful defaults, native HTML foundations, and deliberately easy customization. Install it, import it, and build—no component runtime or initialization required.

> Status: `0.1.0-beta.1` pre-release. The public API may still receive small refinements before `1.0.0`.

## Install

```sh
pnpm add @gottheflag/ui
```

Import the library defaults and shared design tokens:

```css
@import "@gottheflag/ui";
```

This root import intentionally does **not** include any component. Import every
component independently so each page ships only what it uses:

```css
@import "@gottheflag/ui/button.css";
@import "@gottheflag/ui/dialog.css";
```

Bundlers may use equivalent JavaScript-side CSS imports.

## Quick start

```css
@import "@gottheflag/ui";
@import "@gottheflag/ui/button.css";
@import "@gottheflag/ui/badge.css";
```

```html
<button type="button" class="ui-success">Save changes</button>
<a class="ui-btn ui-outline" href="/docs">Read the docs</a>
<span class="ui-badge ui-info ui-subtle">Beta</span>
```

GTF UI styles native elements where that produces the cleanest accessible contract. Components that need an explicit opt-in use the `ui-*` classes shown in their documentation.

## Customize without fighting the library

Public custom properties handle fast theming:

```css
:root {
	--ui-accent: #c84548;
	--ui-radius: 0.5rem;
}
```

A consumer class can isolate anything from a token adjustment to a complete reskin:

```html
<aside class="ui-sidebar my-product-sidebar">…</aside>
```

```css
.my-product-sidebar {
	--ui-sidebar-width: 20rem;
	--ui-sidebar-icon-size: 1.25rem;
	border-radius: 1rem;
}
```

Library rules live in cascade layers, so ordinary unlayered application CSS wins without selector escalation or `!important`.

## Components

| Component | Public import | Primary contract |
| --- | --- | --- |
| [Accordion](src/accordion/README.md) | `accordion.css` | `details` |
| [Avatar](src/avatar/README.md) | `avatar.css` | `.ui-avatar` |
| [Badge](src/badge/README.md) | `badge.css` | `.ui-badge` |
| [Breadcrumb](src/breadcrumb/README.md) | `breadcrumb.css` | `.ui-breadcrumb` |
| [Button](src/button/README.md) | `button.css` | `button`, `.ui-btn` |
| [Card](src/card/README.md) | `card.css` | `.ui-card` |
| [Carousel](src/carousel/README.md) | `carousel.css` | `.ui-carousel` |
| [Checkbox](src/checkbox/README.md) | `checkbox.css` | `input[type=checkbox]` |
| [Code](src/code/README.md) | `code.css` | `code` |
| [Color](src/color/README.md) | `color.css` | `input[type=color]` |
| [Datetime](src/datetime/README.md) | `datetime.css` | date/time inputs |
| [Dialog](src/dialog/README.md) | `dialog.css` | `dialog` |
| [Divider](src/divider/README.md) | `divider.css` | `hr`, `.ui-divider` |
| [Dock](src/dock/README.md) | `dock.css` | `.ui-dock` |
| [Drawer](src/drawer/README.md) | `drawer.css` | `.ui-drawer[popover]` |
| [Fieldset](src/fieldset/README.md) | `fieldset.css` | `fieldset` |
| [File](src/file/README.md) | `file.css` | `input[type=file]` |
| [Input](src/input/README.md) | `input.css` | text-like inputs |
| [Keyboard](src/keyboard/README.md) | `keyboard.css` | `kbd` |
| [Link](src/link/README.md) | `link.css` | `a` |
| [Loader](src/loader/README.md) | `loader.css` | `.ui-loader` |
| [Menu](src/menu/README.md) | `menu.css` | `menu[popover]` |
| [Number](src/number/README.md) | `number.css` | `input[type=number]` |
| [Pattern](src/pattern/README.md) | `pattern.css` | `.ui-pattern` |
| [Progress](src/progress/README.md) | `progress.css` | `progress` |
| [Radio](src/radio/README.md) | `radio.css` | `input[type=radio]` |
| [Range](src/range/README.md) | `range.css` | `input[type=range]` |
| [Ribbon](src/ribbon/README.md) | `ribbon.css` | `.ui-ribbon` |
| [Scrollbar](src/scrollbar/README.md) | `scrollbar.css` | global + utility |
| [Select](src/select/README.md) | `select.css` | `select` |
| [Sidebar](src/sidebar/README.md) | `sidebar.css` | `.ui-sidebar` |
| [Table](src/table/README.md) | `table.css` | `table` |
| [Text](src/text/README.md) | `text.css` | `.ui-text-*` |
| [Textarea](src/textarea/README.md) | `textarea.css` | `textarea` |

## CSS-only runtime

The published package contains CSS only and has zero runtime dependencies. Components use semantic HTML and native browser state such as `:checked`, `:open`, `:popover-open`, `:hover`, `:focus-visible`, and `:active`.

Application code may change application data or native element state, but it never unlocks a missing GTF UI styling feature. The playground script controls playground tools only.

For a disabled link, omit `href` and add `aria-disabled="true"`; use a native disabled `<button>` for actions.

## Browser support

GTF UI targets modern browsers. Narrower-support features—typed `attr()`, Anchor Positioning, customizable Select, and CSS sibling functions—are progressive enhancements. Components remain usable when an enhancement is unavailable.

## Accessibility

Prefer the documented native element, keep visible labels or accessible names, and preserve keyboard behavior. GTF UI provides presentation and state styling; the application remains responsible for meaningful labels, valid document structure, and product-specific announcements.

## Development

```sh
pnpm install
pnpm build
pnpm playground
```

`pnpm build` compiles the defaults-only root and every independent component entrypoint.

## License

[Apache-2.0](LICENSE)
