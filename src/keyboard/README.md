# Keyboard

Native keyboard-key labels for shortcuts and instructions.

## Import

```css
@import "@gottheflag/ui/keyboard.css";
```

## Example

```html
<p>Press <kbd>Ctrl</kbd> + <kbd>S</kbd> to save.</p>
```

## Customization

Add a consumer class when the change should affect only one instance:

```css
.my-shortcut {
  --ui-keyboard-bg: #171717;
  --ui-keyboard-fg: #f5f5f5;
}
```

All public defaults are listed in [`_variables.scss`](./_variables.scss). Ordinary unlayered application CSS takes precedence over the library layer.

