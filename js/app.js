/*
On page load display load icon while content renders
Load results in 'module' class
When user click read more display article in a popup
Toggle for input when user clicks on search icon, hide whe user cliskc on icon again
*/
console.log("app js loaded");

// Global variables
var $search = $('#searchIcon');
var $slideBox = $('#searchInput');
var $button = $('.btn');
var $close = $('.closePopUp');

// toggle the search inout when icon is clicked
$search.on('click', function () {
	$slideBox.slideToggle(500);
});

// Display popup when button is clicked
$button.on('click', function() {
	$('#popUp').removeClass();
	$('#searchIcon').hide();
});
// Hide the popup when the X is clicked
$close.on('click', function() {
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
			console.log(reditResponse.data.children[0].data.title);

			// This iterates over the returned data and adds elements from the object to the HTML
			$(redditResponse).each(function () {
				var counter = counter || 1;
				$('.module', 'h2').html(this.data.children[0].data.title);
				counter += 1;

			if(counter === 3) {
				$('.module').html('</div>');
				$('.module').html('div class = row');
				counter = null;
				}
			});
		},
		complete: function() {
			$('.main').html('Trouble in loading land....');
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
