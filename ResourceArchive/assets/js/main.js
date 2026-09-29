(() => {
  "use strict";

  const REPO_OWNER = "GenshinVideo";
  const REPO_NAME = "Hyacinthia";
  const BRANCH = "main";

  const TREES_API_URL = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/git/trees/${BRANCH}?recursive=1`;
  const RAW_BASE_URL = `https://raw.githubusercontent.com/${REPO_OWNER}/${REPO_NAME}/${BRANCH}/Packages/`;
  const MAPPING_URL = "assets/data/game_names.json";

  const gameTabs = document.getElementById("game-tabs");
  const categoryTabs = document.getElementById("category-tabs");
  const resourceList = document.getElementById("resource-list");
  const status = document.getElementById("status");

  const categories = [
    { id: "all", label: "All" },
    { id: "Package", label: "Package" },
    { id: "VoicePack", label: "Voice Pack" },
    { id: "PackageDiff", label: "Package Diff" },
    { id: "VoicePackDiff", label: "Voice Pack Diff" },
    { id: "Launcher", label: "Launcher" }
  ];

  const CATEGORY_ORDER = {
    'Package': 1,
    'PackageDiff': 2,
    'VoicePack_Japanese': 3,
    'VoicePack_English': 4,
    'VoicePack_Chinese': 5,
    'VoicePack_Korean': 6,
    'VoicePackDiff_Japanese': 7,
    'VoicePackDiff_English': 8,
    'VoicePackDiff_Chinese': 9,
    'VoicePackDiff_Korean': 10
  };

  let games = [];
  let selectedGame = null;
  let selectedCategory = "all";
  const dataCache = new Map();

  const DEFAULT_BG_VIDEO = "assets/videos/Unknown.mp4";
  function updateBackgroundVideo(videoUrl) {
    const videoElement = document.querySelector(".SakuraWallpaper video");
    if (!videoElement) return;

    const targetUrl = videoUrl || DEFAULT_BG_VIDEO;

    // 現在表示中の動画と異なる場合のみ更新
    if (!videoElement.src.endsWith(targetUrl)) {
      videoElement.src = targetUrl;
      videoElement.load();
      videoElement.play().catch(err => console.log("Video autoplay blocked:", err));
    }
  }


  function setStatus(message, isError = false) {
    status.textContent = message;
    status.classList.toggle("error", isError);
    status.hidden = !message;
  }

  function makeTab(label, selected, onClick) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "tab";
    button.textContent = label;
    button.setAttribute("aria-selected", String(selected));
    button.addEventListener("click", onClick);
    return button;
  }

  function categoryForKey(key) {
    if (key === "Package" || key === "Launcher") return key;
    if (key.startsWith("VoicePackDiff_")) return "VoicePackDiff";
    if (key.startsWith("VoicePack_")) return "VoicePack";
    if (key === "PackageDiff") return "PackageDiff";
    return null;
  }

  function safeUrl(value) {
    if (typeof value !== "string" || !value.trim()) return null;
    try {
      const url = new URL(value, document.baseURI);
      return url.protocol === "https:" || url.protocol === "http:" ? url.href : null;
    } catch {
      return null;
    }
  }

  function getFilenameFromUrl(url) {
    const validUrl = safeUrl(url);
    if (!validUrl) return null;
    try {
      const parsed = new URL(validUrl);
      const pathname = parsed.pathname;
      const filename = pathname.substring(pathname.lastIndexOf('/') + 1);
      return filename ? decodeURIComponent(filename) : null;
    } catch {
      return null;
    }
  }

  function compareVersions(verA, verB) {
    const numsA = (verA.match(/\d+/g) || []).map(Number);
    const numsB = (verB.match(/\d+/g) || []).map(Number);
    const maxLen = Math.max(numsA.length, numsB.length);

    for (let i = 0; i < maxLen; i++) {
      const valA = numsA[i] || 0;
      const valB = numsB[i] || 0;
      if (valA !== valB) {
        return valB - valA;
      }
    }
    return 0;
  }

  function appendMeta(container, label, value) {
    if (typeof value !== "string" || !value.trim()) return;
    const p = document.createElement("p");
    p.className = "meta";
    p.append(document.createTextNode(label + ": "));
    const code = document.createElement("code");
    code.textContent = value;
    p.append(code);
    container.append(p);
  }

  function makeDownload(url, label = "Download") {
    const validUrl = safeUrl(url);
    if (!validUrl) return null;
    const link = document.createElement("a");
    link.className = "download";
    link.href = validUrl;
    link.textContent = "↓ " + label;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.addEventListener("click", (e) => e.stopPropagation());
    return link;
  }

  function makeCard(defaultTitle, item, typeLabel, rawVersion) {
    const hasSegments = Array.isArray(item.Segments) && item.Segments.length > 0;
    const fileName = getFilenameFromUrl(item.url) || defaultTitle;
    const displayVersion = rawVersion.replace(/^v/i, '');

    if (!hasSegments) {
      const card = document.createElement("article");
      card.className = "resource-card";

      const main = document.createElement("div");
      main.className = "resource-main";

      const top = document.createElement("div");
      top.className = "card-top";

      const heading = document.createElement("h2");
      const versionBadge = document.createElement("span");
      versionBadge.className = "version-badge";
      versionBadge.textContent = displayVersion;
      
      const fileNameSpan = document.createElement("span");
      fileNameSpan.className = "file-name-text";
      fileNameSpan.textContent = fileName;

      heading.append(versionBadge, fileNameSpan);

      const kind = document.createElement("span");
      kind.className = "kind";
      kind.textContent = typeLabel;
      top.append(heading, kind);
      main.append(top);

      if (item.md5) {
        appendMeta(main, "MD5", item.md5);
      } else {
        const emptyMeta = document.createElement("div");
        emptyMeta.className = "meta";
        main.append(emptyMeta);
      }

      const download = makeDownload(item.url);
      if (download) main.append(download);

      card.append(main);
      return card;
    }

    const details = document.createElement("details");
    details.className = "resource-card resource-details";

    const summary = document.createElement("summary");
    summary.className = "resource-main summary-main";

    const top = document.createElement("div");
    top.className = "card-top";
    const heading = document.createElement("h2");
    
    let mainFileName = fileName;
    if (mainFileName === defaultTitle && item.Segments[0]?.url) {
      const segName = getFilenameFromUrl(item.Segments[0].url);
      if (segName) {
        mainFileName = segName.replace(/\.(001|z01|part1\.rar|zip\.001)$/i, "");
      }
    }

    const versionBadge = document.createElement("span");
    versionBadge.className = "version-badge";
    versionBadge.textContent = displayVersion;

    const fileNameSpan = document.createElement("span");
    fileNameSpan.className = "file-name-text";
    fileNameSpan.textContent = mainFileName;

    heading.append(versionBadge, fileNameSpan);

    const kind = document.createElement("span");
    kind.className = "kind";
    kind.textContent = typeLabel;
    top.append(heading, kind);
    summary.append(top);

    if (item.md5) {
      appendMeta(summary, "MD5", item.md5);
    } else {
      const emptyMeta = document.createElement("div");
      emptyMeta.className = "meta";
      summary.append(emptyMeta);
    }

    const mainDownload = makeDownload(item.url);
    if (mainDownload) {
      summary.append(mainDownload);
    } else {
      const toggleIndicator = document.createElement("span");
      toggleIndicator.className = "toggle-indicator";
      toggleIndicator.textContent = `Segments (${item.Segments.length}) ▼`;
      summary.append(toggleIndicator);
    }

    details.append(summary);

    const list = document.createElement("ul");
    list.className = "segment-list";

    item.Segments.forEach((segment, index) => {
      const li = document.createElement("li");
      li.className = "segment-item";

      const segFileName = getFilenameFromUrl(segment.url) || `${mainFileName}.${String(index + 1).padStart(3, "0")}`;

      const name = document.createElement("strong");
      name.className = "segment-name";
      name.textContent = segFileName;
      li.append(name);

      appendMeta(li, "MD5", segment.md5);

      const link = makeDownload(segment.url, "Download part");
      if (link) li.append(link);
      list.append(li);
    });

    details.append(list);
    return details;
  }

  function renderResources(data) {
    resourceList.replaceChildren();

    const allItems = [];

    Object.entries(data || {}).forEach(([key, group]) => {
      const category = categoryForKey(key);
      if (!category || !group || typeof group !== "object") return;

      if (selectedCategory !== "all") {
        if (selectedCategory !== category) return;
      } else {
        if (category === "Launcher") return;
      }

      const versions = group.version && typeof group.version === "object" ? group.version : {};

      Object.entries(versions).forEach(([versionKey, item]) => {
        if (!item || typeof item !== "object") return;

        allItems.push({
          key,
          category,
          rawVersion: versionKey,
          item
        });
      });
    });

    allItems.sort((a, b) => {
      const versionCompare = compareVersions(a.rawVersion, b.rawVersion);
      if (versionCompare !== 0) {
        return versionCompare;
      }

      const orderA = CATEGORY_ORDER[a.key] || 99;
      const orderB = CATEGORY_ORDER[b.key] || 99;

      if (orderA !== orderB) {
        return orderA - orderB;
      }

      return a.key.localeCompare(b.key);
    });

    allItems.forEach(({ key, category, rawVersion, item }) => {
      const fallbackTitle = `${key} · ${rawVersion}`;
      const typeLabel = Array.isArray(item.Segments) && item.Segments.length ? "Split archive" : category;
      resourceList.append(makeCard(fallbackTitle, item, typeLabel, rawVersion));
    });

    const count = allItems.length;
    setStatus(count ? "" : "No resources found for this category.");
    if (!count) {
      const empty = document.createElement("p");
      empty.className = "empty";
      empty.textContent = "No resources available.";
      resourceList.append(empty);
    }
  }

  async function loadSelectedGame() {
    if (!selectedGame) return;
    updateBackgroundVideo(selectedGame.bg);

    if (dataCache.has(selectedGame.id)) {
      renderResources(dataCache.get(selectedGame.id));
      return;
    }

    setStatus("Loading resources...");
    resourceList.replaceChildren();
    try {
      const response = await fetch(selectedGame.rawUrl, { cache: "default" });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const data = await response.json();
      dataCache.set(selectedGame.id, data);
      renderResources(data);
    } catch (error) {
      console.error("Failed to load resource data:", error);
      setStatus("Failed to load resource data. Please check the JSON path and format.", true);
    }
  }

  function renderGameTabs() {
    gameTabs.replaceChildren();
    games.forEach((game) => {
      gameTabs.append(makeTab(game.name, selectedGame?.id === game.id, () => {
        if (selectedGame?.id === game.id) return;
        selectedGame = game;
        selectedCategory = "all";
        renderGameTabs();
        renderCategoryTabs();
        loadSelectedGame();
      }));
    });
  }

  function renderCategoryTabs() {
    categoryTabs.replaceChildren();
    categories.forEach((category) => {
      categoryTabs.append(makeTab(category.label, selectedCategory === category.id, () => {
        selectedCategory = category.id;
        renderCategoryTabs();
        const data = dataCache.get(selectedGame.id);
        if (data) renderResources(data);
      }));
    });
  }

  async function init() {
    try {
      setStatus("Loading games list...");

      // 1. 名前マッピングファイルを読み込む（無ければ空オブジェクト）
      let nameMapping = {};
      try {
        const mapRes = await fetch(MAPPING_URL, { cache: "default" });
        if (mapRes.ok) nameMapping = await mapRes.json();
      } catch (e) {
        console.warn("Could not load name mapping file, fallback to path names.", e);
      }

      // 2. GitHub Trees API から Packages フォルダ内の構造を全取得
      const response = await fetch(TREES_API_URL, { cache: "default" });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const treeData = await response.json();

      // 3. Packages/{biz}/{game_id}/package.json にマッチするパスを抽出
      const packagePaths = treeData.tree
        .map(item => item.path)
        .filter(path => /^Packages\/[^\/]+\/[^\/]+\/package\.json$/.test(path));

      // 4. ゲームリスト初期生成
      const mappedKeys = Object.keys(nameMapping);

      games = packagePaths.map(path => {
        const parts = path.split('/');
        const biz = parts[1];
        const gameId = parts[2];
        const key = `${biz}/${gameId}`;
        const mappedData = nameMapping[key];
        const gameName = typeof mappedData === "object" ? mappedData.name : (mappedData || key);
        const bgVideo = typeof mappedData === "object" ? mappedData.bg : null;

        return {
          id: key,
          name: gameName,
          bg: bgVideo,
          rawUrl: `${RAW_BASE_URL}${biz}/${gameId}/package.json`,
          orderIndex: mappedKeys.includes(key) ? mappedKeys.indexOf(key) : 9999
        };
      });

      // 5. ソート処理
      // - game_names.json に記述されている順序を最優先
      // - 未登録のゲームは末尾にまとめてフォルダ名（key）順
      games.sort((a, b) => {
        if (a.orderIndex !== b.orderIndex) {
          return a.orderIndex - b.orderIndex;
        }
        return a.id.localeCompare(b.id);
      });

      if (!games.length) throw new Error("No games/package.json found in repository.");

      selectedGame = games[0];
      renderGameTabs();
      renderCategoryTabs();
      await loadSelectedGame();
    } catch (error) {
      console.error("Failed to initialize archive:", error);
      setStatus("Failed to load game list from repository.", true);
    }
  }

  init();
})();