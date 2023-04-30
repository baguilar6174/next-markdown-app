---
title: Markdown Test File 2
description: abc234
slug: markdown-playground
tags:
  - Testing
---

```javascript:title=highlight.js
// Here is a comment
function $initHighlight(block, cls) {
  try {
    if (cls.search(/\bno\-highlight\b/) != -1)
      return process(block, true, 0x0F) + ` class="${cls}"`;
  } catch (e) {
    /* handle exception */
  }
}
```

```css
@import 'compass/reset';

// variables
$colorGreen: #008000;
$colorGreenDark: darken($colorGreen, 10);

@mixin container {
  max-width: 980px;
}
```

# Header 1

## Header 2

### Header 3

#### Header 4

##### Header 5

###### Header 6

This is [an example](http://example.com 'Example') link.

_single asterisks_

**double asterisks**

This paragraph has some `code` in it.