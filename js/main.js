$(function(){
	$('#arrow').hide().delay(200).fadeIn()
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