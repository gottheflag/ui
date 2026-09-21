# Accordion

Native disclosure styling with open, disabled, bordered, and compact variants.

## Import

```css
@import "@gottheflag/ui/accordion.css";
```

## Example

```html
<details>
  <summary>What is GTF UI?</summary>
  <p>A CSS-first component library.</p>
</details>
```

## Customization

Add a consumer class when the change should affect only one instance:

```css
.my-accordion {
  --ui-accordion-bg: Canvas;
  --ui-accordion-icon-color: #c84548;
}
```

All public defaults are listed in [`_variables.scss`](./_variables.scss). Ordinary unlayered application CSS takes precedence over the library layer.

