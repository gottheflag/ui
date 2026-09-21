# Breadcrumb

An accessible navigation trail with a CSS-rendered separator.

## Import

```css
@import "@gottheflag/ui/breadcrumb.css";
```

## Example

```html
<nav class="ui-breadcrumb" aria-label="Breadcrumb">
  <a href="/">Home</a>
  <a href="/components">Components</a>
  <span aria-current="page">Breadcrumb</span>
</nav>
```

## Customization

Add a consumer class when the change should affect only one instance:

```css
.my-breadcrumb {
  --ui-breadcrumb-gap: 0.75rem;
  --ui-breadcrumb-separator: #c84548;
}
```

All public defaults are listed in [`_variables.scss`](./_variables.scss). Ordinary unlayered application CSS takes precedence over the library layer.

