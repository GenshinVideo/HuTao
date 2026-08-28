const FOOD_IDS = [81790, 81791, 81792];
const BASE_URL = 'https://picks-cdn.dirigio.jp/cache';

const PREFECTURES_DATA = [
  { value: "1", label: "北海道", prefectures: [{ value: "1", label: "北海道" }] },
  { value: "2", label: "東北", prefectures: [{ value: "2", label: "青森県" }, { value: "3", label: "岩手県" }, { value: "4", label: "宮城県" }, { value: "5", label: "秋田県" }, { value: "6", label: "山形県" }, { value: "7", label: "福島県" }] },
  { value: "3", label: "関東", prefectures: [{ value: "8", label: "茨城県" }, { value: "9", label: "栃木県" }, { value: "10", label: "群馬県" }, { value: "11", label: "埼玉県" }, { value: "12", label: "千葉県" }, { value: "13", label: "東京都" }, { value: "14", label: "神奈川県" }] },
  { value: "4", label: "中部", prefectures: [{ value: "15", label: "新潟県" }, { value: "16", label: "富山県" }, { value: "17", label: "石川県" }, { value: "18", label: "福井県" }, { value: "19", label: "山梨県" }, { value: "20", label: "長野県" }, { value: "21", label: "岐阜県" }, { value: "22", label: "静岡県" }, { value: "23", label: "愛知県" }] },
  { value: "5", label: "近畿", prefectures: [{ value: "24", label: "三重県" }, { value: "25", label: "滋賀県" }, { value: "26", label: "京都府" }, { value: "27", label: "大阪府" }, { value: "28", label: "兵庫県" }, { value: "29", label: "奈良県" }, { value: "30", label: "和歌山県" }] },
  { value: "6", label: "中国・四国", prefectures: [{ value: "31", label: "鳥取県" }, { value: "32", label: "島根県" }, { value: "33", label: "岡山県" }, { value: "34", label: "広島県" }, { value: "35", label: "山口県" }, { value: "36", label: "徳島県" }, { value: "37", label: "香川県" }, { value: "38", label: "愛媛県" }, { value: "39", label: "高知県" }] },
  { value: "7", label: "九州・沖縄", prefectures: [{ value: "40", label: "福岡県" }, { value: "41", label: "佐賀県" }, { value: "42", label: "長崎県" }, { value: "43", label: "熊本県" }, { value: "44", label: "大分県" }, { value: "45", label: "宮崎県" }, { value: "46", label: "鹿児島県" }, { value: "47", label: "沖縄県" }] }
];

const searchForm = document.getElementById('search-form');
const tbody = document.getElementById('stock-tbody');
const cardContainer = document.getElementById('card-container');
const tableContainer = document.getElementById('table-container');
const messageContainer = document.getElementById('message-container');
const loading = document.getElementById('loading');

function setupCustomDropdown(containerId, options, onSelectCallback) {
  const container = document.getElementById(containerId);
  const btn = container.querySelector('.dropdown-btn');
  const textSpan = container.querySelector('.selected-text');
  const menu = container.querySelector('.dropdown-menu');
  const hiddenInput = container.querySelector('input[type="hidden"]');

  menu.innerHTML = '';
  options.forEach((opt, idx) => {
    const li = document.createElement('li');
    li.className = 'px-3 py-2 hover:bg-pink-50 cursor-pointer transition-colors';
    li.textContent = opt.label;
    li.dataset.value = opt.value;

    li.addEventListener('click', (e) => {
      e.stopPropagation();
      textSpan.textContent = opt.label;
      hiddenInput.value = opt.value;
      menu.classList.add('hidden');
      if (onSelectCallback) onSelectCallback(opt);
    });

    menu.appendChild(li);

    if (idx === 0 && !hiddenInput.value) {
      textSpan.textContent = opt.label;
      hiddenInput.value = opt.value;
    }
  });

  btn.onclick = (e) => {
    e.stopPropagation();
    document.querySelectorAll('.dropdown-menu').forEach(m => {
      if (m !== menu) m.classList.add('hidden');
    });
    menu.classList.toggle('hidden');
  };
}

document.addEventListener('click', () => {
  document.querySelectorAll('.dropdown-menu').forEach(m => m.classList.add('hidden'));
});

function initDropdowns() {
  setupCustomDropdown('dropdown-region', PREFECTURES_DATA, (selectedRegion) => {
    updatePrefectures(selectedRegion.value);
  });

  updatePrefectures("1");

  const BASE_TIMESTAMP = 1788793200;
  const ONE_DAY_SECONDS = 86400;
  const TOTAL_DAYS = 29;
  const startDate = new Date(2026, 8, 8);
  const weekDays = ["日", "月", "火", "水", "木", "金", "土"];
  const dateOptions = [];

  for (let i = 0; i < TOTAL_DAYS; i++) {
    const timestamp = BASE_TIMESTAMP + (i * ONE_DAY_SECONDS);
    const currentDate = new Date(startDate);
    currentDate.setDate(startDate.getDate() + i);

    const label = `${currentDate.getFullYear()}年${currentDate.getMonth() + 1}月${currentDate.getDate()}日(${weekDays[currentDate.getDay()]})`;
    dateOptions.push({ value: timestamp, label: label });
  }

  setupCustomDropdown('dropdown-date', dateOptions);
}

function updatePrefectures(regionValue) {
  const region = PREFECTURES_DATA.find(r => r.value === regionValue);
  if (region) {
    const prefOptions = region.prefectures.map(p => ({ value: p.label, label: p.label }));
    
    const prefContainer = document.getElementById('dropdown-pref');
    prefContainer.querySelector('.selected-text').textContent = prefOptions[0].label;
    prefContainer.querySelector('input[type="hidden"]').value = prefOptions[0].value;

    setupCustomDropdown('dropdown-pref', prefOptions);
  }
}

function getStockInfo(item) {
  if (!item || !item.shop || item.shop.active === 0) {
    return { status: 4, count: 0, text: "取り扱いなし", bgClass: "bg-[#6E7FAA]" };
  }

  if (item.food_menu_stocks && item.food_menu_stocks.length > 0 && item.status !== 0) {
    const limitNum = item.food_menu_stocks[0].limit_num || 0;
    const orderCount = item.food_menu_stocks[0].order_count || 0;
    const stockCount = Math.max(0, limitNum - orderCount);

    if (stockCount >= 10) {
      return { status: 1, count: stockCount, text: `${stockCount}個`, bgClass: "bg-[#F20C90]" };
    } else if (stockCount > 0) {
      return { status: 2, count: stockCount, text: `残り${stockCount}個`, bgClass: "bg-[#07219B]" };
    } else {
      return { status: 3, count: 0, text: "在庫なし", bgClass: "bg-[#6E7FAA]" };
    }
  }

  return { status: 3, count: 0, text: "在庫なし", bgClass: "bg-[#6E7FAA]" };
}

function renderStockBadge(stockItem) {
  const info = getStockInfo(stockItem);
  return `<span class="inline-block w-[90px] py-1.5 text-center text-white font-semibold text-xs rounded ${info.bgClass}">${info.text}</span>`;
}

function mergeShopData(e, t, n) {
  const r = new Map();
  [e, t, n].forEach(list => {
    list.forEach(item => {
      if (item && item.shop && !r.has(item.shop.id)) {
        r.set(item.shop.id, item.shop);
      }
    });
  });

  return Array.from(r.entries()).map(([shopId, shop]) => {
    return {
      shop: shop,
      stocks: [
        e.find(item => item && item.shop && item.shop.id === shopId),
        t.find(item => item && item.shop && item.shop.id === shopId),
        n.find(item => item && item.shop && item.shop.id === shopId)
      ]
    };
  });
}

function filterActiveEventShops(shopList) {
  return shopList.filter(item => {
    const isShopActive = item.shop && item.shop.active !== 0;
    const hasEvent60 = item.shop && Array.isArray(item.shop.joined_event_ids) && item.shop.joined_event_ids.includes(60);
    return isShopActive && hasEvent60;
  });
}

async function fetchStockData(e) {
  e.preventDefault();

  const selectedPref = document.getElementById('pref-input').value;
  const timestamp = document.getElementById('date-input').value;

  loading.classList.remove('hidden');
  messageContainer.classList.add('hidden');
  tableContainer.classList.add('hidden');
  cardContainer.classList.add('hidden');
  
  tbody.innerHTML = '';
  cardContainer.innerHTML = '';

  try {
    const requests = FOOD_IDS.map(id =>
      fetch(`${BASE_URL}/foods_${id}_stocks_pickup_time=${timestamp}.json`)
        .then(res => res.ok ? res.json() : [])
        .catch(() => [])
    );

    const [data81790, data81791, data81792] = await Promise.all(requests);
    const mergedData = mergeShopData(data81790, data81791, data81792);
    const validShops = filterActiveEventShops(mergedData);

    const filteredByPref = validShops.filter(item => {
      if (item.shop && item.shop.parsed_address && item.shop.parsed_address.length > 0) {
        return item.shop.parsed_address[0].indexOf(selectedPref) > -1;
      }
      return false;
    });

    if (filteredByPref.length === 0) {
      messageContainer.classList.remove('hidden');
      messageContainer.textContent = '選択した都道府県では選択した受取日で原神コラボ商品を取り扱っていません。';
    } else {
      tableContainer.classList.remove('hidden', 'md:block');
      tableContainer.classList.add('hidden', 'md:block');
      cardContainer.classList.remove('hidden', 'md:hidden');
      cardContainer.classList.add('block', 'md:hidden');

      filteredByPref.forEach(item => {
        const cleanName = item.shop.name ? item.shop.name.replace(/サーティワンアイスクリーム\s*/g, '') : '';
        
        const tr = document.createElement('tr');
        tr.className = 'border-b border-[#D9DEEB] hover:bg-gray-50 transition-colors text-center';
        tr.innerHTML = `
          <td class="p-3 text-left font-bold text-gray-900">${cleanName}</td>
          <td class="p-2">${renderStockBadge(item.stocks[0])}</td>
          <td class="p-2">${renderStockBadge(item.stocks[1])}</td>
          <td class="p-2">${renderStockBadge(item.stocks[2])}</td>
        `;
        tbody.appendChild(tr);

        const card = document.createElement('div');
        card.className = 'bg-white p-4 rounded border border-[#D9DEEB] shadow-sm flex flex-col gap-2.5';
        card.innerHTML = `
          <div class="font-bold text-gray-900 text-sm border-b border-gray-100 pb-2">${cleanName}</div>
          <div class="flex justify-between items-center text-xs">
            <span class="text-gray-600">アイスクリームセット（スモール）</span>
            ${renderStockBadge(item.stocks[0])}
          </div>
          <div class="flex justify-between items-center text-xs">
            <span class="text-gray-600">アイスクリームセット（レギュラー）</span>
            ${renderStockBadge(item.stocks[1])}
          </div>
          <div class="flex justify-between items-center text-xs">
            <span class="text-gray-600">フレッシュパックミニ</span>
            ${renderStockBadge(item.stocks[2])}
          </div>
        `;
        cardContainer.appendChild(card);
      });
    }
  } catch (err) {
    console.error(err);
    messageContainer.classList.remove('hidden');
    messageContainer.textContent = 'データの取得に失敗しました。時間をおいて再試行してください。';
    messageContainer.classList.add('text-red-500');
  } finally {
    loading.classList.add('hidden');
  }
}

searchForm.addEventListener('submit', fetchStockData);
initDropdowns();