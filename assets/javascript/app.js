
buttons = ['Rwby', 'Attack on Titan', 'korn'];

for(let i = 0; i < buttons.length; i++){
	var button = $(' <button class="btn btn-secondary" type="button" id="button">' + buttons[i] + '</button>');
	button.appendTo('#buttons');
}

let userInput;

const giphySeacrh = () => {
	
	userInput = $('input').val().trim();

	randomGif = Math.floor(Math.random() * 50)
		console.log(randomGif)

	const api = 'https://api.giphy.com/v1/gifs/search?';
	const apiKey = '?';
	const query = "&q=" + userInput;


	const url = api + apiKey + query;
	const xhr = $.get(url)
	xhr.done(function(data){
		console.log(data);
		let test = data.data;
		let images = $('<img src=""> ')
		for(var i = 0; i < data.data.length; i++){
				console.log(data.data[i].images.original.url);
				console.log(data.data[i].rating);
				
			}

			for(let i = 0; i < 10; i++){
				let images = $('<img id="gif" src=""> ')
				images.appendTo('#images')
				$(images).attr('src', data.data[i].images.original.url);
			}

		$('#gif').attr('src', data.data[randomGif].images.original.url);
		$('#rating').html(data.data[randomGif].rating);
	})
}

$('button').on('click', function(){
	console.log('clicked')
	userInput = $('input').val().trim();
	
	var button = $(' <button class="btn btn-secondary" type="button" id="button">' + userInput + '</button>');
	button.appendTo('#buttons');

	giphySeacrh();
})