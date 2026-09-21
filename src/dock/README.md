# Dock

An image-friendly application dock with CSS hover magnification and logical-direction support.

## Import

```css
@import "@gottheflag/ui/dock.css";
```

## Example

```html
<nav class="ui-dock" aria-label="Applications">
  <img src="/mail.webp" alt="Mail">
  <img src="/notes.webp" alt="Notes">
  <hr data-dock-separator>
  <img src="/settings.webp" alt="Settings">
</nav>
```

## Customization

Add a consumer class when the change should affect only one instance:

```css
.my-dock {
  --ui-dock-item-size: 3.5rem;
  --ui-dock-radius: 1rem;
}
```

All public defaults are listed in [`_variables.scss`](./_variables.scss). Ordinary unlayered application CSS takes precedence over the library layer.

