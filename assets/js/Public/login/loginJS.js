$(document).ready( function(){
	$('.popover-markup > .trigger').popover({
	    html : true,
	    title: function() {
	      return $(this).parent().find('.head').html();
	    },
	    content: function() {
	      return $(this).parent().find('.content').html();
	    },
	    container: 'body',
	    placement: 'bottom'
	});
});