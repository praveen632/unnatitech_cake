"use strict";function checkmail(e){var s=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;return s.test(e)?!0:!1}function proceed(){var e=document.getElementById("name"),s=document.getElementById("email"),t=document.getElementById("company"),i=document.getElementById("message");return""==e.value?(e.className="error",!1):""==s.value?(s.className="error",!1):0==checkmail(s.value)?(alert("Please provide a valid email address."),!1):""==t.value?(t.className="error",!1):""==i.value?(i.className="error",!1):void $.ajax({type:"POST",url:"php/submit.php",data:$("#contact_form").serialize(),success:function(e){return e?($("#contact_form").fadeOut(1e3),$("#contact_message").fadeIn(1e3),document.getElementById("contact_message"),!0):void 0}})}$(document).ready(function(){function e(){if($().isotope){var e="";r.each(function(){var s=$(this).attr("data-filter"),t=window.location.href,i=t.indexOf("filter=");if(i>0){var o=t.substring(i+7,t.length);"."+o==s&&(e="."+o)}}),o.isotope({itemSelector:".masonry-grid",filter:e,layoutMode:"fitRows"}),r.each(function(){var s=$(this),t=s.attr("data-filter");if(t==e&&!s.hasClass("selected")){var i=s.parents(".option-set");i.find(".selected").removeClass("selected"),s.addClass("selected")}}),r.on("click",function(){var e=$(this),s=e.attr("data-filter");if(o.isotope({itemSelector:".masonry-grid",filter:s}),!e.hasClass("selected")){var t=e.parents(".option-set");t.find(".selected").removeClass("selected"),e.addClass("selected")}return!1})}}$(".sticky-1, .sticky-2").sticky({topSpacing:0}),$(window).scroll(function(){$(this).scrollTop()>1e3?$("#scrollup").fadeIn():$("#scrollup").fadeOut()}),$("#scrollup").on("click",function(){return $("html, body").animate({scrollTop:0},1e3),!1});var s=function(){var e=($(window).width(),$(window).height());$(".fullscreen").css("height",e)};$(window).resize(function(){s()}).resize(),$("#banner-slider").owlCarousel({animateOut:"fadeOut",autoplay:!0,items:1,nav:!1,loop:!0,dots:!1,smartSpeed:450}),$(".enquiry-form-holder .bars-icon").on("click",function(){$(".enquiry-form-holder").toggleClass("in-hieght")});var t=new WOW({boxClass:"animate",animateClass:"animated",offset:100,mobile:!1});t.init(),$("#slider-post").owlCarousel({items:1,nav:!0,loop:!0,dots:!1,smartSpeed:450}),$('a[href="#search"]').on("click",function(e){e.preventDefault(),$("#search").addClass("open"),$('#search > form > input[type="search"]').focus()}),$("#search, #search button.close").on("click",function(e){(e.target==this||"close"==e.target.className||27==e.keyCode)&&$(this).removeClass("open")}),$("form").submit(function(e){return e.preventDefault(),!1}),$(".chose-color").colorpicker(),$("#services-slider").owlCarousel({loop:!0,margin:30,nav:!0,dots:!1,smartSpeed:200,responsiveClass:!0,responsive:{0:{items:1},320:{items:1},480:{items:1},640:{items:2},768:{items:2},800:{items:2},960:{items:2},991:{items:2},1024:{items:3},1199:{items:3}}}),$(".service-v2-slider").owlCarousel({loop:!0,margin:30,nav:!1,dots:!1,smartSpeed:200,responsiveClass:!0,responsive:{0:{items:1},320:{items:1},480:{items:1},640:{items:2},768:{items:2},800:{items:2},960:{items:3},991:{items:3},1024:{items:4},1199:{items:4}}}),$("#brand-icons-slider").owlCarousel({loop:!0,margin:30,nav:!1,dots:!1,autoplay:!0,smartSpeed:200,responsiveClass:!0,responsive:{0:{items:1},320:{items:1},480:{items:2},640:{items:2},768:{items:3},800:{items:4},960:{items:4},1200:{items:4}}}),$("#bags-slider").owlCarousel({loop:!0,margin:30,nav:!0,dots:!1,smartSpeed:200,responsiveClass:!0,responsive:{0:{items:1},320:{items:1},480:{items:2},640:{items:2},768:{items:2},800:{items:3},991:{items:3},1200:{items:4}}}),$("#uniform-slider").owlCarousel({loop:!0,margin:30,nav:!0,dots:!1,smartSpeed:200,responsiveClass:!0,responsive:{0:{items:1},320:{items:1},480:{items:2},640:{items:2},768:{items:2},800:{items:3},991:{items:3},1200:{items:4}}}),$("#other-products").owlCarousel({loop:!0,margin:30,nav:!0,dots:!1,smartSpeed:200,responsiveClass:!0,responsive:{0:{items:1},320:{items:1},480:{items:2},640:{items:2},768:{items:2},800:{items:3},991:{items:3},1200:{items:4}}}),$("#team-slider").owlCarousel({loop:!0,margin:30,nav:!0,dots:!1,smartSpeed:200,responsiveClass:!0,responsive:{0:{items:1},320:{items:1},480:{items:2},640:{items:2},768:{items:2},800:{items:2},960:{items:2},991:{items:2},1024:{items:3},1200:{items:3}}}),$("#testimonial-slider").owlCarousel({loop:!0,margin:30,nav:!0,dots:!1,smartSpeed:200,responsiveClass:!0,responsive:{0:{items:1},320:{items:1},480:{items:1,nav:!1},640:{items:2},768:{items:2},800:{items:2},960:{items:2},991:{items:2},1024:{items:3},1200:{items:3}}}),$("#product-tumbnail-slider").owlCarousel({loop:!0,autoplay:!0,items:1,nav:!0,autoplayHoverPause:!0,animateOut:"slideOutUp",animateIn:"slideInUp",dots:!1}),$("#team-slider-thumnail").owlCarousel({loop:!0,margin:30,nav:!0,dots:!1,smartSpeed:200,responsiveClass:!0,responsive:{0:{items:1},320:{items:1},480:{items:3},640:{items:3},768:{items:2},800:{items:3},960:{items:3},1200:{items:4}}}),$("#countdown-1, #countdown-2, #countdown-3, #countdown-4, #countdown-5, #countdown-6").countdown({date:"3/30/2016 2:17:59",offset:-2100,day:"Day",days:"Days"},function(){});try{$("#tc-counters").appear(function(){setTimeout(function(){odometer1.innerHTML=2e3},0),setTimeout(function(){odometer2.innerHTML=1e3},0),setTimeout(function(){odometer3.innerHTML=188},0),setTimeout(function(){odometer4.innerHTML=200},0)})}catch(i){}$("#location-map").gmap3({marker:{address:"Haltern am See, Weseler Str. 151"},map:{options:{zoom:16,scrollwheel:!1}}}),$("#contact-map").gmap3({marker:{address:"Haltern am See, Weseler Str. 151"},map:{options:{zoom:16,scrollwheel:!1}}}),$(".panel-heading").addClass("collapsed"),$("a[data-rel]").each(function(){$(this).attr("rel",$(this).data("rel"))}),$("a[data-rel^='prettyPhoto']").prettyPhoto({animation_speed:"normal",slideshow:1e3,autoplay_slideshow:!1,social_tools:!1}),$(".youtube").each(function(){$(this).css("background-image",+this.id+"/sddefault.jpg)"),$(this).append($("<div/>",{"class":"play"})),$(document).delegate("#"+this.id,"click",function(){var e="https://www.youtube.com/embed/"+this.id+"?autoplay=1&autohide=1";$(this).data("params")&&(e+="&"+$(this).data("params"));var s=$("<iframe/>",{frameborder:"0",src:e,width:$(this).width(),height:$(this).height()});$(this).replaceWith(s)})});var o=$(".gallery-masonry"),a=$(".option-set"),r=a.find("a"),n=window.setTimeout(function(){window.clearTimeout(n),e()},1e3)});