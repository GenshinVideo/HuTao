var tday = ["日", "月", "火", "水", "木", "金", "土"];
var tmonth = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月",
	"11月", "12月"
];

function GetClock() {
	var d = new Date();
	var nday = d.getDay(),
		nmonth = d.getMonth(),
		ndate = d.getDate(),
		nyear = d.getFullYear();
	var nhour = d.getHours(),
		nmin = d.getMinutes(),
		nsec = d.getSeconds();
	if (nhour < 10) nhour = "0" + nhour;
	if (nmin < 10) nmin = "0" + nmin;
	if (nsec < 10) nsec = "0" + nsec;

	var clocktext = "<span style='font:14pt Arial; color:#FFFFFF;'>" + nyear +
		"年 " + tmonth[nmonth] + " " + ndate + "日 (" + tday[nday] + ")</span>" +
		"<br>" +
		"<span style='font:97pt Arial; color:#FFFFFF;'>" + nhour + ":" + nmin +
		"<span style='font:60pt Arial; color:#FFFFFF;'>:" + nsec + "</span></span>";

	document.getElementById('clockbox').innerHTML = clocktext;
}

GetClock();
setInterval(GetClock, 1000);


window.addEventListener("DOMContentLoaded", function() {
	const params = new URLSearchParams(window.location.search);
	const weatherContainer = document.querySelector(".Weather");

	["location", "location2", "location3"].forEach(key => {
		const locationUrl = params.get(key);
		if (!locationUrl) return;

		const match = locationUrl.match(/\/([a-z]+)\/?$/i);
		const locationName = match ? match[1].toUpperCase() : "UNKNOWN";

		const weatherWidget = document.createElement("a");
		weatherWidget.className = "weatherwidget-io";
		weatherWidget.href = locationUrl;
		weatherWidget.setAttribute("data-label_1", locationName);
		weatherWidget.setAttribute("data-font", "ヒラギノ角ゴ Pro W3");
		weatherWidget.setAttribute("data-icons", "Climacons Animated");
		weatherWidget.setAttribute("data-theme", "pure");
		weatherWidget.setAttribute("data-basecolor", "rgba(255, 255, 255, 0)");
		weatherWidget.setAttribute("data-accent", "rgba(255, 255, 255, 0)");
		weatherWidget.setAttribute("data-shadow", "rgba(0, 0, 0, 0.9)");
		weatherWidget.setAttribute("data-textcolor", "#ffffff");

		weatherContainer.appendChild(weatherWidget);
	});

	const script = document.createElement("script");
	script.src = "https://weatherwidget.io/js/widget.min.js";
	script.id = "weatherwidget-io-js";
	document.body.appendChild(script);
});

! function(d, s, id) {
	var js, fjs = d.getElementsByTagName(s)[0];
	if (!d.getElementById(id)) {
		js = d.createElement(s);
		js.id = id;
		js.src = 'https://weatherwidget.io/js/widget.min.js';
		fjs.parentNode.insertBefore(js, fjs);
	}
}(document, 'script', 'weatherwidget-io-js');
