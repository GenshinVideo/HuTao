const BotProfile = "https://raw.githubusercontent.com/GenshinVideo/HuTao/main/AutoSign/bot.json";
const DefaultBotProfileName = "シトラリ";
const DefaultBotProfileAvatarURL = "https://fastcdn.hoyoverse.com/content-v2/hk4e/127513/e0ea0a8d21fbbc785914e4d2c69c15f2_7699597058027873875.png";

async function SendModeCheck(mode) {
  const PresetProfile = await fetchBotData();
  if (mode === 2) {
    const titleInput = document.getElementById("TitleInput")?.value?.trim();
    const nameInput = document.getElementById("NameInput")?.value?.trim();
    const avatarUrlInput = document.getElementById("Avatar_UrlInput")?.value?.trim();
    if (titleInput && nameInput && avatarUrlInput) {
      return {
        title: titleInput,
        username: nameInput,
        avatar_url: avatarUrlInput,
        username2: PresetProfile.username,
        avatar_url2: PresetProfile.avatar_url
      };
    }
  }
  return {
    title: "",
    username: PresetProfile.username,
    avatar_url: PresetProfile.avatar_url,
    username2: PresetProfile.username,
    avatar_url2: PresetProfile.avatar_url
  };
}

async function fetchBotData() {
  try {
    const response = await fetch(BotProfile);
    if (!response.ok) {
      console.log(`Failed to fetch bot profile (${BotProfile})`);
      return {
        username: DefaultBotProfileName,
        avatar_url: DefaultBotProfileAvatarURL
      };
    }
    const jsonData = await response.json();
    const count = parseInt(jsonData.data[0].count, 10);
    const randomIndex = Math.floor(Math.random() * count);
    const selectedProfile = jsonData.list[randomIndex];
    if (!selectedProfile) {
      console.log(`Failed: Unknown bot profile`);
      return {
        username: DefaultBotProfileName,
        avatar_url: DefaultBotProfileAvatarURL
      };
    }
    return {
      username: selectedProfile.name,
      avatar_url: selectedProfile.avatar
    };
  } catch (error) {
    console.log(`Error fetching bot profile: ${error}`);
    return {
      username: DefaultBotProfileName,
      avatar_url: DefaultBotProfileAvatarURL
    };
  }
}



async function sendToWebhook(WebhookUrl, message, username, avatar_url) {
  try {
    const response = await fetch(WebhookUrl, {
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

    if (response.ok) {
      console.log(`Success: Webhook sent to ${WebhookUrl}`);
      return true;
    } else {
      console.log(`Failed: Webhook request to ${WebhookUrl} returned status ${response.status}`);
      return false;
    }
  } catch (error) {
    console.log(`Error sending to webhook ${WebhookUrl}: ${error}`);
    return false;
  }
}

async function sendToWebhook2(WebhookUrl, message, title, username, avatar_url, username2, avatar_url2) {
  try {
    const response = await fetch(WebhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        avatar_url,
        embeds: [
          {
            title: title,
            description: message,
            color: 0x00bfff,
            footer: {
              text: "Powered by " + username2,
              icon_url: avatar_url2
            }
          }
        ]
      })
    });

    if (response.ok) {
      console.log(`Success: Webhook sent to ${WebhookUrl}`);
      return true;
    } else {
      console.log(`Failed: Webhook request to ${WebhookUrl} returned status ${response.status}`);
      return false;
    }
  } catch (error) {
    console.log(`Error sending to webhook ${WebhookUrl}: ${error}`);
    return false;
  }
}

async function sendToDiscord(mode) {
  const WebhookUrl = document.getElementById('WebhookUrlInput').value.trim();
  const customTimestampTable = document.getElementById('customTimestampTable');
  const formatRow = customTimestampTable.rows[1]; // 2行目（カスタムフォーマット）
  const formatContent = formatRow.cells[0].textContent; // カスタムフォーマットの内容

  let statusDiv;
  if (mode == 1) {
    statusDiv = document.getElementById('webhookStatus');
  } else if (mode == 2) {
    statusDiv = document.getElementById('webhookStatus2');
  }

  // バリデーション
  if (!WebhookUrl) {
    statusDiv.textContent = 'エラー：Webhook URLを入力してください。';
    statusDiv.classList.add('error');
    return;
  }
  if (!formatContent) {
    statusDiv.textContent = 'エラー：カスタムフォーマットが空です。';
    statusDiv.classList.add('error');
    return;
  }
  // 送信中ステータス
  statusDiv.textContent = '送信中...';
  statusDiv.classList.remove('error');

  let botData;
  let success;
  try {
    if (mode == 1) {
      botData = await fetchBotData();
      success = await sendToWebhook(WebhookUrl, formatContent, botData.username, botData.avatar_url);
    } else if (mode == 2) {
      botData = await SendModeCheck(2);
      success = await sendToWebhook2(WebhookUrl, formatContent, botData.title, botData.username, botData.avatar_url, botData.username2, botData.avatar_url2);
    }

    if (success) {
      statusDiv.textContent = '送信成功！';
      statusDiv.classList.remove('error');
    } else {
      statusDiv.textContent = 'エラー：無効なWebhook URLです。';
      statusDiv.classList.add('error');
    }
  } catch (error) {
    console.log(`送信エラー: ${error}`);
    statusDiv.textContent = 'エラー：送信に失敗しました。';
    statusDiv.classList.add('error');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('sendWebhook').addEventListener('click', () => {
    sendToDiscord(1);
  });
  document.getElementById('sendWebhook2').addEventListener('click', () => {
    sendToDiscord(2);
  });
});