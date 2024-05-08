// function given by the API documentation
// https://aqicn.org/faq/2015-07-28/air-quality-widget-new-improved-feed/
export function loadExternalScript(w: { [key: string]: any }, d: Document, t: string, f: string) {
  w[f] = w[f] || function (c: { city: string; lang?: string }[], k: string, n: number) {
    const s: { [key: string]: any } = w[f] || {};
    k = s['k'] = (s['k'] || (k ? ('&k=' + k) : ''));
    s['c'] = c = (c instanceof Array) ? c : [c];
    s['n'] = n = n || 0;
    const L = d.createElement(t) as HTMLScriptElement;
    const e = d.getElementsByTagName(t)[0];
    if (e) {
      const city = c[n].city;
      const lang = c[n].lang || '';
      L.async = true;
      L.src = '//feed.aqicn.org/feed/' + city + '/' + lang + '/feed.v1.js?n=' + n + k;
      e.parentNode?.insertBefore(L, e);
    } else {
      console.error('Cannot find element to insert script');
    }
  };
}



