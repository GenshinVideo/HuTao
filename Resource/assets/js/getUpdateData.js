export default async function getUpdateData(updateDataUrl, predl = true) {
  console.log(`Getting update data with${predl ? "" : "out"} pre-downloads`);

  if (!updateDataUrl) {
    return {
      success: false,
      data: "No link provided.",
    };
  }

  const PROXY_URL = "https://proxy.columbina.workers.dev/";
  const CACHE_KEY = `ResourceJson_${updateDataUrl}`;
  const CACHE_TIME = 11 * 60 * 1000;

  let responseJson;
  let cachedData = null;

  try {
    const cached = localStorage.getItem(CACHE_KEY);

    if (cached) {
      const parsedCache = JSON.parse(cached);

      if (Date.now() - parsedCache.timestamp < CACHE_TIME) {
        console.log("Using cached data");

        const response = parsedCache.data;
        const predldata = response.data.game_packages[0].pre_download.major;

        console.log(`Pre-download data${predldata ? "" : " not"} found`);

        return {
          success: true,
          data: predl && predldata ? predldata : response.data.game_packages[0].main,
        };
      }

      cachedData = parsedCache.data;
    }
  } catch (error) {
    console.log("Cache read failed");
  }

  let targetUrl;

  try {
    const inputUrl = new URL(updateDataUrl.includes("://") ? updateDataUrl : `https://sg-hyp-api.hoyoverse.com/hyp/hyp-connect/api/getGamePackages?${updateDataUrl}`);

    targetUrl = `${PROXY_URL}?${inputUrl.searchParams.toString()}`;
  } catch (error) {
    return {
      success: false,
      data: "Invalid URL.",
    };
  }

  try {
    responseJson = await fetch(targetUrl, {
      credentials: "omit",
      referrerPolicy: "no-referrer",
    });

    if (!responseJson.ok) {
      return {
        success: false,
        data: "Response is not OK. Check if the entered link is valid.",
      };
    }
  } catch (error) {
    console.log("Fetching failed. Trying localStorage...");

    const localResourceJson = localStorage.getItem("ResourceJson");

    if (localResourceJson) {
      console.log("Using localStorage data");
      const response = JSON.parse(localResourceJson);
      let predldata = null;

      if (response.data.game_packages[0].pre_download.major != null) {
        predldata = response.data.game_packages[0].pre_download;
      }

      console.log(`Pre-download data${predldata ? "" : " not"} found`);

      return {
        success: true,
        data: predl && predldata ? predldata : response.data.game_packages[0].main,
      };
    }

    if (cachedData) {
      console.log("Using expired cached data");

      const predldata = cachedData.data.game_packages[0].pre_download.major;

      return {
        success: true,
        data: predl && predldata ? predldata : cachedData.data.game_packages[0].main,
      };
    }

    return {
      success: false,
      data: "Fetching failed, and no local data found.",
    };
  }

  try {
    const response = await responseJson.json();

    localStorage.setItem(
      CACHE_KEY,
      JSON.stringify({
        timestamp: Date.now(),
        data: response,
      }),
    );

    const predldata = response.data.game_packages[0].pre_download.major;

    console.log(`Pre-download data${predldata ? "" : " not"} found`);

    return {
      success: true,
      data: predl && predldata ? predldata : response.data.game_packages[0].main,
    };
  } catch (error) {
    return {
      success: false,
      data: "JSON parsing failed. Check if the entered link contains update data.",
    };
  }
}
