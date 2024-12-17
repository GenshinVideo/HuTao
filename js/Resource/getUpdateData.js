export default async function getUpdateData(updateDataUrl, predl = true) {

	console.log(`Getting update data with${predl ? '' : 'out'} pre-downloads`);

	if (!updateDataUrl) {
		return {
			success: false,
			data: 'No link provided.'
		};
	}

	let responseJson;

	try {
		responseJson = await fetch(updateDataUrl, {
			credentials: 'omit',
			referrerPolicy: 'no-referrer'
		});

		if (!responseJson.ok) {
			return {
				success: false,
				data: 'Response is not OK. Check if the entered link is valid.'
			};
		}
	} catch (error) {
		console.log('Fetching failed. Trying localStorage...');
		// ローカルストレージからデータを取得
		const localResourceJson = localStorage.getItem('ResourceJson');
		if (localResourceJson) {
			console.log('Using localStorage data');
			const response = JSON.parse(localResourceJson);
			const predldata = response.data.game_packages[0].pre_download;

console.log("Z");
console.log(predldata);
			console.log(`Pre-download data${predldata ? '' : ' not'} found`);

			return {
				success: true,
				data: predl && predldata ? predldata : response.data.game_packages[0].main
			};
		} else {
			return {
				success: false,
				data: 'Fetching failed, and no local data found.'
			};
		}
	}

	try {
console.log("Z");
		const response = await responseJson.json();

console.log("A");
console.log(response);
		const predldata = response.data.game_packages[0].pre_download.major;
console.log("B");
console.log(predldata)
console.log("C");
console.log(response.data.game_packages[0].main)

		console.log(`Pre-download data${predldata ? '' : ' not'} found`);

		return {
			success: true,
			data: predl && predldata ? predldata : response.data.game_packages[0].main
		};
	} catch (error) {
		return {
			success: false,
			data: 'JSON parsing failed. Check if the entered link contains update data.'
		};
	}
}