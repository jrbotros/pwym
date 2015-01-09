$(function(){
	$('#problem-list li').removeClass('active');

	$('#arrow').hide().delay(200).fadeIn(1000);

	$('#arrow').click(function() {
	    var target = $('#content')
	    $('html, body').animate({
	        scrollTop: target.offset().top - parseInt(target.css('margin-top')) - $('.navbar').first().outerHeight() - 100
	    }, 1000);
	});

    $('#arrow').hover(
        function() {$(this).find('path').css('fill', '#0089C8')},
        function() {$(this).find('path').css('fill', 'white')}
    );

    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $($(this.hash).selector);
            if (target.length) {
            	$('html, body').animate({
			        scrollTop: $(target).offset().top - parseInt($(target).css('margin-top')) - $('.navbar').first().outerHeight() - 100
			    }, 2000);

                return false;
            }
        }
    });

	function getCurIndex() {
	    var curIndex = -1;
	    var scrollCenter = $(window).scrollTop() + $(window).height() / 2;

	    $('.problem-area').each(function(index) {
	        var offsets = getMarginOffset($(this));

	        if (scrollCenter >= offsets[0] && scrollCenter < offsets[1]) {
	            curIndex = index;
	            return false;
	        }
	    });    

	    return curIndex;
	}

	function getMarginOffset(elt) {
	    return [elt.offset().top - parseInt(elt.css('margin-top')), elt.offset().top + elt.outerHeight() + parseInt(elt.css('margin-bottom'))]
	}

	activeIdx = -1;
    $(window).scroll(function() {
    	idx = getCurIndex();
    	if (idx != activeIdx) {
    		activeIdx = idx;
    		$('#problem-list li').removeClass('active');
    		if (idx >= 0) {
	    		$('#problem-list li').eq(idx).addClass('active');
    		}
    	}
    });

	$('#problem-list li').click(function() {
		targetIndex = $(this).index('#problem-list li');
		target = $('.problem-area').get(targetIndex);
		console.log(target);

		$('#problem-list li').removeClass('active');
		$(this).addClass('active');

	    $('html, body').animate({
	        scrollTop: $(target).offset().top - parseInt($(target).css('margin-top')) / 2
	    }, 2000);
	});
});