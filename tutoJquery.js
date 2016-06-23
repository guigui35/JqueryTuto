$(function() {
	$("h1").html('Hello world. Ce texte est affiché par jQuery.');
	$("#btn1").click(function(){
		$("p").toggle(200);
	});
	$("#btn2").click(function(){
		var div1=$("#div1");
		$("#div3").fadeToggle(1000);
	    div1.toggle({
	        opacity: '0.5',
	        fontSize: '100px'
	    });

	});
	$("#flip").click(function(){
    	$("#panel").slideToggle();
	});	

});




