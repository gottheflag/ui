# Text

Shimmer and wipe text treatments with reduced-motion fallbacks.

## Import

```css
@import "@gottheflag/ui/text.css";
```

## Example

```html
<strong class="ui-text-shimmer">Generating something useful…</strong>
<strong class="ui-text-wipe">Processing the next step…</strong>
```

## Customization

Add a consumer class when the change should affect only one instance:

```css
.my-status {
  --ui-text-primary: #c84548;
  --ui-text-speed: 800ms;
}
```

All public defaults are listed in [`_variables.scss`](./_variables.scss). Ordinary unlayered application CSS takes precedence over the library layer.

