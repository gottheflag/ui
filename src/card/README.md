# Card

Flexible content surfaces with plain, rich, interactive, and selected presentations.

## Import

```css
@import "@gottheflag/ui/card.css";
```

## Example

```html
<article class="ui-card ui-rich ui-vertical">
  <header>Launch checklist</header>
  <p>Everything needed for the first release.</p>
</article>
```

## Customization

Add a consumer class when the change should affect only one instance:

```css
.my-card {
  --ui-card-padding: 1.5rem;
  --ui-card-radius: 1rem;
}
```

All public defaults are listed in [`_variables.scss`](./_variables.scss). Ordinary unlayered application CSS takes precedence over the library layer.

