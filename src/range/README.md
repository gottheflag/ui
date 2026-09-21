# Range

A themeable native range control that preserves keyboard behavior.

## Import

```css
@import "@gottheflag/ui/range.css";
```

## Example

```html
<label>Volume <input type="range" min="0" max="100" value="35"></label>
```

## Customization

Add a consumer class when the change should affect only one instance:

```css
.my-range {
  --ui-range-thumb-height: 1.25rem;
  --ui-range-track: #c84548;
}
```

All public defaults are listed in [`_variables.scss`](./_variables.scss). Ordinary unlayered application CSS takes precedence over the library layer.
