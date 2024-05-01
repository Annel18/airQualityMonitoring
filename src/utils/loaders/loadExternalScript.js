/* istanbul ignore file */
// function given by the API documentation
// https://aqicn.org/faq/2015-07-28/air-quality-widget-new-improved-feed/
export function loadExternalScript(w, d, t, f) {
  w[f] = w[f] || function (c, k, n) {
    const s = w[f];
    k = s['k'] = (s['k'] || (k ? ('&k=' + k) : ''));
    s['c'] = c = (c instanceof Array) ? c : [c];
    s['n'] = n = n || 0;
    const L = d.createElement(t);
    const e = d.getElementsByTagName(t)[0];
    L.async = 1;
    L.src = '//feed.aqicn.org/feed/' + (c[n].city) + '/' + (c[n].lang || '') + '/feed.v1.js?n=' + n + k;
    e.parentNode.insertBefore(L, e);
  };
}
