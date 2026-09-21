# Progress

A themed native progress element with semantic and size variants.

## Import

```css
@import "@gottheflag/ui/progress.css";
```

## Example

```html
<progress value="65" max="100">65%</progress>
<progress class="ui-success ui-lg" value="80" max="100">80%</progress>
```

## Customization

Add a consumer class when the change should affect only one instance:

```css
.my-progress {
  --ui-progress-value: #c84548;
  --ui-progress-radius: 999px;
}
```

All public defaults are listed in [`_variables.scss`](./_variables.scss). Ordinary unlayered application CSS takes precedence over the library layer.

