var albums = ['5217500', '5217509', '5226564'];

function loadAlbum() {
	var albumId = albums[0];
	albums = albums.slice(1);
	if (albumId) {
		fetch(`/assets/albums/${albumId}.json`)
			.then(res => res.json())
			.then(displayAlbum)
			.then(loadAlbum);
	}
}

loadAlbum();


function url(ph) {
	//return '/assets/images/live_venue1.JPG';
	return `//diy2dhgsjw6gb.cloudfront.net/ph/${ph.key}/m/${ph.id}.jpg`;
}

function image(url) {
	var div = document.createElement("div")
	var img = document.createElement("img");
	img.src = url;
	img.addEventListener('load', () => { img.className = 'loaded' });
	div.appendChild(img);
	return div;
}


function displayAlbum(data) {
	var cont = document.querySelector("#albums");
	var img = image(data.album.c.url);
	//var img = image('/assets/images/live_venue1.JPG');
	cont.appendChild(img);
	img.setAttribute("data-title", data.album.n);
	img.addEventListener('click', () => listAlbum(data));
}
function listAlbum(data) {
	document.querySelector("#albumName").textContent = data.album.n;
	var cont = document.querySelector("#album");
	cont.innerHTML = "";
	data.photos.map(ph => {
		cont.appendChild(image(url(ph)));
	});
}
