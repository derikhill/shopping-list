$(document).ready(function() {

$('#enter-items').keydown(function(event){
		if(event.keyCode == 13) {
			event.preventDefault();
			$('.add').click();
		};
	});

	var check = '<span class="check"></span>'
	var done = '<span class="deleted"></span>'

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

    $(document).on('click', '.check', function() {
    var itemSelected = $(this).closest("p");
    itemSelected.addClass('checked').removeClass('new-item')
    .fadeIn("slow");
	});

    $(document).on('click', '.checked', function() {
    var itemSelected = $(this).closest("p");
    itemSelected.removeClass('checked').addClass('new-item')
    .fadeIn("slow");
	});

    $(document).on('click', '.deleted', function() {
    console.log('Removing item');
    $(this).closest("p").hide(500, function() {
      $(this).closest("p").remove();
    });
  });

});
