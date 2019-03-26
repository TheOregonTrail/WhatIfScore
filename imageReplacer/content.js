var url = "";
// Replaces img.src with provided link
function replace() {
	var images = document.getElementsByTagName("img");
	for (var i = 0; i < images.length; i++) {
		images[i].src = url;
	}
}
// Applys Image size and css to image tags in page
chrome.storage.sync.get({
	enabled: false,
	url: ""
}, function(items) {
	if (items.enabled) {
		url = items.url;
		var css = document.createElement("style");
		css.innerHTML = "img { content: url(\"" + url + "\") !important; }";
		document.body.appendChild(css);
		window.setInterval(replace, 3000);
		replace();
	}
});