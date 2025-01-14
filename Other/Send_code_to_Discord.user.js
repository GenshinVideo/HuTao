// ==UserScript==
// @name           Send code to Discord
// @description    Script to display a button to send serial codes to Discord.
// @description:ja シリアルコードをDiscordに送信するボタンを表示するスクリプト。
// @author         胡蝶 桜 ( @Sakura Kocho )
// @namespace      https://genshinvideo.github.io/HuTao/
// @version        1.0
// @match          https://genshin.hoyoverse.com/*/gift*
// @match          https://hsr.hoyoverse.com/gift*
// @match          https://zenless.hoyoverse.com/redemption*
// @grant          GM_registerMenuCommand
// @grant          GM_setValue
// @grant          GM_getValue
// @grant          GM_listValues
// @icon           https://pbs.twimg.com/profile_images/1648150443522940932/4TTHKbGo_400x400.png
// ==/UserScript==

GM_registerMenuCommand("Webhook URLs を設定", openWebhookEditor);
var webhookUrls = GM_getValue("webhookUrls", []);
var BotProfile = "https://raw.githubusercontent.com/GenshinVideo/HuTao/main/AutoSign/bot.json";
var DefaultBotProfileName = "シトラリ";
var DefaultBotProfileAvatarURL = "https://fastcdn.hoyoverse.com/content-v2/hk4e/127513/e0ea0a8d21fbbc785914e4d2c69c15f2_7699597058027873875.png";

function createButton() {
  var button = document.createElement('button');
  button.innerHTML = 'Send<svg xmlns="http://www.w3.org/2000/svg" class="SC2D_Svg" width="18" height="18" viewBox="0 0 640 512"><path d="M524.5 69.8a1.5 1.5 0 0 0 -.8-.7A485.1 485.1 0 0 0 404.1 32a1.8 1.8 0 0 0 -1.9 .9 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.1-30.6 1.9 1.9 0 0 0 -1.9-.9A483.7 483.7 0 0 0 116.1 69.1a1.7 1.7 0 0 0 -.8 .7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 0 0 .8 1.4A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.1-.7A348.2 348.2 0 0 0 208.1 430.4a1.9 1.9 0 0 0 -1-2.6 321.2 321.2 0 0 1 -45.9-21.9 1.9 1.9 0 0 1 -.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 0 1 1.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 0 1 1.9 .2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 0 1 -.2 3.1 301.4 301.4 0 0 1 -45.9 21.8 1.9 1.9 0 0 0 -1 2.6 391.1 391.1 0 0 0 30 48.8 1.9 1.9 0 0 0 2.1 .7A486 486 0 0 0 610.7 405.7a1.9 1.9 0 0 0 .8-1.4C623.7 277.6 590.9 167.5 524.5 69.8zM222.5 337.6c-29 0-52.8-26.6-52.8-59.2S193.1 219.1 222.5 219.1c29.7 0 53.3 26.8 52.8 59.2C275.3 311 251.9 337.6 222.5 337.6zm195.4 0c-29 0-52.8-26.6-52.8-59.2S388.4 219.1 417.9 219.1c29.7 0 53.3 26.8 52.8 59.2C470.7 311 447.5 337.6 417.9 337.6z"/></svg>';
  button.classList.add("SC2D_Button");
  button.style.position = 'fixed';
  button.style.bottom = '10px';
  button.style.right = '10px';
  button.style.padding = '10px 20px';
  button.style.backgroundColor = '#7289DA';
  button.style.color = 'white';
  button.style.border = 'none';
  button.style.borderRadius = '5px';
  button.style.cursor = 'pointer';
  button.style.display = 'flex';
  button.style.alignItems = 'center';
  button.style.gap = '5px';

  document.body.appendChild(button);
  button.addEventListener('click', handleButtonClick);
}


async function handleButtonClick() {
  document.querySelector('.SC2D_Svg').classList.add('loading');
  var currentUrl = window.location.href;
  var url = new URL(currentUrl);
  var baseUrl = `${url.origin}${url.pathname}`;
  var queryParams = url.searchParams;
  var code = queryParams.get('code');
  var InputText = document.querySelectorAll('input[id*="cdkey"]')[1].value;
  var message;
  if (InputText){
    if (!/^[a-zA-Z0-9]+$/.test(InputText)) {
      console.log("Failed (error code)")
      document.querySelector('.SC2D_Svg').classList.remove('loading');
      return;
    }
    message = `<${baseUrl}?code=${InputText}>`;
  } else {
    if (code) {
      message = `<${baseUrl}?code=${code}>`;
    } else {
      console.log("Failed (no code)")
      document.querySelector('.SC2D_Svg').classList.remove('loading');
      return;
    }
  }

  try {
    var BotConfig = await fetchBotData();
    var { username, avatar_url } = BotConfig;

    await sendToAllWebhooks(message, username, avatar_url);
    document.querySelector('.SC2D_Button').remove();
//    alert('すべてのWebhookへの送信が完了しました！');
  } catch (error) {
    alert('Error');
  }
}

async function fetchBotData() {
  var response = await fetch(BotProfile);
  if (response.ok == false) {
    console.log(`Failed (${BotProfile})`);
    return {
      username: DefaultBotProfileName,
      avatar_url: DefaultBotProfileAvatarURL
    };
  }
  var jsonData = await response.json();
  var count = parseInt(jsonData.data[0].count, 10);
  var randomIndex = Math.floor(Math.random() * count);
  var selectedProfile = jsonData.list[randomIndex];
  if (!selectedProfile) {
    console.log(`Failed (Unknown Bot Profile)`);
    return {
      username: DefaultBotProfileName,
      avatar_url: DefaultBotProfileAvatarURL
    };
  }
  return {
    username: selectedProfile.name,
    avatar_url: selectedProfile.avatar
  };
}

async function sendToAllWebhooks(message, username, avatar_url) {
  for (var webhookUrl of webhookUrls) {
    try {
      var response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          content: message,
          username,
          avatar_url
        })
      });

      if (response.ok == true) {
        console.log(`Success (${webhookUrl})`);
      } else {
        console.log(`Failed (${webhookUrl})`);
      }
    } catch (error) {
      console.log(`Error (${webhookUrl})`, error);
    }
  }
}

document.addEventListener('click', (event) => {
  const target = event.target;
  if (target.tagName === 'BUTTON' && target.className.includes('cdkey')) {
    createButton();
  }
});

function openWebhookEditor() {
  // ダイアログの作成
  var dialog = document.createElement("div");
  dialog.style.width = "80%";
  dialog.style.height = "60%";
  dialog.style.minHeight = '155px';
  dialog.style.position = "fixed";
  dialog.style.top = "20%";
  dialog.style.left = "50%";
  dialog.style.transform = "translate(-50%, -20%)";
  dialog.style.padding = "20px";
  dialog.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
  dialog.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
  dialog.style.zIndex = "10000";
  dialog.style.border = "1px solid #ccc";
  dialog.style.borderRadius = "10px";
  dialog.style.textAlign = "center";
  // タイトル
  var title = document.createElement("h3");
  title.textContent = "Webhook URLs";
  title.style.marginTop = "0";
  dialog.appendChild(title);
  // 保存ボタン
  var saveButton = document.createElement("button");
  saveButton.textContent = " Save ";
  saveButton.style.width = "100px";
  saveButton.style.top = "15px";
  saveButton.style.right = "130px";
  saveButton.style.position = "absolute";
  saveButton.style.padding = "10px 20px";
  saveButton.style.fontSize = "16px";
  saveButton.style.cursor = "pointer";
  saveButton.style.border = "1px solid #ccc";
  saveButton.style.borderRadius = "5px";
  saveButton.style.backgroundColor = "#4CAF50";
  saveButton.style.color = "#fff";
  saveButton.style.textAlign = "center";
  saveButton.addEventListener("click", () => {
    webhookUrls = textarea.value.split("\n").map(url => url.trim()).filter(Boolean);
    GM_setValue("webhookUrls", webhookUrls);
//    alert("Webhook URLs を保存しました:\n" + webhookUrls.join("\n"));
    document.body.removeChild(dialog);
  });
  dialog.appendChild(saveButton);
  // キャンセルボタン
  var cancelButton = document.createElement("button");
  cancelButton.textContent = "Cancel";
  cancelButton.style.width = "100px";
  cancelButton.style.top = "15px";
  cancelButton.style.right = "20px";
  cancelButton.style.position = "absolute";
  cancelButton.style.padding = "10px 20px";
  cancelButton.style.fontSize = "16px";
  cancelButton.style.cursor = "pointer";
  cancelButton.style.border = "1px solid #ccc";
  cancelButton.style.borderRadius = "5px";
  cancelButton.style.backgroundColor = "#f44336";
  cancelButton.style.color = "#fff";
  cancelButton.style.textAlign = "center";
  cancelButton.addEventListener("click", () => {
    document.body.removeChild(dialog);
  });
  dialog.appendChild(cancelButton);
  // テキストエリア
  var textarea = document.createElement("textarea");
  textarea.value = webhookUrls.join("\n");
  textarea.style.width = "100%";
  textarea.style.height = "90%";
  textarea.style.minHeight = '70px';
  textarea.style.marginTop = "10px";
  textarea.style.fontFamily = "monospace";
  textarea.style.fontSize = "14px";
  textarea.style.border = "1px solid #ccc";
  textarea.style.borderRadius = "5px";
  textarea.style.resize = "none";
  dialog.appendChild(textarea);

  document.body.appendChild(dialog);
}

function addCustomCSS(cssText) {
  var styleElement = document.createElement('style');
  styleElement.type = 'text/css';
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = cssText; // IE
  } else {
    styleElement.appendChild(document.createTextNode(cssText)); // 他のブラウザ
  }
  document.head.appendChild(styleElement);
}

var cssText = `
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.loading {
  animation: spin 1s linear infinite;
}
`;

addCustomCSS(cssText);