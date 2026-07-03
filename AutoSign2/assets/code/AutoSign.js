const Accounts = [
  { accountName: "アカウント名",
    ArknightsEndfield: true,
    ACCOUNT_TOKEN: "000000000000000000000000"
  }
];
 
const discord_notify = false;
const discord_silent = false;
const myDiscordID = "000000000000000000";
const discordWebhook = "https://discord.com/api/webhooks/0000000000000000000/00000000000000000000000000000000000000000000000000000000000000000000";
 
/** /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
※上記が設定項目になります。設定方法につきましては"Honey Apricot"よりご確認下さい。
　Honey Apricot（https://genshinvideo.github.io/HuTao/）＞胡蝶の夢と泡沫の夢。＞Gryphline AutoSign
※正常に動作しない可能性がありますので、ここより以下のコードは書き換えないで下さい。
/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/ **/

const urlDict = {
  ArknightsEndfield: 'https://zonai.skport.com/web/v1/game/endfield/attendance'
}

const games = {
  ArknightsEndfield: {
    name: 'エンドフィールド　'
  }
};

function main() {
  const messages = Accounts.map(autoSignFunction);
  if (discord_notify) {
    const DiscordMessage = (myDiscordID ? `<@${myDiscordID}> ` : '') + `\`\`\`\n${messages.join('\`\`\`\`\`\`\n')}\`\`\``;
    if (discordWebhook) {
      SendDiscord(DiscordMessage);
    }
  }
}

function autoSignFunction({ ACCOUNT_TOKEN, ArknightsEndfield, accountName }) {
  let cred, salt;
  if (ACCOUNT_TOKEN) {
    const oauth = fetchCred(ACCOUNT_TOKEN);
    cred = oauth.cred;
    salt = oauth.salt;
  } else {
    throw new Error("Token Error");
  }
  const urls = [];
  const postOptionsList = [];
  const getOptionsList = [];

  if (ArknightsEndfield) {
    urls.push(urlDict.ArknightsEndfield);
    const timestamp = Math.floor(Date.now() / 1000).toString();
    const sign = generateSignV2("/web/v1/game/endfield/attendance", timestamp, salt);
    const sk_game_role = getOrCreateSkGameRole(accountName, ACCOUNT_TOKEN, cred, salt);
    postOptionsList.push(createOptions('POST', {'cred': cred,'sk-game-role': sk_game_role,'timestamp': timestamp,'sign': sign}));
    getOptionsList.push(createOptions('GET', {'cred': cred,'sk-game-role': sk_game_role,'timestamp': timestamp,'sign': sign}));
  }

  let ResultMessage = `${accountName}\n`;
  const GetResponses = UrlFetchApp.fetchAll(urls.map((url, i) => ({
    url,
    ...getOptionsList[i]
  })));
  for (const [i, ResponseRow] of GetResponses.entries()) {
    const enGameName = Object.keys(urlDict).find(key => urlDict[key] === urls[i]);
    const gameName = games[enGameName].name;
    let GetResponseJson;
    try {
      GetResponseJson = JSON.parse(ResponseRow.getContentText());
    } catch {
      ResultMessage += `\n${gameName} ≫ アカウント情報の取得に失敗しました`;
      continue;
    }
    const LoginCheck = GetResponseJson.data?.hasToday;
    const LoginCount = GetResponseJson.data?.calendar?.filter(c => c.done).length || 0;
    if (LoginCheck) {
      ResultMessage += `\n${gameName} ≫［${LoginCount}日目］ログイン済み`
      continue;
    }
    const PostResponse = UrlFetchApp.fetch(urls[i], postOptionsList[i]);
    let PostResponseJson;
    try {
      PostResponseJson = JSON.parse(PostResponse.getContentText());
    } catch {
      ResultMessage += `\n${gameName} ≫ ログインに失敗しました`;
      continue;
    }
    console.log(PostResponseJson);
    const checkInResult = PostResponseJson.message;
    ResultMessage = processGameCheckIn(gameName, checkInResult, LoginCount, PostResponseJson, ResultMessage, getOptionsList[i]);
  }
  Logger.log(ResultMessage);
  // ----------------------------------------------

  return ResultMessage;
}

function processGameCheckIn(gameName, checkInResult, LoginCount, PostResponseJson, ResultMessage, getOptions) {
  if (checkInResult !== "OK") {
    return ResultMessage + `\n${gameName} ≫ ${checkInResult}`;
  }
  const awards = PostResponseJson?.data?.awardIds;
  const resourceMap = PostResponseJson?.data?.resourceInfoMap;
  if (!Array.isArray(awards) || awards.length === 0) {
    return ResultMessage + `\n${gameName} ≫［${LoginCount + 1}日目］報酬情報が存在しません。`;
  }
  const rewardTexts = awards
    .map(a => {
      const info = resourceMap?.[a.id];
      if (!info) return null;
      return `${info.name} (${info.count})`;
    })
    .filter(Boolean);
  if (rewardTexts.length === 0) {
    return ResultMessage + `\n${gameName} ≫［${LoginCount + 1}日目］報酬詳細の取得に失敗しました。`;
  }
  ResultMessage += `\n${gameName} ≫［${LoginCount + 1}日目］${rewardTexts.join(' + ')}`;
  return ResultMessage;
}

function BuildRolePropertyKey(accountName, accountToken) {
  const head = accountToken.slice(0, 2);
  const tail = accountToken.slice(-2);
  return `${accountName}_${head}${tail}`;
}
function getOrCreateSkGameRole(accountName, ACCOUNT_TOKEN, cred, salt) {
  const props = PropertiesService.getScriptProperties();
  const key = BuildRolePropertyKey(accountName, ACCOUNT_TOKEN);
  const cached = props.getProperty(key);
  if (cached) {
    return cached;
  }
  console.log(`${accountName}：sk_game_roleを生成します。`);
  const path = "/api/v1/game/endfield/card/detail";
  const timestamp = Math.floor(Date.now() / 1000).toString();
  const sign = generateSignV2(path, timestamp, salt);
  const res = UrlFetchApp.fetch(
    "https://zonai.skport.com" + path,
    createOptions("GET", {
      cred,
      timestamp,
      sign
    })
  );
  const json = JSON.parse(res.getContentText());
  if (json.code !== 0) {
    throw new Error("Failed to fetch sk_game_role");
  }
  const base = json.data.detail.base;
  const region = base.serverName === "Asia" ? 2 : 3;
  const sk_game_role = `3_${base.roleId}_${region}`;
  props.setProperty(key, sk_game_role);
  return sk_game_role;
}

function fetchCred(accountToken) {
  const info = JSON.parse(
    UrlFetchApp.fetch(
      `https://as.gryphline.com/user/info/v1/basic?token=${accountToken}`
    ).getContentText()
  );
  if (info.status !== 0) throw new Error("info failed");
  const grant = JSON.parse(
    UrlFetchApp.fetch(
      "https://as.gryphline.com/user/oauth2/v2/grant",
      {
        method: "post",
        contentType: "application/json",
        payload: JSON.stringify({
          token: accountToken,
          appCode: "6eb76d4e13aa36e6",
          type: 0
        })
      }
    ).getContentText()
  );
  if (grant.status !== 0) throw new Error("grant failed");
  const credRes = JSON.parse(
    UrlFetchApp.fetch(
      "https://zonai.skport.com/web/v1/user/auth/generate_cred_by_code",
      {
        method: "post",
        contentType: "application/json",
        headers: { platform: "3" },
        payload: JSON.stringify({
          code: grant.data.code,
          kind: 1
        })
      }
    ).getContentText()
  );
  if (credRes.code !== 0) throw new Error("cred failed");
  return {
    cred: credRes.data.cred,
    salt: credRes.data.token
  };
}

function generateSignV2(path, timestamp, salt) {
  const headerJson = JSON.stringify({
    platform: "3",
    timestamp,
    dId: "",
    vName: "1.0.0"
  });
  const raw = `${path}${timestamp}${headerJson}`;
  const hmac = Utilities.computeHmacSignature(
    Utilities.MacAlgorithm.HMAC_SHA_256,
    raw,
    salt
  );
  const md5 = Utilities.computeDigest(
    Utilities.DigestAlgorithm.MD5,
    toHex(hmac)
  );
  return toHex(md5);
}
function toHex(bytes) {
  return bytes.map(b => {
    const v = b < 0 ? b + 256 : b;
    return ("0" + v.toString(16)).slice(-2);
  }).join("");
}

function createOptions(method, extraHeaders = {}) {
  const headers = {
    'platform': '3',
    'sk-language': 'ja',
    'vName': '1.0.0',
    'Origin': 'https://game.skport.com',
    'User-Agent': 'Skport/0.7.0 (com.gryphline.skport; build:700089; Android 33; ) Okhttp/5.1.0',
    ...extraHeaders
  };
  return {
    method,
    headers,
    muteHttpExceptions: true,
  };
}

let bot = null;
function initBot() {
  if (bot !== null) return;
  const props = PropertiesService.getScriptProperties();
  const cacheKey = 'BotData';
  const today = new Date().toLocaleDateString('ja-JP', { timeZone: 'Asia/Tokyo' });
  const cachedData = props.getProperty(cacheKey);
  if (cachedData) {
    const parsedData = JSON.parse(cachedData);
    if (parsedData.lastFetchDate === today) {
      bot = parsedData.bot;
      return;
    }
  }
  try {
    Logger.log("Fetching bot data");
    const res = UrlFetchApp.fetch('https://raw.githubusercontent.com/GenshinVideo/HuTao/main/AutoSign2/assets/file/bot.json');
    const rawBot = JSON.parse(res.getContentText());
    let list = (rawBot && Array.isArray(rawBot.list)) ? rawBot.list : [];
    if (
      list.length === 0 &&
      rawBot &&
      rawBot.data &&
      rawBot.data[0] &&
      Array.isArray(rawBot.data[0].list)
    ) {
      list = rawBot.data[0].list;
    }
    bot = { list };
    props.setProperty(cacheKey, JSON.stringify({
      bot,
      lastFetchDate: today
    }));
  } catch (e) {
    Logger.log(`Error fetching bot data: ${e}`);
    bot = null;
  }
}

function SendDiscord(data) {
  initBot();
  let list = (bot && Array.isArray(bot.list)) ? bot.list : [];
  if (list.length === 0) {
    list = [{
      name: "管理人",
      avatar: "https://web-static.hg-cdn.com/endfield/official-v4/_next/static/media/endministrator1.3efd4769.png"
    }];
  }
  const RandomSelect = Math.floor(Math.random() * list.length);
  const selectedBot = list[RandomSelect] || list[0];
  const payload = JSON.stringify({
    'username': selectedBot.name,
    'avatar_url': selectedBot.avatar,
    'content': data,
    ...(typeof discord_silent !== 'undefined' && discord_silent ? { 'flags': 4096 } : {})
  });
  const options = {
    method: 'POST',
    contentType: 'application/json',
    payload: payload,
    muteHttpExceptions: true
  };
  const res = UrlFetchApp.fetch(discordWebhook, options);
}