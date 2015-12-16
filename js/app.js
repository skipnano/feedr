/*
On page load display load icon while content renders
Load results in 'module' class
When user click read more display article in a popup
Toggle for input when user clicks on search icon, hide whe user cliskc on icon again
*/
console.log("app js loaded");

// Search input slide toggle click function 
var $search = $('#searchIcon');
var $slideBox = $('#searchInput');
var $button = $('.btn');
var $close = $('.closePopUp');

$search.on('click', function () {
	$slideBox.slideToggle(500);
});

	// Gets Reddit JSON
	$.ajax ({
		url: "http://www.reddit.com/top.json",
		data: {
			format: "json"
		},
		success: function(response) {
			console.log(response);
		}
	});

	// Gets Digg JSON
	$.ajax ({
		url: "http://digg.com/api/news/popular.json",
		data: {
			format: "jsonp"
		},
		success: function(response) {
			console.log(response);
		}
	});
	// Gets Mashable JSON
	$.ajax ({
		url: "http://mashable.com/stories.json",
		data: {
			format: "jsonp"
		},
		success: function(response) {
			console.log(response);
		}
	});

// Display popup when button is clicked
$button.on('click', function() {
	$('#popUp').removeClass();
});
// Hide the popup when the X is clicked
$close.on('click', function() {
	$('#popUp').addClass('hidden')
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
