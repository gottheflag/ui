# Sidebar

A responsive navigation shell controlled by a native checkbox. It moves between hidden, compact rail, overlay, and docked states with HTML and CSS only.

## Import

```css
@import "@gottheflag/ui/sidebar.css";
```

## Example

```html
<aside class="ui-sidebar my-sidebar">
  <header>Workspace</header>
  <nav aria-label="Primary">
    <a href="/" aria-current="page"><span aria-hidden="true">⌂</span><span>Home</span></a>
    <a href="/settings"><img src="/settings.svg" alt=""><span>Settings</span></a>
  </nav>
</aside>
```

## Responsive Sidebar

Place one `.ui-sidebar__toggle` checkbox directly inside `.ui-sidebar.ui-responsive`. Any number of labels anywhere in the document can toggle the same Sidebar by pointing `for` at the checkbox `id`; their classes, content, and presentation belong to the consumer.

```html
<aside id="main-sidebar" class="ui-sidebar ui-responsive my-sidebar">
  <input
    id="main-sidebar-toggle"
    class="ui-sidebar__toggle"
    type="checkbox"
    aria-label="Toggle primary navigation"
    aria-controls="main-sidebar"
  >

  <header>
    <strong>Workspace</strong>
    <label
      class="ui-btn ui-ghost my-sidebar-toggle"
      for="main-sidebar-toggle"
      aria-label="Close navigation"
    >×</label>
  </header>

  <nav aria-label="Primary">
    <a href="/" aria-current="page">
      <span aria-hidden="true">⌂</span>
      <span class="ui-sidebar__label">Home</span>
    </a>
    <a href="/settings">
      <span aria-hidden="true">⚙</span>
      <span class="ui-sidebar__label">Settings</span>
    </a>
  </nav>
</aside>

<label
  class="ui-sidebar__backdrop"
  for="main-sidebar-toggle"
  aria-hidden="true"
></label>

<label
  class="ui-btn ui-outline my-sidebar-toggle"
  for="main-sidebar-toggle"
>Menu</label>
```

- Below `48rem`, unchecked is hidden and checked opens the full overlay Sidebar.
- From `48rem` through `63.999rem`, unchecked is a compact rail and checked remains a full overlay.
- At `64rem` and above, the Sidebar is fully expanded in normal flow regardless of checkbox state.
- Checked state survives breakpoint changes, so returning from desktop to the middle breakpoint restores the overlay.
- `dir="rtl"` moves the overlay to logical inline-start and reverses its motion.

The checkbox must be a direct child of the Sidebar. The optional `.ui-sidebar__backdrop` label must immediately follow the Sidebar so the library can style its checked state. Every other associated label may live anywhere because `for` provides the connection.

The library does not distinguish between “open” and “close” labels: both toggle the same checkbox, so consumers name and style them. At the docked breakpoint the checkbox state has no visual effect; consumers should hide any close-only label there. The focusable checkbox remains the native keyboard control.

## Customization

Add a consumer class when the change should affect only one instance:

```css
.my-sidebar {
	--ui-sidebar-width: 18rem;
	--ui-sidebar-collapsed-width: 4rem;
	--ui-sidebar-icon-size: 1.25rem;
	--ui-sidebar-viewport-offset: 0.75rem;
}
```

All public defaults are listed in [`_variables.scss`](./_variables.scss). Ordinary unlayered application CSS takes precedence over the library layer.
