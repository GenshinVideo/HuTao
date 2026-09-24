document.addEventListener("DOMContentLoaded", function () {


  // Sidenavの初期化
  var elems = document.querySelector(".sidenav");
  var options = { draggable: false };
  var instance = M.Sidenav.init(elems, options);



  // Sidenav内のリンククリック時の処理
  [].slice.call(document.querySelectorAll(".sidenav a[href]:not(.Query)"))
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
  const queryToSrcMap = {
    GI: "https://webstatic-sea.mihoyo.com/hk4e/announcement/index.html?auth_appid=announcement&bundle_id=hk4e_global&game=hk4e&game_biz=hk4e_global&lang=JA&level=60&platform=pc&region=os_asia&uid=100000000#/",
    HSR: "https://sdk.hoyoverse.com/hkrpg/announcement/index.html?game_biz=hkrpg_global&bundle_id=hkrpg_global&game=hkrpg&platform=pc&uid=100000000&level=100&region=prod_official_asia&lang=ja#/",
    ZZZ: "https://sdk.hoyoverse.com/nap/announcement/index.html?game_biz=nap_global&bundle_id=nap_global&game=nap&platform=pc&uid=1000000000&level=100&region=prod_gf_jp&lang=ja#/",
    HI3: "https://sdk.hoyoverse.com/bh3/announcement/index.html?game_biz=bh3_global&bundle_id=bh3_jp&game=bh3&platform=pc&uid=10000000&level=100&region=jp01&lang=ja#/",
    HI3: "https://sdk.hoyoverse.com/bh3/announcement/index.html?game_biz=bh3_global&bundle_id=bh3_jp&game=bh3&platform=pc&uid=10000000&level=100&region=jp01&lang=ja#/",
    EF: "https://ef-webview.gryphline.com/page/game_bulletin?platform=Windows&channel=6&lang=ja-jp&server=2&subChannel=801",
    Material: "Material/",
    HYVLauncherVideo: "../HYVLauncherVideo/",
    Resource: "Resource/",
    AutoSign: "AutoSign/",
    AutoSign2: "AutoSign2/",
    Gallery: "Gallery/",
    ChronoHook: "ChronoHook/",
    ClockWidget: "ClockWidget/",
    FontGenerator: "FontGenerator/",
    31: "31/",
  };

  const params = new URLSearchParams(window.location.search);
  const iframe = document.querySelector(".notice-main");

  let newSrc = queryToSrcMap.GI;
  let activeQuery = "GI";

  for (const [key, value] of Object.entries(queryToSrcMap)) {
    if (params.get(key) !== null) {
      newSrc = value;
      activeQuery = key;
    }
  }
  if (iframe) {
    iframe.onload = function () {
      document.querySelector(".progress").style.display = "none";
    };
    iframe.src = newSrc;
  }

  if (activeQuery) {
    var active = document.querySelector(".sidenav .now");
    active && active.classList.remove("now", "active");

    var activeLink = [].slice.call(document.querySelectorAll(".sidenav .Query"))
      .find(function (link) {
        var linkValue = link.getAttribute("query-link") || link.getAttribute("data-link");
        return linkValue && linkValue.replace(/\/+$/, "") === activeQuery;
      });

    if (activeLink) {
      activeLink.parentNode.classList.add("now", "active", "actived");
    }
  }

  // クエリを現在のURLに追加する処理
  document.querySelectorAll(".Query").forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      document.querySelector(".progress").style.display = "";

      const linkValue = event.currentTarget.getAttribute("query-link") || event.currentTarget.getAttribute("data-link");
      if (!linkValue) return;
      const cleanedValue = linkValue.replace(/\/+$/, "");
      const currentUrl = new URL(window.location);

      history.replaceState(null, "", currentUrl.origin + currentUrl.pathname + "?" + cleanedValue);

      var iframe = document.querySelector(".notice-main");

      if (queryToSrcMap[cleanedValue] && iframe) {
        iframe.onload = function () {
          document.querySelector(".progress").style.display = "none";
        };
        iframe.src = queryToSrcMap[cleanedValue];
      }

      var active = document.querySelector(".sidenav .now");
      active && active.classList.remove("now", "active");
      this.parentNode.classList.add("now", "active", "actived");
      instance.close();
    });
  });

});
