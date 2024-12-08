/* global document */
'use strict';
function define(factory) {
  const dragToScroll = factory();
  const elem = document.getElementById('scrolling');
  dragToScroll({ elem });
}
define.amd = true;
