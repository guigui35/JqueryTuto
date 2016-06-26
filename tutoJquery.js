$(function() {
	

	//hide and show

	$("#btnhideshow").click(function(){
		$("#hide-show").toggle(); // Rappel : toggle alterne hide et show
	});

	// Fade

	$("#btnfadeToggle").click(function(){
		$("#fadeToggle").fadeToggle(3000);
	});

	$("#btnfadeTo").click(function(){
		$("#fadeTo").fadeTo(3000, 0.3);
	});

	//Slide

	$("#btnslideToggle").click(function(){
		$("#slidetoggle").slideToggle();
	});

	//Animate		

	$("#btnanimate").click(function(){
		$("#carré_animate").animate({left: '250px', height: '300px', width:'300px', opacity:'0.4', fontSize:'4em'},"slow");
	});

	//Stop

	$("#lanceranimtest").hide();

	$("#lancer_animation").click(function(){
		$("#lanceranimtest").slideToggle(5000);
	});		

	$("#btnstop").click(function(){
		$("#lanceranimtest").stop();
	});

	//Callback

	$("#btncallback").click(function(){
		$("#callback").fadeToggle(500, function(){
			alert("l animation est terminée");
		})
	});
	
	//Chaining

	$("#btnchaining").click(function(){
		$("#chaining").animate({left:'200px'},"slow").fadeToggle(2000);
	});

	//exemples en vrac

	$("input").focus(function(){
	    $(this).css("background-color", "#4caf50");
	});

    $("input").blur(function(){
        $(this).css("background-color", "#ffffff");
    });

	$( "h2" ).hide();
	$( ".testselect" ).select(function() {
		$( "h2" ).fadeIn(2000);
	});

	$( "select" ).change(function () {
    	var str = "";
    	$( "select option:selected" ).each(function() {
      		str += $( this ).text() + " ";
    	});
    	$( "#couleur" ).text( str );
	}).change();

	// get - text() / html()
    $("#btnshowtext").click(function(){
        alert("Text: " + $("#showtext").text());
    });
    $("#btnshowhtml").click(function(){
        alert("HTML: " + $("#showtext").html());
    });

	// get - value()
    
    $("#btnshowvalue").click(function(){
        alert("Value: " + $("#showvalue").val());
    });
	
	// get - attr()

    $("#btnshowattr").click(function(){
        alert($("#developpez").attr("id"));
    });

	// set - text() / html() / valt() / attr()

    $("#btnsettext").click(function(){
        $("#blabla1").text("A ROULEEEEEEEEEEEEEEEEEEEEEEEEEEEEEETTE");
    });
    $("#btnsethtml").click(function(){
        $("#blabla2").html("<b>Le gras, c'est la vie</b>");
    });
    $("#btnsetvalue").click(function(){
        $("#blabla3").val("la chevaliérisation");
    });

    $("#btnsetattr").click(function(){
        $("#devattr").attr("href", "http://www.hardware.fr/");
    });


    // set exemple avec un callback

    $("#btnsetcallback").click(function(){
        $("#setcallback").text(function(i, origText){
            return "texte initial: " + origText + " Nouveau texte: j'apprécie les fruits au sirop (index: " + i + ")";
        });
    });

    // add - append

    $("#btnappend").click(function(){
        $(".list1").append("<li>Appended item</li>");
    });

    // add - prepend

    $("#btnprepend").click(function(){
        $(".list1").prepend("<li>Prepended item</li>");
    });

    // add - after

    $("#btnafter").click(function(){
        $(".list1").after("<p>Paragraphe ajouté après</p>");
    });
    // add - before

    $("#btnbefore").click(function(){
        $(".list1").before("<p>Paragraphe ajouté avant</p>");
    });

    // remove

    $("#btnremove").click(function(){
        $("#emptyremove").remove();
    });

    // empty

    $("#btnempty").click(function(){
        $("#emptyremove").empty();
    });

    //toggle class css

    $("#btnaddremovecss").click(function(){
        $("#addremovecss").toggleClass("rougeEtGros");
    });


    // get ou set un attribut css

    $("#btncssreturn").click(function(){
        alert("Background color = " + $("#csssetget").css("background"));
    });

    $("#btncssset").click(function(){
        $("#csssetget").css("background", "orange");
    });

    $("#btnmultiplecssset").click(function(){
        $("#csssetget").css({"background": "blue", "width": "200px", "height": "200px"});
    });


    // dimension

    $("#btngetdimension").click(function(){
        var txt = "";
        txt += "Width of div: " + $("#dimension").width() + "</br>";
        txt += "Height of div: " + $("#dimension").height();
        $("#dimension").html(txt);
    });

    $("#btnsetdimension").click(function(){
        $("#dimension").height(200);
    });


});




