$('.top').on('click', function() {
	$parent_box = $(this).closest('.portfolio');
	$parent_box.siblings().find('.bottom').hide();
	$parent_box.find('.bottom').toggle();
});