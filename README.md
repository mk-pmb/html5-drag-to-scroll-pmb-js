
<!--#echo json="package.json" key="name" underline="=" -->
html5-drag-to-scroll-pmb
========================
<!--/#echo -->

<!--#echo json="package.json" key="description" -->
Drag the content to scroll your `overflow`-ing element.
<!--/#echo -->


* [Live demo](https://mk-pmb.github.io/html5-drag-to-scroll-pmb-js/demo.html)


API
---

This module exports one function:

### dragToScroll(opt)

`opt` is an options object. Currently, the only supported key is:

* `elem`: The HTML DOM element on which to install.

* When you pass a DOM element instead of `opt`, it is used as the `elem` opt.




Side effects
------------

* When the module is loaded and cannot find any module loading system,
  it assumes you've run it inside a plain simple website (like the live demo).
  In that case, it exposes itself on a window global named `dragToScroll`
  and also installs itself onto all elements currently available that have
  the CSS class `drag-to-scroll`.




<!--#toc stop="scan" -->



Known issues
------------

* Needs more/better tests and docs.




&nbsp;


License
-------
<!--#echo json="package.json" key=".license" -->
ISC
<!--/#echo -->
