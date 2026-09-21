# Menu

Native popover menus with semantic items, separators, nesting, and viewport-aware enhancement.

## Import

```css
@import "@gottheflag/ui/menu.css";
```

## Example

```html
<button type="button" popovertarget="account-menu">Account</button>
<menu id="account-menu" popover>
  <li>Profile</li>
  <li>Settings</li>
  <li role="presentation"><hr></li>
  <li class="ui-error">Sign out</li>
</menu>
```

## Customization

Add a consumer class when the change should affect only one instance:

```css
.my-menu {
  --ui-menu-padding: 0.75rem;
  --ui-menu-radius: 0.75rem;
}
```

All public defaults are listed in [`_variables.scss`](./_variables.scss). Ordinary unlayered application CSS takes precedence over the library layer.

