
  // ドロップダウンのオプション
  const formatOptions = [
    { value: 'null', text: 'null' },
    { value: 'raw', text: 'raw' },
    { value: 't', text: 't' },
    { value: 'T', text: 'T' },
    { value: 'd', text: 'd' },
    { value: 'D', text: 'D' },
    { value: 'f', text: 'f' },
    { value: 'F', text: 'F' },
    { value: 'R', text: 'R' },
    { value: 'end-raw', text: 'end-raw' },
    { value: 'end-t', text: 'end-t' },
    { value: 'end-T', text: 'end-T' },
    { value: 'end-d', text: 'end-d' },
    { value: 'end-D', text: 'end-D' },
    { value: 'end-f', text: 'end-f' },
    { value: 'end-F', text: 'end-F' },
    { value: 'end-R', text: 'end-R' }
  ];

  // フォーマットフィールドの生成
  function createFormatFields() {
    const formatFields = document.getElementById('formatFields');
    const fields = ['A', 'B', 'C', 'D', 'E'];
    fields.forEach(field => {
      const textInput = document.createElement('input');
      textInput.type = 'text';
      textInput.id = `text${field}`;
      textInput.placeholder = `Text ${field}`;

      const select = document.createElement('select');
      select.id = `format${field}`;
      formatOptions.forEach(option => {
        const opt = document.createElement('option');
        opt.value = option.value;
        opt.text = option.text;
        select.appendChild(opt);
      });

      formatFields.appendChild(textInput);
      formatFields.appendChild(select);

      textInput.addEventListener('input', () => {
        updateTimestamp();
        saveToLocalStorage();
      });
      select.addEventListener('change', () => {
        updateTimestamp();
        saveToLocalStorage();
      });
    });
  }

  // デフォルト値の設定
  function setDefaultValues() {
    document.getElementById('textA').value = '';
    document.getElementById('formatA').value = 't';
    document.getElementById('textB').value = ' (';
    document.getElementById('formatB').value = 'R';
    document.getElementById('textC').value = ') ～ ';
    document.getElementById('formatC').value = 'end-t';
    document.getElementById('textD').value = ' (';
    document.getElementById('formatD').value = 'end-R';
    document.getElementById('textE').value = ')';
    document.getElementById('formatE').value = 'null';
  }

  // localStorage に保存
  function saveToLocalStorage() {
    const startInput = document.getElementById('startTime').value;
    const endInput = document.getElementById('endTime').value;
    const startDate = startInput ? new Date(startInput) : new Date();
    const endDate = endInput ? new Date(endInput) : new Date();

    const data = {
      startHour: String(startDate.getHours()).padStart(2, '0'),
      startMinute: String(startDate.getMinutes()).padStart(2, '0'),
      startSecond: String(startDate.getSeconds()).padStart(2, '0'),
      endHour: String(endDate.getHours()).padStart(2, '0'),
      endMinute: String(endDate.getMinutes()).padStart(2, '0'),
      endSecond: String(endDate.getSeconds()).padStart(2, '0'),
      customFormats: {
        textA: document.getElementById('textA').value,
        formatA: document.getElementById('formatA').value,
        textB: document.getElementById('textB').value,
        formatB: document.getElementById('formatB').value,
        textC: document.getElementById('textC').value,
        formatC: document.getElementById('formatC').value,
        textD: document.getElementById('textD').value,
        formatD: document.getElementById('formatD').value,
        textE: document.getElementById('textE').value,
        formatE: document.getElementById('formatE').value
      },
      WebhookUrl: document.getElementById('WebhookUrlInput').value,

      Title: document.getElementById('TitleInput').value,
      Name: document.getElementById('NameInput').value,
      Avatar_Url: document.getElementById('Avatar_UrlInput').value
    };
    localStorage.setItem('timestampAppData', JSON.stringify(data));
  }

  // localStorage から読み込み
  function loadFromLocalStorage() {
    const data = JSON.parse(localStorage.getItem('timestampAppData') || '{}');
    const now = new Date();
    const jstNow = new Date(now.toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' }));
    const tomorrow = new Date(jstNow.getTime() + 24 * 60 * 60 * 1000);

    // デフォルトは現在のJST時刻
    const defaultHour = String(jstNow.getHours()).padStart(2, '0');
    const defaultMinute = String(jstNow.getMinutes()).padStart(2, '0');
    const defaultSecond = String(jstNow.getSeconds()).padStart(2, '0');

    // 開始時間の設定
    const startHour = data.startHour || defaultHour;
    const startMinute = data.startMinute || defaultMinute;
    const startSecond = data.startSecond || defaultSecond;
    document.getElementById('startTime').value = 
      `${jstNow.getFullYear()}-${String(jstNow.getMonth() + 1).padStart(2, '0')}-${String(jstNow.getDate()).padStart(2, '0')}T${startHour}:${startMinute}:${startSecond}`;

    // 終了時間の設定
    const endHour = data.endHour || defaultHour;
    const endMinute = data.endMinute || defaultMinute;
    const endSecond = data.endSecond || defaultSecond;
    document.getElementById('endTime').value = 
      `${tomorrow.getFullYear()}-${String(tomorrow.getMonth() + 1).padStart(2, '0')}-${String(tomorrow.getDate()).padStart(2, '0')}T${endHour}:${endMinute}:${endSecond}`;

    // カスタムフォーマット 空だった際に自動挿入が可能。
    if (data.customFormats) {
      const { textA, formatA, textB, formatB, textC, formatC, textD, formatD, textE, formatE } = data.customFormats;
      document.getElementById('textA').value = textA || '';
      document.getElementById('formatA').value = formatA || 'null';
      document.getElementById('textB').value = textB || '';
      document.getElementById('formatB').value = formatB || 'null';
      document.getElementById('textC').value = textC || '';
      document.getElementById('formatC').value = formatC || 'null';
      document.getElementById('textD').value = textD || '';
      document.getElementById('formatD').value = formatD || 'null';
      document.getElementById('textE').value = textE || '';
      document.getElementById('formatE').value = formatE || 'null';
    }

    // ウェブフックURL
    document.getElementById('WebhookUrlInput').value = data.WebhookUrl || '';

    document.getElementById('TitleInput').value = data.Title || '';
    document.getElementById('NameInput').value = data.Name || '';
    document.getElementById('Avatar_UrlInput').value = data.Avatar_Url || '';
  }

  function discordTimestampJST(year, month, day, hour, minute, second) {
    var jstDate = new Date(year, month - 1, day, hour, minute, second);
    var utcDate = new Date(Date.UTC(year, month - 1, day, hour - 9, minute, second));
    var unix = Math.floor(utcDate.getTime() / 1000);
    const weekdays = ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日'];
    const weekday = weekdays[jstDate.getDay()];

    return {
      year, month, day, hour, minute, second, weekday,
      unix,
      raw: `<t:${unix}>`,
      shortTime: `<t:${unix}:t>`,
      longTime: `<t:${unix}:T>`,
      shortDate: `<t:${unix}:d>`,
      longDate: `<t:${unix}:D>`,
      dateTime: `<t:${unix}:f>`,
      full: `<t:${unix}:F>`,
      relative: `<t:${unix}:R>`
    };
  }

function getRelativeTime(unix) {
  const nowSec   = Math.floor(Date.now() / 1000);
  const diff     = unix - nowSec;
  const isPast   = diff < 0;
  const absSec   = Math.abs(diff);

  // --- 秒・分・時間 ---
  if (absSec < 60) {
    return `${absSec}秒${isPast ? '前' : '後'}`;
  }
  const m = Math.floor(absSec / 60);
  if (m < 60) {
    return `${m}分${isPast ? '前' : '後'}`;
  }
  const h = Math.floor(m / 60);
  if (h < 24) {
    return `${h}時間${isPast ? '前' : '後'}`;
  }

  // --- 日表示（切り上げ）---
  const daysDisplay = Math.ceil(absSec / 86400);
  if (daysDisplay <= 25) {
    return `${daysDisplay}日${isPast ? '前' : '後'}`;
  }

  // --- 月表示か年表示かの境界は「26日～318日」で月／「319日以上」で年 ---
  const daysFloor = Math.floor(absSec / 86400);
  if (daysFloor < 319) {
    // 30日ごとに切り捨て、1～10ヶ月にクランプ
    let months = Math.floor(daysFloor / 30);
    months = Math.max(1, Math.min(months, 10));
    return `${months}ヶ月${isPast ? '前' : '後'}`;
  }

  // --- 年表示（カレンダー月差を“半年（6ヶ月）”で繰り上げ）---
  const now = new Date();
  const tgt = new Date(unix * 1000);

  // カレンダー月差を算出：年差×12 + 月差 - 日調整
  let monthDiff =
    (tgt.getFullYear()  - now.getFullYear())  * 12 +
    (tgt.getMonth()     - now.getMonth());
  if (tgt.getDate() < now.getDate()) {
    monthDiff -= 1;
  }
  const absMonthDiff = Math.abs(monthDiff);

  // 年数と余り（月数）
  let years   = Math.floor(absMonthDiff / 12);
  const rem   = absMonthDiff % 12;
  // 余りが6ヶ月以上なら1年繰り上げ
  if (rem >= 6) {
    years += 1;
  }
  if (years === 0) {
    // 0年は1年と扱う
    years = 1;
  }

  return `${years}年${isPast ? '前' : '後'}`;
}






  function getTimestampFormat(timestamp, format, isEnd = false) {
    if (format === 'null') return '';
    if (format === 'raw' || format === 'end-raw') {
      return timestamp.raw;
    }
    const formatKey = {
      't': 'shortTime',
      'T': 'longTime',
      'd': 'shortDate',
      'D': 'longDate',
      'f': 'dateTime',
      'F': 'full',
      'R': 'relative'
    }[format.replace('end-', '')];
    return timestamp[formatKey] || '';
  }

  function getTimestampContent(timestamp, format) {
    switch (format.replace('end-', '')) {
      case 'raw':
      case 'f':
        return `${timestamp.year}年${timestamp.month}月${timestamp.day}日 ${timestamp.hour}:${String(timestamp.minute).padStart(2, '0')}`;
      case 't':
        return `${timestamp.hour}:${String(timestamp.minute).padStart(2, '0')}`;
      case 'T':
        return `${timestamp.hour}:${String(timestamp.minute).padStart(2, '0')}:${String(timestamp.second).padStart(2, '0')}`;
      case 'd':
        return `${timestamp.year}/${String(timestamp.month).padStart(2, '0')}/${String(timestamp.day).padStart(2, '0')}`;
      case 'D':
        return `${timestamp.year}年${timestamp.month}月${timestamp.day}日`;
      case 'F':
        return `${timestamp.year}年${timestamp.month}月${timestamp.day}日 ${timestamp.weekday} ${timestamp.hour}:${String(timestamp.minute).padStart(2, '0')}`;
      case 'R':
        return getRelativeTime(timestamp.unix);
      default:
        return '';
    }
  }

  // ヘルパー関数：日時フォーマット
  function formatYMD(timestamp) {
    return `${timestamp.year}年${timestamp.month}月${timestamp.day}日`;
  }

  function formatHM(timestamp) {
    return `${timestamp.hour}:${String(timestamp.minute).padStart(2, '0')}`;
  }

  function formatHMS(timestamp) {
    return `${timestamp.hour}:${String(timestamp.minute).padStart(2, '0')}:${String(timestamp.second).padStart(2, '0')}`;
  }

  function formatYMDslash(timestamp) {
    return `${timestamp.year}/${String(timestamp.month).padStart(2, '0')}/${String(timestamp.day).padStart(2, '0')}`;
  }

  function renderStandardTable(st, en) {
    const timestampTable = document.getElementById('timestampTable');
    const frag = document.createDocumentFragment();
    const formats = [
      { format: 'raw', start: st.raw, end: en.raw, startContent: `${formatYMD(st)} ${formatHM(st)}`, endContent: `${formatYMD(en)} ${formatHM(en)}` },
      { format: 'shortTime', start: st.shortTime, end: en.shortTime, startContent: formatHM(st), endContent: formatHM(en) },
      { format: 'longTime', start: st.longTime, end: en.longTime, startContent: formatHMS(st), endContent: formatHMS(en) },
      { format: 'shortDate', start: st.shortDate, end: en.shortDate, startContent: formatYMDslash(st), endContent: formatYMDslash(en) },
      { format: 'longDate', start: st.longDate, end: en.longDate, startContent: formatYMD(st), endContent: formatYMD(en) },
      { format: 'dateTime', start: st.dateTime, end: en.dateTime, startContent: `${formatYMD(st)} ${formatHM(st)}`, endContent: `${formatYMD(en)} ${formatHM(en)}` },
      { format: 'full', start: st.full, end: en.full, startContent: `${formatYMD(st)} ${st.weekday} ${formatHM(st)}`, endContent: `${formatYMD(en)} ${en.weekday} ${formatHM(en)}` },
      { format: 'relative', start: st.relative, end: en.relative, startContent: getRelativeTime(st.unix), endContent: getRelativeTime(en.unix) }
    ];

    formats.forEach(({ start, startContent, end, endContent }) => {
      const row = document.createElement('tr');
      const startFormatCell = document.createElement('td');
      const startContentCell = document.createElement('td');
      const endFormatCell = document.createElement('td');
      const endContentCell = document.createElement('td');

      startFormatCell.textContent = start;
      startContentCell.textContent = startContent;
      endFormatCell.textContent = end;
      endContentCell.textContent = endContent;

      row.appendChild(startFormatCell);
      row.appendChild(startContentCell);
      row.appendChild(endFormatCell);
      row.appendChild(endContentCell);
      frag.appendChild(row);
    });

    timestampTable.innerHTML = '';
    timestampTable.appendChild(frag);
  }

  function renderCustomTable(st, en) {
    const customTimestampTable = document.getElementById('customTimestampTable');
    const frag = document.createDocumentFragment();
    const contentRow = document.createElement('tr');
    const formatRow = document.createElement('tr');
    const contentCell = document.createElement('td');
    const formatCell = document.createElement('td');

    const fields = ['A', 'B', 'C', 'D', 'E'];
    const contentParts = [];
    const formatParts = [];

    fields.forEach(field => {
      const text = document.getElementById(`text${field}`).value;
      const format = document.getElementById(`format${field}`).value;
      if (text) {

        const escapedText = text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        const modifiedText = escapedText.replace(/\\n/g, '<br>');

        contentParts.push(modifiedText);
        formatParts.push(text);
      }
      if (format !== 'null') {
        const isEnd = format.startsWith('end-');
        const timestamp = isEnd ? en : st;
        const tsFormat = getTimestampFormat(timestamp, format, isEnd);
        const tsContent = getTimestampContent(timestamp, format);
        if (tsFormat) {
          contentParts.push(tsContent);
          formatParts.push(tsFormat);
        }
      }
    });

    contentCell.innerHTML = contentParts.join('');
    formatCell.textContent = formatParts.join('');
    contentRow.appendChild(contentCell);
    formatRow.appendChild(formatCell);
    frag.appendChild(contentRow);
    frag.appendChild(formatRow);

    customTimestampTable.innerHTML = '';
    customTimestampTable.appendChild(frag);
  }

  function updateTimestamp() {
    const startInput = document.getElementById('startTime').value;
    const endInput = document.getElementById('endTime').value;
    if (!startInput || !endInput) return;

    const startDate = new Date(startInput);
    const endDate = new Date(endInput);

    const st = discordTimestampJST(
      startDate.getFullYear(), startDate.getMonth() + 1, startDate.getDate(),
      startDate.getHours(), startDate.getMinutes(), startDate.getSeconds()
    );
    const en = discordTimestampJST(
      endDate.getFullYear(), endDate.getMonth() + 1, endDate.getDate(),
      endDate.getHours(), endDate.getMinutes(), endDate.getSeconds()
    );

    renderStandardTable(st, en);
    renderCustomTable(st, en);
  }

  // ページロード時にフォーマットフィールドを生成し、デフォルト値を設定
  window.addEventListener('load', () => {
    createFormatFields();
    setDefaultValues();
    loadFromLocalStorage();
    updateTimestamp();
    saveToLocalStorage();
  });

  // イベントリスナー
  document.getElementById('startTime').addEventListener('change', () => {
    updateTimestamp();
    saveToLocalStorage();
  });
  document.getElementById('endTime').addEventListener('change', () => {
    updateTimestamp();
    saveToLocalStorage();
  });
  document.getElementById('WebhookUrlInput').addEventListener('input', saveToLocalStorage);
  document.getElementById('TitleInput').addEventListener('input', saveToLocalStorage);
  document.getElementById('NameInput').addEventListener('input', saveToLocalStorage);
  document.getElementById('Avatar_UrlInput').addEventListener('input', saveToLocalStorage);