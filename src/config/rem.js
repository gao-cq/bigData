(function(doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function() {
            var clientHeight = docEl.clientHeight;
            if (!clientHeight) return;
            docEl.style.fontSize = (clientHeight / 50) + 'px';
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    recalc()
    // doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);


export const resize=(fun)=>{
    var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
    if (!document.addEventListener) return;
    window.addEventListener(resizeEvt, fun, false);
    // document.addEventListener('DOMContentLoaded', fun, false);
}