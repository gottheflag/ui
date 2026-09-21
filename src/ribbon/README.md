# Ribbon

Logical-side corner ribbons with typed data-attribute enhancements.

## Import

```css
@import "@gottheflag/ui/ribbon.css";
```

## Example

```html
<article class="ui-card ui-ribbon" data-ribbon="New">
  <h2>Component</h2>
  <p>Available in the latest release.</p>
</article>
```

## Customization

Add a consumer class when the change should affect only one instance:

```css
.my-ribbon {
  --ui-ribbon-bg: #c84548;
  --ui-ribbon-fg: white;
}
```

All public defaults are listed in [`_variables.scss`](./_variables.scss). Ordinary unlayered application CSS takes precedence over the library layer.

