$(sélecteur).action();

$("p").hide(); // cache tous les éléments <p> du docuement html associé

$(".test").hide(); // cache tous les éléments dont la classe est "test"

$("#test").hide(); // cache l'élément dont l'id est "test"


$("*") // Sélectionne tous les éléments
$(this) // Sélectionne l'élément html courant
$("p.intro") // Sélectionne tous les éléments <p> dont la classe est "intro"
$("p:first") // Sélectionne le premier élément <p>
$("ul li:first") // Sélectionne le premier élément <li> du premier <ul>
$("ul li:fist-child") // Sélectionne le premier élément <li> de tous les <ul>
$("[href]") // Sélectionne tous les éléments avec un attribut href
$("a[target='blank']") // Sélectionne tous les éléments <a> dont la valeur de
					   // l'attribut target est égale "_blank"
$("a[target!='blank']") // Sélectionne tous les éléments <a> dont la valeur de
						// l'attribut target n'est PAS égale à "_blank"
$(":button") // Sélectionne tous les éléments <button> et les éléments <input> de type = "button"
$("tr:even") // Sélectionne tous les éléments <tr> pairs (odd pour impairs)