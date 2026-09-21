# Drawer

A native popover drawer that can enter from a physical or logical viewport edge.

## Import

```css
@import "@gottheflag/ui/drawer.css";
```

## Example

```html
<button popovertarget="filters-drawer">Filters</button>

<aside id="filters-drawer" class="ui-drawer ui-end" popover>
  <header>
    <strong>Filters</strong>
    <button
      popovertarget="filters-drawer"
      popovertargetaction="hide"
      aria-label="Close filters"
    >×</button>
  </header>
  <section>…</section>
</aside>
```

Use exactly one placement class:

- `ui-start`: inline-start — left in LTR and right in RTL.
- `ui-end`: inline-end — right in LTR and left in RTL.
- `ui-top`, `ui-right`, `ui-bottom`, and `ui-left`: physical viewport sides that never reverse.

Left remains the default when no placement class is supplied for backward compatibility. The Drawer renders a border only on the edge facing the page: bottom for top, left for right, top for bottom, right for left, and the equivalent logical inner edge for start/end.

Native popover behavior provides light dismiss, <kbd>Esc</kbd>, top-layer stacking, and declarative triggers anywhere in the document.

## Customization

```css
.my-drawer {
  --ui-drawer-width: 24rem;
  --ui-drawer-height: 20rem;
  --ui-drawer-padding: 1.25rem;
}
```

All public defaults are listed in [`_variables.scss`](./_variables.scss).
