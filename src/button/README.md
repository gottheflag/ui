# Button

Native buttons and button-like links with variants, sizes, semantic states, and correct pressed priority.

## Import

```css
@import "@gottheflag/ui/button.css";
```

## Example

```html
<button type="button" class="ui-success">Save</button>
<a class="ui-btn ui-outline" href="/docs">Documentation</a>
<a class="ui-btn" aria-disabled="true">Unavailable</a>
```

## Customization

Add a consumer class when the change should affect only one instance:

```css
.my-action {
  --ui-button-radius: 999px;
  --ui-button-bg: #c84548;
  --ui-button-fg: white;
}
```

All public defaults are listed in [`_variables.scss`](./_variables.scss). Ordinary unlayered application CSS takes precedence over the library layer.

