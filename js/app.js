/*
Coded by Dean Gilroy @ General Assembly
Javascript Alpha Class
Project: Feedr
*/
console.log("app js loaded");

// Global variables
var $search = $('#searchIcon');
var $slideBox = $('#searchInput');
var $button = $('.btn');
var $close = $('.closePopUp');

// toggle the search input when icon is clicked
$search.on('click', function () {
	$slideBox.slideToggle(500);
});

// Display popup when button is clicked. Binds the event to the .main class, so all buttons added via jquery will fire
$('.main').on('click', '.btn', function () {
	$('#popUp').removeClass();
	$('#searchIcon').hide();
});

// Hide the popup when the X is clicked. Binds the event to the #popUp ID
$('#popUp').on('click', '.closePopUp', function () {
	$('#popUp').addClass('hidden');
	$('#searchIcon').show();
});

// Displays the ajax loader while ajax is executig
$(document).ajaxStart(function() {
    $('.article-row').hide();
    $('#loader').css('display', 'block');
});

$(document).ajaxComplete(function(){
    $('#loader').css('display', 'none');
    $('.article-row').show();
});


// Gets Reddit JSON
$.ajax ({
	url: "https://www.reddit.com/top.json",
	dataType: "json",
	timeout: 5000,
	success: function(response) {
		console.log(response);
		var redditResponse = response;
		// This iterates over the returned data and adds elements from the object to the HTML
		$(redditResponse.data.children).each(function () {
			var counter = counter || 1;
			$('.module').append('<img class="article-image" src=' + this.data.url + '/>');
			$('.module').append('<h2>' + this.data.title + '</h2>');
			$('.module').append("<button type='submit' value='submit' class='btn'>Read More</button>");
			$('.module').append('<hr>');
			counter += 1;

		if(counter === 3) {
			$('.module').html('</div>');
			$('.main').html('<div class="row article-row">');
			$('.main').html('<div class="col-sm-4 article-column">');
			$('.main').html('<div class="module">');
			counter = null;
			}

			// $('.main').on('click', '.btn', function() {
			// 	var title = this.data.title;
			// 	var description = this.data.media.oembed.description;
			// 	console.log(description);
			// });
		});
	},
	error: function() {
		// $('.main').html("<h1>Trouble in loading land...</h1>");
	}
});


// THIS IS PSEUDO CODE TO ITERATE OVER RETIRNED DATA AND ADD MODULES TO THE HTML WITH THAT DATA.
/*
$(redditResponse).each(function () {
	var counter = counter || 1;
	$('.module').html(this.title);
	counter += 1;

	if(counter === 3) {
		$('.module').html('</div>');
		$('.module').html('div class = row');
		counter = null;
	}
});
*/
