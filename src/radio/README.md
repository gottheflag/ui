# Radio

Native radio controls and selectable card layouts.

## Import

```css
@import "@gottheflag/ui/radio.css";
```

## Example

```html
<label><input type="radio" name="plan" checked> Starter</label>
<label class="ui-card">
  <input type="radio" name="plan">
  <span>Pro</span>
</label>
```

## Customization

Add a consumer class when the change should affect only one instance:

```css
.my-plan {
  --ui-radio-size: 1.25rem;
  --ui-radio-checked: #c84548;
}
```

All public defaults are listed in [`_variables.scss`](./_variables.scss). Ordinary unlayered application CSS takes precedence over the library layer.

