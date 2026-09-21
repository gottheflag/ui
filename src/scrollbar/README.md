# Scrollbar

Global scrollbar theming plus a cross-browser hidden-scrollbar utility.

## Import

```css
@import "@gottheflag/ui/scrollbar.css";
```

## Example

```html
<div class="my-scroll-region ui-scrollbar-hide">
  Long scrollable content…
</div>
```

## Customization

Add a consumer class when the change should affect only one instance:

```css
:root {
  --ui-scrollbar-track: Canvas;
  --ui-scrollbar-thumb: #c84548;
}
```

All public defaults are listed in [`_variables.scss`](./_variables.scss). Ordinary unlayered application CSS takes precedence over the library layer.

