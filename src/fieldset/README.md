# Fieldset

Clean native field grouping with legend and disabled-state support.

## Import

```css
@import "@gottheflag/ui/fieldset.css";
```

## Example

```html
<fieldset>
  <legend>Profile</legend>
  <input name="name" placeholder="Name">
  <input name="email" type="email" placeholder="Email">
</fieldset>
```

## Customization

Add a consumer class when the change should affect only one instance:

```css
.my-fields {
  --ui-fieldset-padding: 1.25rem;
  --ui-fieldset-gap: 1rem;
}
```

All public defaults are listed in [`_variables.scss`](./_variables.scss). Ordinary unlayered application CSS takes precedence over the library layer.

