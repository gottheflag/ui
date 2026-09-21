# Table

Native tables with real rounded borders, striped rows, alignment helpers, and empty-state support.

## Import

```css
@import "@gottheflag/ui/table.css";
```

## Example

```html
<table class="ui-strip">
  <thead><tr><th>Name</th><th>Status</th></tr></thead>
  <tbody><tr><td>GTF UI</td><td>Ready</td></tr></tbody>
</table>
```

## Customization

Add a consumer class when the change should affect only one instance:

```css
.my-table {
  --ui-table-radius: 0.75rem;
  --ui-table-hover-bg: color-mix(in oklch, #c84548 10%, Canvas);
}
```

All public defaults are listed in [`_variables.scss`](./_variables.scss). Ordinary unlayered application CSS takes precedence over the library layer.
