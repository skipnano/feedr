/*
Coded by Dean Gilroy @ General Assembly
Javascript Alpha Class
Project: Feedr
*/
console.log("app js loaded");

// Global variables
var $search = $('#searchIcon');
var $slideBox = $('#searchInput');
var $slideGo = $('#searchBtn');
var $mobileSearch = $('.mobile-search');
var $mobSearch = $('#mob-search-icon');
var $mobSearchInput = $('#mob-search-input');
var $mobSearchBtn = $('#mob-search-btn');
var $button = $('.btn');
var $close = $('.closePopUp');

// Toggle the search input when icon is clicked
$search.on('click', function () {
	$slideBox.slideToggle(500);
	$slideGo.slideToggle(500);
});

// Toggle the mobile search div when mobile icon is clicked
$mobSearch.on('click', function () {
	$mobileSearch.slideToggle(500);
});

// Display popup when button is clicked. Binds the event to the .main class, so all buttons added via jquery will fire
$('.main').on('click', '.btn', function (e) {
	e.preventDefault();
	$('#popUp').removeClass();
	// debugger;
	$('#searchIcon').hide();
	// These get the data from teh parent element and save them to a varibale
	var title = $(this).parent().find("h2").html();
	var image = $(this).parent().find("img").attr('src');
	var sourceLink = $(this).parent().find("p").html();
	var comments = $(this).parent().find("h3").html();
	// these inject the data from the variables above into the popup
	$('#popUp').find("h1").html(title);
	$('#popUp').find("img").attr("src", image);
	$('#popUp').find("a").attr("href", sourceLink);
	$('#popUp').find("p").html(comments +  " comments");
	// this will scroll the windown to top so user can see the popup
	$('body').scrollTop(0);
});

// Hide the popup when the X is clicked. Binds the event to the #popUp ID
$('#popUp').on('click', '.closePopUp', function (e) {
	e.preventDefault();
	$('#popUp').addClass('hidden');
	$('#searchIcon').show();
});

// Displays the ajax loader while ajax is executig
$(document).ajaxStart(function() {
    $('.article-row').hide();
    $('#loader').css('display', 'block');
});
// Hides the ajax loader when the call is complete
$(document).ajaxComplete(function(){
    $('#loader').css('display', 'none');
    $('.article-row').show();
});

// Gets Reddit JSON
$.ajax ({
	url: "https://www.reddit.com/top.json",
	dataType: "json",
	// timeout: 5000,
	success: function(response) {
		console.log(response);

		var redditResponse = response;
		// This iterates over the returned data and adds elements from the object to the HTML
		$(redditResponse.data.children).each(function () {
			var counter = counter || 1;
			$('.main').append(articleModule(this));
			// counter += 1;

		// if(counter === 1) {

		// 	counter = null;
		// 	}
		});
	}
});

// This function builds the html structure that will be appended in main
function articleModule(article) {
    return '<div class="module">' +
            '<img src="' + article.data.thumbnail + '"/>' +
            '<h2>' + article.data.title + '</h2>' +
			"<button type='submit' value='submit' class='btn'>Read More</button>" +
			"<p class='hidden'>" + article.data.url + "</p>" +
			"<h3 class='hidden'>" + article.data.num_comments + "</h3>" +
			'</div>' 
}



