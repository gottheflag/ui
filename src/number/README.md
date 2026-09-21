# Number

A native number field aligned with the shared input variants and controls.

## Import

```css
@import "@gottheflag/ui/number.css";
```

## Example

```html
<input type="number" min="1" max="100" value="42">
<input type="number" class="ui-subtle" value="8">
```

## Customization

Add a consumer class when the change should affect only one instance:

```css
.my-number {
  --ui-number-arrow: #c84548;
  --ui-number-arrow-size: 1.25rem;
}
```

All public defaults are listed in [`_variables.scss`](./_variables.scss). Ordinary unlayered application CSS takes precedence over the library layer.

