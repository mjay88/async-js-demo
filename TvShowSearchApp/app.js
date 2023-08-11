const form = document.querySelector("#searchForm");
form.addEventListener("submit", async function (e) {
	document.querySelector("#images").innerHTML = "";
	e.preventDefault();
	console.log(form.elements.query.value);
	const searchTerm = form.elements.query.value;
	const config = {
		params: {
			q: searchTerm,
		},
	};
	const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
	makeImages(res.data);
	form.elements.query.value = "";
});

const makeImages = (shows) => {
	for (let result of shows) {
		if (result.show.image) {
			console.log(result);
			const img = document.createElement("IMG");
			img.src = result.show.image.medium;
			document.querySelector("#images").append(img);
		}
	}
};
