$(function(){

	//On click of the submit button
	$("#submit-btn").click(function(){
		//console.log("button clicked");
		event.preventDefault();
	//Capture the city entered
		var city = $('#city-type').val();
		//console.log(city);

		if (city === "NYC" || city === "New York" || city === "New York City"){
			$('body').attr('class', 'nyc');
		} else if (city === "SF" || city === "San Fransisco" || city === "Bay Area"){
			$('body').attr('class', 'sf');
		} else if (city === "Los Angeles" || city === "LA" || city === "LAX"){
			$('body').attr('class', 'la');
		} else if (city === "Austin" || city === "ATX"){
			$('body').attr('class', 'austin');
		} else if (city === "Sydney" || city === "SYD"){
			$('body').attr('class', 'sydney');

		} else {
			$('body').attr('class', '');
		};

		$('#city-type').val("");

		});

});

