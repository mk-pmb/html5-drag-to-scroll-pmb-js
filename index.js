'use strict';
(function setup() {

  const EX = function dragToScroll(opt) {
    if (!opt) { return false; }
    if (opt.addEventListener) { return EX({ elem: opt }); }
    const evOpt = { capture: false, passive: true };
    const { elem } = opt;
    elem.addEventListener('mousedown', EX.start, evOpt);
    elem.addEventListener('mousemove', EX.move, evOpt);
    elem.addEventListener('mouseup', EX.stop, evOpt);
    elem.addEventListener('mouseleave', EX.stop, evOpt);
    return elem;
  };


  EX.dsKey = 'dragToScroll:scrolling';
  EX.debug = Boolean; // <- aka built-in no-op


  EX.start = function stopScrolling(ev) {
    if (ev.button !== 0) { return; }
    const tgt = ev.currentTarget;
    const dx = ev.clientX + tgt.scrollLeft;
    const dy = ev.clientY + tgt.scrollTop;
    tgt[EX.dsKey] = { dx, dy };
    EX.debug(ev, { dx, dy });
  };


  EX.move = function eventHandler(ev) {
    const tgt = ev.currentTarget;
    const sc = tgt[EX.dsKey];
    if (!sc) { return; }
    tgt.scrollLeft = sc.dx - ev.clientX;
    tgt.scrollTop = sc.dy - ev.clientY;
    EX.debug(ev, sc);
  };


  EX.stop = function stopScrolling(ev) {
    const tgt = ev.currentTarget;
    tgt[EX.dsKey] = false;
  };


  EX.installForCssClass = function installDragToScrollForCssClass(clsn) {
    Array.from(window.document.getElementsByClassName(clsn)).forEach(EX);
  };










  (function unifiedExport(e) {
    /* global window, define */
    const d = ((typeof define === 'function') && define);
    const m = ((typeof module === 'object') && module);
    if (d && d.amd) { d(function f() { return e; }); }
    if (m && m.exports) { m.exports = e; }
    if (d || m) { return; }
    const w = ((typeof window === 'object') && window);
    if (!w) { return; }
    e.installForCssClass('drag-to-scroll');
    w.dragToScroll = e;
  }(EX));

  return EX;
}());
