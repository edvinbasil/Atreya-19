/* JS Document */

window.onload = function() {
    // Month Day, Year Hour:Minute:Second, id-of-element-container
    countDownToTime("Feb 9, 2019 09:00:00", 'countdown_atreya');
};
function countDownToTime(countTo, id) {
    countTo = new Date(countTo).getTime();
    var now = new Date(),
        countTo = new Date(countTo),
        timeDifference = (countTo - now);

    var secondsInADay = 60 * 60 * 1000 * 24,
        secondsInAHour = 60 * 60 * 1000;

    days = Math.floor(timeDifference / (secondsInADay) * 1);
    hours = Math.floor((timeDifference % (secondsInADay)) / (secondsInAHour) * 1);
    mins = Math.floor(((timeDifference % (secondsInADay)) % (secondsInAHour)) / (60 * 1000) * 1);
    secs = Math.floor((((timeDifference % (secondsInADay)) % (secondsInAHour)) % (60 * 1000)) / 1000 * 1);

    var idEl = document.getElementById(id);
    idEl.getElementsByClassName('days')[0].innerHTML = days;
    idEl.getElementsByClassName('hours')[0].innerHTML = hours;
    idEl.getElementsByClassName('minutes')[0].innerHTML = mins;
    idEl.getElementsByClassName('seconds')[0].innerHTML = secs;

    clearTimeout(countDownToTime.interval);
    countDownToTime.interval = setTimeout(function(){ countDownToTime(countTo, id); },1000);
}
$(document).ready(function()
{
	"use strict";

	/* 

	1. Vars and Inits

	*/

	var header = $('.header');
	var ctrl = new ScrollMagic.Controller();

	initMenu();
	initHomeSlider();
	initMagic();

	setHeader();

	$(window).on('resize', function()
	{
		setHeader();
	});

	$(document).on('scroll', function()
	{
		setHeader();
	});

	/* 

	2. Set Header

	*/

	function setHeader()
	{
		if($(window).scrollTop() > 91)
		{
			header.addClass('scrolled');
		}
		else
		{
			header.removeClass('scrolled');
		}
	}

	/* 

	3. Init Menu

	*/

	function initMenu()
	{
		if($('.menu').length)
		{
			var hamb = $('.hamburger');
			var menu = $('.menu');
			var menuOverlay = $('.menu_overlay');

			hamb.on('click', function()
			{
				menu.addClass('active');
			});

			menuOverlay.on('click', function()
			{
				menu.removeClass('active');
			});
		}
	}

	/* 

	4. Init Home Slider

	*/

	function initHomeSlider()
	{
		if($('.home_slider').length)
		{
			var homeSlider = $('.home_slider');
			homeSlider.owlCarousel(
			{
				animateOut: 'fadeOutLeft',
    			animateIn: 'fadeInRight',
				items:1,
				loop:true,
				autoplay:false,
				autoplayTimeout:8000,
				smartSpeed:1200,
				autoplaySpeed:1200,
				dotsSpeed:1200,
				mouseDrag:false,
				nav:false,
				dots:true,
				margin:250
			});
		}
	}



	function initMagic()
	{
		if($('.image_overlay').length)
		{
			var eles = $('.image_overlay');
			eles.each(function()
			{
				var ele = this;

				var projectScene = new ScrollMagic.Scene(
				{
					triggerElement: ele,
			        triggerHook: "onEnter",
			        offset: 400,
			        reverse:false
				})
				.setClassToggle(ele, 'active')
				.addTo(ctrl);
			});
		}
	}


});
