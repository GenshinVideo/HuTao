document.addEventListener("DOMContentLoaded", function () {


  // Sidenavの初期化
  var elems = document.querySelector(".sidenav");
  var options = { draggable: false };
  var instance = M.Sidenav.init(elems, options);



  // Sidenav内のリンククリック時の処理
  [].slice.call(document.querySelectorAll(".sidenav a[href]"))
    .forEach(function (i) {
      i.addEventListener("click", function () {
        document.querySelector(".progress").style.display = "";
        var existingIframe = document.querySelector("iframe.notice-main");
        if (existingIframe) {
          existingIframe.remove();
        }
        var ifr = document.createElement("iframe");
        ifr.src = this.dataset.link;
        ifr.className = "notice-main";
        ifr.onload = function () {
          document.querySelector(".progress").style.display = "none";
        };
        document.body.appendChild(ifr);
        var active = document.querySelector(".sidenav .now");
        active && active.classList.remove("now", "active");
        this.parentNode.classList.add("now", "active", "actived");
        instance.close();
      });
    });



  // 初回アクセス、または最後のアクセスから1週間以上経過している場合にメニューを自動で開く
  const sidenavTrigger = document.querySelector(".sidenav-trigger");
  if (sidenavTrigger) {
    const storageKey = "lastVisit";
    const now = new Date().getTime();
    const oneWeek = 7 * 24 * 60 * 60 * 1000;
    const lastVisit = localStorage.getItem(storageKey);

    if (!lastVisit || now - parseInt(lastVisit, 10) > oneWeek) {
      setTimeout(() => {
        sidenavTrigger.click();
      }, 500);
    }
    localStorage.setItem(storageKey, now);
  }



  // Collapsibleの初期化
  var collapsibleElems = document.querySelectorAll(".collapsible");
  M.Collapsible.init(collapsibleElems, options);

  var expandableElem = document.querySelector(".collapsible.expandable");
  M.Collapsible.init(expandableElem, { accordion: false });



  // iframeの初期化
  const GI = "https://webstatic-sea.mihoyo.com/hk4e/announcement/index.html?auth_appid=announcement&bundle_id=hk4e_global&game=hk4e&game_biz=hk4e_global&lang=JA&level=100&platform=pc&region=os_euro&uid=100000000#/";
  const queryToSrcMap = {
    HSR: "https://sdk.hoyoverse.com/hkrpg/announcement/index.html?game_biz=hkrpg_global&bundle_id=hkrpg_global&game=hkrpg&platform=pc&uid=100000000&level=100&region=prod_official_asia&lang=ja#/",
    ZZZ: "https://sdk.hoyoverse.com/nap/announcement/index.html?game_biz=nap_global&bundle_id=nap_global&game=nap&platform=pc&uid=1000000000&level=100&region=prod_gf_jp&lang=ja#/",
    HI3: "https://sdk.hoyoverse.com/bh3/announcement/index.html?game_biz=bh3_global&bundle_id=bh3_jp&game=bh3&platform=pc&uid=10000000&level=100&region=jp01&lang=ja#/",
    Material: "Material/",
    Resource: "Resource/",
    AutoSign: "AutoSign/"
  };

  const params = new URLSearchParams(window.location.search);
  const iframe = document.querySelector(".notice-main");

  let newSrc = GI;
  for (const [key, value] of Object.entries(queryToSrcMap)) {
    if (params.get(key) !== null) {
      newSrc = value;
    }
  }
  if (iframe) {
    iframe.src = newSrc;
  }



  // クエリを現在のURLに追加する処理
  document.querySelectorAll(".Query").forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      const linkValue = event.target.getAttribute("query-link") || event.target.getAttribute("data-link");
      if (!linkValue) return;
      const cleanedValue = linkValue.replace(/\/+$/, "");
      const currentUrl = new URL(window.location);

      history.replaceState(null, "", currentUrl.origin + currentUrl.pathname + "?" + cleanedValue);
    });
  });



});
