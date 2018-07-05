fetch("/assets/albums/5217500.json").then(res => res.json())
	.then(displayAlbum);
fetch("/assets/albums/5217509.json").then(res => res.json())
	.then(displayAlbum);


function url(ph) {
	return `//diy2dhgsjw6gb.cloudfront.net/ph/${ph.key}/3x/${ph.id}.jpg`;
}

function image(url) {
	var div = document.createElement("div")
	var img = document.createElement("img");
	img.src = url;
	div.appendChild(img);
	return div;
}


function displayAlbum(data) {
	var cont = document.querySelector("#albums");
	var img = image(data.album.c.url);
	cont.appendChild(img);
	img.setAttribute("data-title", data.album.n);
	img.addEventListener('click', () => listAlbum(data));
}
function listAlbum(data) {
	var cont = document.querySelector("#albums");
	cont.innerHTML = "";
	data.photos.map(ph => {
		cont.appendChild(image(url(ph)));
	});
}
