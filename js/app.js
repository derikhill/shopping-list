$(document).ready(function() {	

$('#enter-items').keydown(function(event){
		if(event.keyCode == 13) {
			event.preventDefault();
			$('.add').click();
		};
	});

	function addListItem() {
		var text = $('#enter-items').val();
		$('#item-list').prepend('<p class="new-item">' + check + text + done + '</p>');
		$('#enter-items').val('');
		$('#item-list')	
		.css('opacity', "0")
        .css("margin-top", "-20px")
        .animate(
            { opacity: "1" },
            { queue: true, duration: 'slow' }
        )
        .animate(
            {marginTop: "0px"},
            { queue: false, duration: 'slow' }
        );
	}

	$(function() {
		$('.add').on('click', addListItem);
	});

	$('document').on('click', '.delete', function() {
		$(this).closest('p').fadeOut(400);
	});

	var check = '<span class="check"></span>'
	var done = '<span class="delete"></span>'
	
});