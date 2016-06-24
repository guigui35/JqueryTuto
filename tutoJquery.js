$(function() {
	$("h1").html('Hello world. Ce texte est affiché par jQuery.');
	
	$("#btn1").click(function(){
		
	});
	
	$("#btn2").click(function(){
		var divVert=$("#divVert");
	    divVert.toggle({
	        opacity: '0.5',
	        fontSize: '100px'
	    });
	});

	$("#btn3").click(function(){
		$("#divBleu").fadeToggle(1000);
	});




	$("#flip").click(function(){
    	$("#panel").slideToggle();
	});

	$("input").focus(function(){
	    $(this).css("background-color", "#4caf50");
	});

    $("input").blur(function(){
        $(this).css("background-color", "#ffffff");
    });

	$( "h2" ).hide();
	$( ".testselect" ).select(function() {
		$( "h2" ).fadeIn(1000);
	});

	$( "select" ).change(function () {
    	var str = "";
    	$( "select option:selected" ).each(function() {
      		str += $( this ).text() + " ";
    	});
    	$( "#couleur" ).text( str );
	}).change();


	$("#btnhideshow").click(function(){

	});

	$("#btnfadeIn").click(function(){

	});

	$("#btnfadeOut").click(function(){

	});

	$("#btnfadeToggle").click(function(){

	});

	$("#btnslide").click(function(){

	});

	$("#btnanimate").click(function(){

	});

	$("#btnstop").click(function(){

	});

	$("#btncallback").click(function(){

	});
	
	$("#btnchaining").click(function(){

	});

	// $("#fadeIn").toggle();


	// $("#hide_show").hide(5000).show(5000);

	// $("#fadeIn").fadeIn(5000);

	// $("#fadeOut").fadeOut(5000);

});




