# Checkbox

Native checkboxes, labeled controls, and selectable card layouts.

## Import

```css
@import "@gottheflag/ui/checkbox.css";
```

## Example

```html
<label>
  <input type="checkbox" checked>
  Email me release notes
</label>
<label class="ui-card">
  <input type="checkbox">
  <span>Enable advanced mode</span>
</label>
```

## Customization

Add a consumer class when the change should affect only one instance:

```css
.my-choice {
  --ui-checkbox-size: 1.25rem;
  --ui-checkbox-checked-bg: #c84548;
}
```

All public defaults are listed in [`_variables.scss`](./_variables.scss). Ordinary unlayered application CSS takes precedence over the library layer.
