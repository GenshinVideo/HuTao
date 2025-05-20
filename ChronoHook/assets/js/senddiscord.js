const BotProfile = "https://raw.githubusercontent.com/GenshinVideo/HuTao/main/AutoSign/bot.json";
const DefaultBotProfileName = "シトラリ";
const DefaultBotProfileAvatarURL = "https://fastcdn.hoyoverse.com/content-v2/hk4e/127513/e0ea0a8d21fbbc785914e4d2c69c15f2_7699597058027873875.png";

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

async function sendToWebhook(webhookUrl, message, username, avatar_url) {
  try {
    const response = await fetch(webhookUrl, {
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
      console.log(`Success: Webhook sent to ${webhookUrl}`);
      return true;
    } else {
      console.log(`Failed: Webhook request to ${webhookUrl} returned status ${response.status}`);
      return false;
    }
  } catch (error) {
    console.log(`Error sending to webhook ${webhookUrl}: ${error}`);
    return false;
  }
}

async function sendToDiscord() {
  const webhookUrl = document.getElementById('webhookUrlInput').value.trim();
  const customTimestampTable = document.getElementById('customTimestampTable');
  const formatRow = customTimestampTable.rows[1]; // 2行目（カスタムフォーマット）
  const formatContent = formatRow.cells[0].textContent; // カスタムフォーマットの内容
  const statusDiv = document.getElementById('webhookStatus');

  // バリデーション
  if (!webhookUrl) {
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

  try {
    const botData = await fetchBotData();
    const success = await sendToWebhook(webhookUrl, formatContent, botData.username, botData.avatar_url);
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

// 送信ボタンのイベントリスナー
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('sendWebhook').addEventListener('click', sendToDiscord);
});