/* JS Document */


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

	/*
	Workshop box
	 */

    $('.workshop_btn').click(function(e) {
        var imageurl;
        var workshop_number;
        var workshop_title;
        var workshop_desc;
        var workshop_title_selector=$('.workshop_box_title>h1');
        var workshop_text_selector=$(".workshop_box_text>p");
    	workshop_number=$(this).parent().attr("workshop_no");
        imageurl="url('images/workshop_box_"+ workshop_number +".jpg')";
        $('.workshop_box').css("background-image",imageurl);



    	switch(workshop_number){

			case "1":
				workshop_title="Workshop 1";
				workshop_desc="Workshop1 desc";
				break;
            case "2":
                workshop_title="Workshop 2";
                workshop_desc="Workshop1 desc";
                break;
            case "3":
                workshop_title="Workshop 3";
                workshop_desc="Workshop1 desc";
                break;

			default:
				workshop_title="--Unknown workshop--";
				workshop_desc="--no description--";

		}



		workshop_title_selector.html(workshop_title);
    	workshop_text_selector.html(workshop_desc);
        $('#wbox_1').lightbox_me({
            centered: true,

            overlayCSS: {background: 'black',
                opacity: .9}
        });
        e.preventDefault();
    });


});
