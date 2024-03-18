(function (doc, win) {
  	var docEl = doc.documentElement,
    recalc = function () {
      	var clientWidth = docEl.clientWidth>414 ? 414 : docEl.clientWidth;//设备宽度
      	if (!clientWidth) return;
      	docEl.style.fontSize = 20 * (clientWidth / 380) + 'px';//换算
    };
	recalc();
  	if (!doc.addEventListener) return;
  	doc.addEventListener('DOMContentLoaded', recalc, false);
  	win.addEventListener('resize', recalc, false);
})(document, window);