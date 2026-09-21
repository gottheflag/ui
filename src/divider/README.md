# Divider

Horizontal or vertical separators, optionally carrying a label.

## Import

```css
@import "@gottheflag/ui/divider.css";
```

## Example

```html
<hr>
<div class="ui-divider" data-label="or"></div>
<div class="ui-divider ui-vertical" aria-hidden="true"></div>
```

## Customization

Add a consumer class when the change should affect only one instance:

```css
.my-divider {
  --ui-divider-line: #c84548;
  --ui-divider-spacing: 0.5rem;
}
```

All public defaults are listed in [`_variables.scss`](./_variables.scss). Ordinary unlayered application CSS takes precedence over the library layer.

