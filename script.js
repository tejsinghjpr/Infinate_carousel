$(function() {
	var container = $('.carousel');
	var list_width = container.width();
	container.find('li').eq(0).addClass('current').show();
	
	container.find('.next').click(function () {
		var current = container.find('.current');
		var next = container.find('.current').next();

		if(!next.length) {
			next = container.find('li').eq(0);
		}

		next.css('left',list_width).show();
		current.animate({
			left: -1*list_width
		}, 500, function() {
			$(this).removeClass('current').removeAttr('style');
		});
		next.animate({
			left: 0
		}, 500, function () {
			$(this).addClass('current');
		});
	});

	container.find('.pre').click(function () {
		var current = container.find('.current');
		var previous = container.find('.current').prev();

		if(!previous.length) {
			previous = container.find('li').last();
		}

		previous.css('left',-1*list_width).show();
		current.animate({
			left: list_width
		}, 500, function() {
			$(this).removeClass('current').removeAttr('style');
		});

		previous.animate({
			left: 0
		}, 500, function () {
			$(this).addClass('current');
		});
	});
});