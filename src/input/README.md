# Input

Text-like native inputs with sizes, responsive sizing, and surface variants.

## Import

```css
@import "@gottheflag/ui/input.css";
```

## Example

```html
<input placeholder="Default">
<input class="ui-outline" type="email" placeholder="Email">
<input class="ui-subtle ui-lg" type="search" placeholder="Search">
```

## Customization

Add a consumer class when the change should affect only one instance:

```css
.my-input {
  --ui-input-radius: 0.75rem;
  --ui-input-ring: #c84548;
}
```

All public defaults are listed in [`_variables.scss`](./_variables.scss). Ordinary unlayered application CSS takes precedence over the library layer.
