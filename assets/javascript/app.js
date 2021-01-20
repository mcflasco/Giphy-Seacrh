const buttons = ['Walking Dead', 'Game of Thrones', 'The Witcher'];

for(let i = 0; i < buttons.length; i++){
	let button = $('<button class="btn btn-secondary" type="button">' + buttons[i] + "</button>");
	button.addClass('newButton')
	button.attr('data-name', buttons);
    button.attr("onclick", "giphySearch('" + buttons[i] + "')");
    button.appendTo("#buttons");
       
	}


const start = () => {
	$('#btn').on('click', function(){
		// $('#images').fadeTo(2000, 1)	

		if( $('input').val() === ""){
			console.log('you must make a valid entry...')
			$('#error').html('Error: you must make a valid entry...')
			$('#error').show()
		} else{
		console.log('clicked')
		userInput = $('input').val().trim();

		createButtons();
		giphySearch(userInput);	
		}
	})
}



const createButtons = () => {

	// creates buttons from click method
	let button = $(' <button class="btn btn-secondary" type="button" >' + userInput + '</button>');
	button.addClass('newButton')
	button.attr('data-name', userInput);
	button.attr("onclick", "giphySearch('" + userInput + "')");		
	button.appendTo('#buttons');

}



const giphySearch = (topic) => {

	const limit = 20;
	const api = 'https://api.giphy.com/v1/gifs/search?';
	const apiKey = '&api_key=HzpZI62zbKjwtTJJ0RLDCn0FWbNHiWhd';
	const query = "&q=" + topic;	
	const URL = api + apiKey + query;
	// const xhr = $.get(URL);

	$.ajax({url: URL, method: 'GET'})

		.done(function(response) {
	 		console.log(URL);
	    	console.log(response);
	 	
	// xhr.done(function(data){
	// 	console.log(data);	
	// 	let images = $('<img src="">');

		for(var i = 0; i < response.data.length; i++){
				console.log(response.data[i].images.original.url);
				console.log(response.data[i].rating);				
		}


		for(let i = 0; i < limit; i++){
			let images = $('<img id="gif" src="">')		
			images.appendTo('#images');

			$(images).attr('src', response.data[i].images.original.url);
			$('#rating').html(response.data[i].rating);
		}
	})

	$('img').hide()
	$('#error').hide()
	$(input).val("")
}

// set it up to replace old search

start();
