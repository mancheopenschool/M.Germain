$(document).ready(function() {
	$("input[type=submit], a, button")
	.button().click(function( event ) {
	event.preventDefault();
	});

	// Widget Date

	$("#datepicker").datepicker({
		showOn: "button",
		buttonImage: "images/calendar.gif",
		buttonImageOnly: false,
		buttonText: "Choisissez une date"
    });
    
	(function(factory) {
		if ( typeof define === "function" && define.amd ) {
			// AMD. Register as an anonymous module.
			define([ "../jquery.ui.datepicker" ], factory );
		} 
		else {
			// Browser globals
			factory( jQuery.datepicker );
		}
	}

	(function(datepicker) {
		datepicker.regional['fr'] = {
		closeText: 'Fermer',
		prevText: 'Précédent',
		nextText: 'Suivant',
		currentText: 'Aujourd\'hui',
		monthNames: ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'],
		monthNamesShort: ['janv.', 'févr.', 'mars', 'avril', 'mai', 'juin', 'juil.', 'août', 'sept.', 'oct.', 'nov.', 'déc.'],
		dayNames: ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'],
		dayNamesShort: ['dim.', 'lun.', 'mar.', 'mer.', 'jeu.', 'ven.', 'sam.'],
		dayNamesMin: ['D','L','M','M','J','V','S'],
		weekHeader: 'Sem.',
		dateFormat: 'dd/mm/yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
		datepicker.setDefaults(datepicker.regional['fr']);

		return datepicker.regional['fr'];

	}));

});

// Widget Checkbox
$("input").change(function() {
	var $input = $( this );
	$("p").html(
	".attr( \"checked\" ): <b>" + $input.attr( "checked" ) + "</b><br>" +
	".prop( \"checked\" ): <b>" + $input.prop( "checked" ) + "</b><br>" +
	".is( \":checked\" ): <b>" + $input.is( ":checked" ) ) + "</b>";
}).change();


// Widget Menu déroulant
$(function() {
	$("#number")
	.selectmenu()
	.selectmenu("menuWidget")
	.addClass("overflow");
});


// Widget Slider bar
$(function() {

	$("#slider").slider({
		orientation: "horizontal",
		value:4,
		min: 1,
		max: 7,
		step: 1,
		range: "min",
		slide: function( event, ui ) {
		$("#amount").val(ui.value );
		}
	});
		$("#amount").val($("#slider").slider("value"));

	$("#slider1").slider({
		orientation: "horizontal",
		value:4,
		min: 1,
		max: 7,
		step: 1,
		range: "min",
		slide: function( event, ui ) {
		$("#amount1").val(ui.value );
		if ($('#amount1').val() == 1) {
			$('#smiley11 img').addClass('opacitehaute');
			$('#smiley11 img').removeClass('opacitebasse');
			$('#smiley12 img' , '#smiley13 img' , '#smiley14 img' , '#smiley15 img' , '#smiley16 img' , '#smiley17 img').addClass('opacitebasse');
			$('#smiley12 img' , '#smiley13 img' , '#smiley14 img' , '#smiley15 img' , '#smiley16 img' , '#smiley17 img').removeClass('opacitehaute');
		}
		else if ($('#amount1').val() == 2) {
			$('#smiley12').addClass('opacitehaute');
			$('#smiley12').removeClass('opacitebasse');
			$('#smiley11 img' , '#smiley13 img' , '#smiley14 img' , '#smiley15 img' , '#smiley16 img' , '#smiley17 img').addClass('opacitebasse');
			$('#smiley11 img' , '#smiley13 img' , '#smiley14 img' , '#smiley15 img' , '#smiley16 img' , '#smiley17 img').removeClass('opacitehaute');
		}
		else if ($('#amount1').val() == 3) {
			$('#smiley13').addClass('opacitehaute');
			$('#smiley13').removeClass('opacitebasse');
			$('#smiley12 #smiley11 #smiley14 #smiley15 #smiley16 #smiley17').addClass('opacitebasse');
			$('#smiley12 #smiley11 #smiley14 #smiley15 #smiley16 #smiley17').removeClass('opacitehaute');
		}
		else if ($('#amount1').val() == 4) {
			$('#smiley14').addClass('opacitehaute');
			$('#smiley14').removeClass('opacitebasse');
			$('#smiley12 #smiley13 #smiley11 #smiley15 #smiley16 #smiley17').addClass('opacitebasse');
			$('#smiley12 #smiley13 #smiley11 #smiley15 #smiley16 #smiley17').removeClass('opacitehaute');
		}
		else if ($('#amount1').val() == 5) {
			$('#smiley15').addClass('opacitehaute');
			$('#smiley15').removeClass('opacitebasse');
			$('#smiley12 #smiley13 #smiley14 #smiley11 #smiley16 #smiley17').addClass('opacitebasse');
			$('#smiley12 #smiley13 #smiley14 #smiley11 #smiley16 #smiley17').removeClass('opacitehaute');
		}
		else if ($('#amount1').val() == 6) {
			$('#smiley16').addClass('opacitehaute');
			$('#smiley16').removeClass('opacitebasse');
			$('#smiley12 #smiley13 #smiley14 #smiley15 #smiley11 #smiley17').addClass('opacitebasse');
			$('#smiley12 #smiley13 #smiley14 #smiley15 #smiley11 #smiley17').removeClass('opacitehaute');
		}
		else if ($('#amount1').val() == 7) {
			$('#smiley17').addClass('opacitehaute');
			$('#smiley17').removeClass('opacitebasse');
			$('#smiley12 #smiley13 #smiley14 #smiley15 #smiley16 #smiley11').addClass('opacitebasse');
			$('#smiley12 #smiley13 #smiley14 #smiley15 #smiley16 #smiley11').removeClass('opacitehaute');
		}
		}
	});
		$("#amount1").val($("#slider1").slider("value"));

	$("#slider2").slider({
		orientation: "horizontal",
		value:4,
		min: 1,
		max: 7,
		step: 1,
		range: "min",
		slide: function( event, ui ) {
		$("#amount2").val(ui.value );
		}
	});
		$("#amount2").val($("#slider2").slider("value"));
});







