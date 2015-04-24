$(document).ready(function() {
	$('img').click(function(){
		$(this).fadeOut('fast')
	});
});

var countChecked = function() {
  var n = $( "input:checked" ).length;
};
countChecked();
 
$( "input[type=checkbox]" ).on( "click", countChecked );
