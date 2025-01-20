---
title: "useful elements"
---

## `<base>`

The `base` element in `head` overrides all subsequent `a` tags on the document that use relative paths.


## `<datalist>`

`datalist` provides suggestions for an input with the `list` prop

```html
<input name="language" list="languages">
<datalist id="languages">
  <option value="JavaScript">
  <option value="Ruby">
</datalist>

```

## `<q>`

Quote allows to mark its contents as a quote, with the `cite` attribute used to link it to the source.

```html
<q cite="https://code.tnsi.me/posts/iterm-quake/">
  Recently my work computer switched from a Windows box to a MacBook Pro, which reminded me of this feature in iTerm
</q>
```

