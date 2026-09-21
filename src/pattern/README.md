# Pattern

Reusable grid, dot, tile, and loom CSS backgrounds.

## Import

```css
@import "@gottheflag/ui/pattern.css";
```

## Example

```html
<div class="ui-pattern ui-grid" aria-hidden="true"></div>
<div class="ui-pattern ui-dot" aria-hidden="true"></div>
```

## Customization

Add a consumer class when the change should affect only one instance:

```css
.my-pattern {
  --ui-pattern-color: #c84548;
  --ui-pattern-size: 1.5rem;
}
```

All public defaults are listed in [`_variables.scss`](./_variables.scss). Ordinary unlayered application CSS takes precedence over the library layer.

