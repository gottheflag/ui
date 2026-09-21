# Textarea

Native textareas with resize modes, responsive sizing, and shared field variants.

## Import

```css
@import "@gottheflag/ui/textarea.css";
```

## Example

```html
<textarea rows="4" placeholder="Write a note"></textarea>
<textarea class="ui-outline ui-vertical" rows="4"></textarea>
```

## Customization

Add a consumer class when the change should affect only one instance:

```css
.my-textarea {
  --ui-textarea-radius: 0.75rem;
  --ui-textarea-ring: #c84548;
}
```

All public defaults are listed in [`_variables.scss`](./_variables.scss). Ordinary unlayered application CSS takes precedence over the library layer.
