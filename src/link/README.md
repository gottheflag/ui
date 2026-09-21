# Link

Theme-aware native links with visited, hover, and focus-visible states.

## Import

```css
@import "@gottheflag/ui/link.css";
```

## Example

```html
<a href="/components">Browse components</a>
```

## Customization

Add a consumer class when the change should affect only one instance:

```css
.my-link {
  --ui-link: #c84548;
  --ui-link-line-offset: 0.2rem;
}
```

All public defaults are listed in [`_variables.scss`](./_variables.scss). Ordinary unlayered application CSS takes precedence over the library layer.

