var youtubeURL = "https://www.youtube.com/watch_videos?";
var titlePartInit = "title=";
var titlePart = "";
var videoPart = "&video_ids=";
var finalURL = "";
// var idCount = 0;

function urlFinalize() {
	finalURL = youtubeURL.concat(titlePart,videoPart);
	document.getElementById('currentURLDisplay').innerHTML = finalURL;
	document.getElementById('clickURL').href = finalURL;
}

//setting title
function titleSet() {
	var titleText1 = encodeURI(document.getElementById('titleTextElement').value);
	titlePart = titlePartInit.concat(titleText1);
	urlFinalize();
}

document.addEventListener('DOMContentLoaded', function () {
	document.getElementById('titleSetButton').addEventListener('click', titleSet);
});

//adding video ID to list
function listAddID() {
	var idText = document.getElementById('videoIDText').value;
	//TODO prevent adding empty value if pressed by accident
	videoPart = videoPart.concat(filterCurrentURLForID(idText),',');
	urlFinalize();
	// idCount++;
}

document.addEventListener('DOMContentLoaded', function () {
	document.getElementById('addVideoButton').addEventListener('click', listAddID);
});

function parseURLforID() {
	// chrome.tabs.getSelected();
	// browser.tabs
	// chrome.tabs.getSelected(null,function(tab) {
	// 	var tablink = tab.url;
	// });
	// Use DOM to get videoId
	// <meta itemprop="videoId" content="jNQXAC9IVRw">
	// const videoIDElement = document.querySelectorAll('[itemprop="videoId"]')[0];
	// const videoIDText = videoIDElement.getAttribute("content");
	const videoIDText = document.querySelectorAll('[itemprop="videoId"]')[0].getAttribute("content");
	// return videoIDText;
	// var idText = document.getElementById('videoIDText').value;
	videoPart = videoPart.concat(videoIDText,',');
	urlFinalize();
}

document.addEventListener('DOMContentLoaded', function () {
	document.getElementById('autoCurrentButton').addEventListener('click', parseURLforID);
});

function filterCurrentURLForID(urlToFilter) {
	// const regexPattern1 = "";
	// TODO
	return urlToFilter;
}