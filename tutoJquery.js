$(function() {
	$("h1").html('Hello world. Ce texte est affiché par jQuery.');
	
	$("#btn1").click(function(){
		$("p").toggle(200);
	});
	
	$("#btn2").click(function(){
		var div1=$("#div1");
	    div1.toggle({
	        opacity: '0.5',
	        fontSize: '100px'
	    });
	});

	$("#btn3").click(function(){
		$("#div3").fadeToggle(1000);
	});

	$("#flip").click(function(){
    	$("#panel").slideToggle();
	});

	$("p:first").fadeOut(2000).fadeIn(2000).fadeOut(2000).fadeIn(2000).fadeOut(2000).fadeIn(2000).fadeOut(2000).fadeIn(2000);

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


});




