// fetch("https://swapi.dev/api/people/1/") //sends a request to this url and returns a promise
// 	.then((res) => {
// 		//if promise is resolved, we call res.json();
// 		console.log("resolved", res);
// 		//res.json() returns a promise
// 		res.json().then((data) => console.log("JSON DONE", data));
// 		return fetch("https://swapi.dev/api/people/2/");
// 	})
// 	.then((res) => {
// 		console.log("second request resolved");
// 		return res.json();
// 	})
// 	.then((data) => {
// 		console.log(data, "data from second request");
// 	})
// 	//if promise is not resolved
// 	.catch((e) => {
// 		console.log("ERROR!", e);
// 	});

//fetch, the better way
// const loadStarWarsAPI = async () => {
// 	try {
// 		const res = await fetch("https://swapi.dev/api/people/1/");
// 		const data = await res.json();
// 		console.log(data, "data from async");
// 		const res2 = await fetch("https://swapi.dev/api/people/2/");
// 		const data2 = await res2.json();
// 		console.log(data2, "data from async");
// 	} catch (e) {
// 		console.log("ERROR:", e);
// 	}
// };

// loadStarWarsAPI();
// axios
// 	.get("https://swapi.dev/api/people/1/")
// 	.then((res) => {
// 		console.log("RESPONSE: ", res);
// 	})
// 	.catch((e) => {
// 		console.log("Error: ", e);
// 	});

// const getStarWarsAPI = async (id) => {
// 	try {
// 		const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
// 		console.log(res.data);
// 	} catch (e) {
// 		console.log("Error: ", e);
// 	}
// };

// getStarWarsAPI(5);

//specify header with axios
const jokes = document.querySelector("#jokes");
const button = document.querySelector("button");

const addNewJoke = async () => {
	const jokeText = await getDadJoke();
	// console.log(jokeText);
	const newLi = document.createElement("LI");
	newLi.append(jokeText);
	jokes.append(newLi);
};

const getDadJoke = async () => {
	try {
		const config = { headers: { Accept: "application/json" } };
		const res = await axios.get("https://icanhazdadjoke.com/", config);
		// console.log(res.data.joke);
		return res.data.joke;
	} catch (e) {
		console.log(`ERROR: `, e);
		return "No jokes available, sorry";
	}
};

button.addEventListener("click", addNewJoke);
// getDadJoke();
