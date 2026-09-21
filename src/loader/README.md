# Loader

Accessible CSS-only ring, dual, breath, bar, and dots loaders.

## Import

```css
@import "@gottheflag/ui/loader.css";
```

## Example

```html
<span class="ui-loader ui-ring" role="status" aria-label="Loading"></span>
<span class="ui-loader ui-dots" role="status" aria-label="Loading">
  <span></span><span></span><span></span>
</span>
```

## Customization

Add a consumer class when the change should affect only one instance:

```css
.my-loader {
  --ui-loader-primary: #c84548;
  --ui-loader-speed: 700ms;
}
```

All public defaults are listed in [`_variables.scss`](./_variables.scss). Ordinary unlayered application CSS takes precedence over the library layer.

