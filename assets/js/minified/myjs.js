$(document).ready(function(){$(document).on("click",'[data-toggle="lightbox"]',function(e){e.preventDefault(),$(this).ekkoLightbox({wrapping:!0})}),$(function(){$(document).scroll(function(){var e=$(".fixed-top");e.toggleClass("scrolled",$(this).scrollTop()>e.height())})}),$("#show-more-btn").click(function(){$("#about-more").show()}),window.onload=function(){var o=["cover.jpg","IMG_4478.jpg","IMG_4481.jpg","IMG_4511.jpg","IMG_4527.jpg","KEL_7799.jpg","KEL_8222.jpg"];!function(e){for(var o=0;o<e.length;o++)imageToLoad=new Image,imageToLoad.src="./assets/images/bg-images/"+e[o]}(o);var a=1;setInterval(function(){a==o.length&&(a=0);var e=o[a];$(".cover").css({"background-image":"url('./assets/images/bg-images/"+e+"')"}),a++},7e3)}();new LazyLoad;window.sr=ScrollReveal({scale:.7,duration:700}),sr.reveal("#about"),sr.reveal("#services"),sr.reveal("#portfolio"),sr.reveal("#clients"),sr.reveal("#connect"),sr.reveal("#contact")});