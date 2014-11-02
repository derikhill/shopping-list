	function addListItem() {
		var text = $('#enter-items').val();
		$('.item-list').append(+ text +);
	}

	$(function() {
		$('#add').on('click', addListItem);
	});  

