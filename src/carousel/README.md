# Carousel

A CSS-native scrolling carousel with optional sibling-function enhancements.

## Import

```css
@import "@gottheflag/ui/carousel.css";
```

## Example

```html
<div class="ui-carousel" aria-label="Featured items">
  <article class="ui-card">One</article>
  <article class="ui-card">Two</article>
  <article class="ui-card">Three</article>
</div>
```

## Customization

Add a consumer class when the change should affect only one instance:

```css
.my-carousel {
  --ui-carousel-gap: 1rem;
  --ui-carousel-padding: 1rem;
}
```

All public defaults are listed in [`_variables.scss`](./_variables.scss). Ordinary unlayered application CSS takes precedence over the library layer.

