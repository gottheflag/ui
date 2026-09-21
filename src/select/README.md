# Select

Native select styling with variants, multiple selection, optgroups, and customizable-select enhancement.

## Import

```css
@import "@gottheflag/ui/select.css";
```

## Example

```html
<select aria-label="Environment">
  <optgroup label="Stable"><option>Production</option></optgroup>
  <optgroup label="Testing"><option selected>Staging</option></optgroup>
</select>
```

## Customization

Add a consumer class when the change should affect only one instance:

```css
.my-select {
  --ui-select-block-size: 3rem;
  --ui-select-radius: 0.75rem;
}
```

All public defaults are listed in [`_variables.scss`](./_variables.scss). Ordinary unlayered application CSS takes precedence over the library layer.

