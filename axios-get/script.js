console.log('ajax get')

const getData = input => {

	// https://rickandmortyapi.com/api/character/?name=rick
	// make a request to the api
	axios.get(`https://rickandmortyapi.com/api/character/?name=${input}`)
		.then(response => {
			console.log(response.data.results)
			const char = response.data.results[0]
			// update the dom
			document.querySelector('h3').innerText = char.name
			document.querySelector('img').setAttribute('src', char.image)
		})
		.catch(err => next(err))

	// using fetch
	// fetch(`https://rickandmortyapi.com/api/character/?name=${input}`)
	// 	.then(response => response.json())
	// 	.then(data => {
	// 		console.log(data.results)
	// 		const char = data.results[0]
	// 		document.querySelector('h3').innerText = char.name
	// 		document.querySelector('img').setAttribute('src', char.image)
	// 	});
}

document.querySelector('button').addEventListener('click', () => {
	// get the input value
	const input = document.querySelector('input').value
	console.log(input)
	getData(input)
})