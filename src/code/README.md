# Code

Inline code styling that stays readable across themes.

## Import

```css
@import "@gottheflag/ui/code.css";
```

## Example

```html
<p>Install with <code>pnpm add @gottheflag/ui</code>.</p>
```

## Customization

Add a consumer class when the change should affect only one instance:

```css
.my-docs {
  --ui-code-bg: #171717;
  --ui-code-fg: #f5f5f5;
}
```

All public defaults are listed in [`_variables.scss`](./_variables.scss). Ordinary unlayered application CSS takes precedence over the library layer.

