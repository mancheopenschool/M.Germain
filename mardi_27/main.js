$(document).ready(function() {
	$(".couleur").click(function() {
		$("h1").css("color" , "red");
	});
	
	$(".toto").click(function() {
		//console.log("coucou")
		$("#mos").toggle();
	});
	
	$("li:contains('Ddd')").addClass('trouve').text("Génial c'est en rouge !");

	$("li:contains('Eee')").text("Hello c'est Eee");

	$(".tata").click(function() {
		$("ul").append("<li>Fff</li>");
	});

	$("img").each(function() {
		var imgsrc = $(this).attr("src");
		$(this).wrap("<a rel='group' href='" + imgsrc + "'></a>");
	});

	//ou 
	//$("img").each(function() {
		//$(this).wrap("<a href='" + $(this).attr("src") + "'></a>");
	//});

	$("#photozoom a").fancybox();

	$("#navigation a").click(function() {
		$("#navigation a").removeClass("rougeactive");
		$(this).addClass("rougeactive")
	});
	
	$("#date").datepicker();

});