$(function(){

	function squarify() {
		$(".square").each(function() {
			$(this).height($(this).width());
		});
	}

	function vert_center() {
		$(".vert-center").each(function() {
			margin = ($(this).parent().height() - $(this).outerHeight()) / 2
			$(this).css("margin-top", margin);
		});
	}

	squarify();
	vert_center();
	$(window).resize(function() {
		squarify();
		vert_center();
	});

	$('.problem-link').click(function() {
		next = $(this).index('.problem-link') + 1

		$(".problem-link").removeClass('active');
		$(this).addClass('active');

		$('#problem-area').fadeOut(function() {
			$(this).html('<img src="assets/' + next + '.jpg">')
			$(this).fadeIn(600);			
		})
	});

});