# File

A CSS-only file picker with optional descriptive data attributes.

## Import

```css
@import "@gottheflag/ui/file.css";
```

## Example

```html
<input
  type="file"
  required
  data-title="Choose a file"
  data-description="PDF, PNG, or JPG"
  data-required-message="A file is required">
```

## Customization

Add a consumer class when the change should affect only one instance:

```css
.my-upload {
  --ui-file-padding: 1.5rem;
  --ui-file-radius: 0.75rem;
}
```

All public defaults are listed in [`_variables.scss`](./_variables.scss). Ordinary unlayered application CSS takes precedence over the library layer.

