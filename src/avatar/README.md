# Avatar

Images or text initials, status indicators, sizing, and dynamic avatar groups.

## Import

```css
@import "@gottheflag/ui/avatar.css";
```

## Example

```html
<div class="ui-avatar-group ui-interactive" data-group-limit="3">
  <img class="ui-avatar" src="/ada.jpg" alt="Ada">
  <span class="ui-avatar" aria-label="Khaled">KH</span>
  <img class="ui-avatar" src="/linus.jpg" alt="Linus">
  <span class="ui-avatar" aria-label="Grace">GH</span>
</div>
```

## Customization

Add a consumer class when the change should affect only one instance:

```css
.my-team {
  --ui-avatar-md: 2.75rem;
  --ui-avatar-group-separator-color: Canvas;
}
```

All public defaults are listed in [`_variables.scss`](./_variables.scss). Ordinary unlayered application CSS takes precedence over the library layer.
