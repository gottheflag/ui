# Badge

Compact labels with composable semantic colors, surface styles, pills, and dots.

## Import

```css
@import "@gottheflag/ui/badge.css";
```

## Example

```html
<span class="ui-badge ui-success">Ready</span>
<span class="ui-badge ui-info ui-outline">Review</span>
<span class="ui-badge ui-warning ui-dashed">Pending</span>
<span class="ui-badge ui-error ui-ghost">Blocked</span>
<span class="ui-badge ui-success ui-subtle ui-pill ui-dot">Live</span>
```

Surface styles are `ui-outline`, `ui-dashed`, `ui-ghost`, and
`ui-subtle`. Each composes with `ui-success`, `ui-info`, `ui-warning`,
`ui-error`, `ui-pill`, and `ui-dot`. The subtle surface is borderless;
adjust its transparency with `--ui-badge-subtle-bg-strength`.

## Customization

Add a consumer class when the change should affect only one instance:

```css
.my-badge {
  --ui-badge-radius: 999px;
  --ui-badge-padding: 0.2rem 0.55rem;
  --ui-badge-subtle-bg-strength: 12%;
}
```

All public defaults are listed in [`_variables.scss`](./_variables.scss). Ordinary unlayered application CSS takes precedence over the library layer.
