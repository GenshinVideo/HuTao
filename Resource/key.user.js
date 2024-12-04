// ==UserScript==
// @name           CORS Bypass for Resource Fetcher
// @description    Fetches resource data and handles CORS issues for Hoyoverse API.
// @description:ja リソースデータを取得し、Hoyoverse APIのCORS問題を解決します。
// @author         HuTao
// @namespace      https://genshinvideo.github.io/HuTao/
// @version        1.0
// @match          https://genshinvideo.github.io/HuTao/Resource/
// @match          http://localhost:8080/Resource/
// @icon           https://avatars.githubusercontent.com/u/92409960
// @grant          GM_setValue
// @grant          GM_getValue
// @grant          GM_xmlhttpRequest
// @run-at         document-start
// ==/UserScript==
const url = localStorage.getItem('url');
if (url && url.startsWith('https://sg-hyp-api.hoyoverse.com/')) {
  GM_xmlhttpRequest({
    method: 'GET',
    url: url,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    onload: function(response) {
      console.log("Saved Response");
      localStorage.setItem('ResourceJson', response.responseText);
    }
  });
} else {
  console.log("No URL found in localStorage.");
}

if (!GM_getValue('CROSS')) {
  GM_setValue('CROSS', 'false');
}
document.addEventListener('DOMContentLoaded', function() {
  const saveButton = document.querySelector('.savebutton');
  if (saveButton) {
    saveButton.addEventListener('click', function() {
      const inputElement = document.querySelector('input[placeholder="https://sdk-..."]');
      const url = inputElement ? inputElement.value : null;

      if (url && url.startsWith('https://sg-hyp-api.hoyoverse.com/')) {
        GM_xmlhttpRequest({
          method: 'GET',
          url: url,
          headers: {
            'Access-Control-Allow-Origin': '*'
          },
          onload: function(response) {
            localStorage.setItem('ResourceJson', response.responseText);
            localStorage.setItem('predl', document.querySelector('.predlcheckbox').checked);
            localStorage.setItem('url', url);

            if (GM_getValue('CROSS') === "false") {
              GM_setValue('CROSS', "true");
              window.location.reload();
            }
          }
        });
      }
    });
  }
});
