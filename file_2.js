
function get_file_url(url) {
	
	var link_url = document.createElement("a");
	
	link_url.download = url.substring((url.lastIndexOf("/") + 1), url.length);
	link_url.href = url;
	document.body.appendChild(link_url);
	link_url.click();
	document.body.removeChild(link_url);
	delete link_url;

}

get_file_url("https://github.com/GurIlVik/SITY/text.txt");