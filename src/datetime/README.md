# Datetime

Date and time input refinements shared with the library field system.

## Import

```css
@import "@gottheflag/ui/datetime.css";
```

## Example

```html
<label>Launch date <input type="date"></label>
<label>Launch time <input type="time"></label>
<input type="datetime-local" aria-label="Launch date and time">
```

## Customization

Add a consumer class when the change should affect only one instance:

```css
.my-schedule {
  --ui-datetime-arrow: #c84548;
  --ui-datetime-arrow-size: 1.25rem;
}
```

All public defaults are listed in [`_variables.scss`](./_variables.scss). Ordinary unlayered application CSS takes precedence over the library layer.

