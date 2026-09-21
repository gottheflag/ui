# Color

A polished native color input that preserves platform behavior.

## Import

```css
@import "@gottheflag/ui/color.css";
```

## Example

```html
<label>
  Accent
  <input type="color" value="#c84548">
</label>
```

## Customization

Add a consumer class when the change should affect only one instance:

```css
.my-color {
  --ui-color-size: 2rem;
  --ui-color-radius: 999px;
}
```

All public defaults are listed in [`_variables.scss`](./_variables.scss). Ordinary unlayered application CSS takes precedence over the library layer.

