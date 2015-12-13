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

$search.on('click', function () {
	$slideBox.slideToggle(500);
});

// function to get the user input and sned API request
$slideBox.val()