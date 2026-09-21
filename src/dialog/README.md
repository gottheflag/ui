# Dialog

Native modal and non-modal dialogs with backdrop and layout variants.

## Import

```css
@import "@gottheflag/ui/dialog.css";
```

## Example

```html
<button type="button" commandfor="release-dialog" command="show-modal">Open</button>
<dialog id="release-dialog">
  <form method="dialog">
    <h2>Ready to publish?</h2>
    <button value="cancel">Cancel</button>
    <button value="confirm">Publish</button>
  </form>
</dialog>
```

## Customization

Add a consumer class when the change should affect only one instance:

```css
.my-dialog {
  --ui-dialog-padding: 2rem;
  --ui-dialog-radius: 1rem;
}
```

All public defaults are listed in [`_variables.scss`](./_variables.scss). Ordinary unlayered application CSS takes precedence over the library layer.

