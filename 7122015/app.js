$(document).ready(function() {
    $('#new-text').on('keypress', function (event) {
   		if(event.keyCode == 13) { //sélectionne quand on clique sur entrée
    	event.preventDefault(); // enlève l'actualisation par défaut de la page
        var aAjouter = $('#new-text').val();
        $('.corps').append('<li class="ligne"><input class="check" type="checkbox">'+ aAjouter + '<button class="ferme">X</button></li>');
    	$('#new-text').val('');
		}
	});
});
 $('.list').on('click', '.check', function() {
    $(this).parent().toggleClass('barre');
  }); // cocher pour barrer une ligne .

 $('.list').on('click', '.ferme', function () {
 	$(this).parent().remove()
 }); // Supprimer la ligne en cliquant sur le bouton

$('.add').on('click', function() {
	$('.ligne').show('slow');
});
$('.clearc').on('click', function() {
	$('.barre').remove();
});
$('.active').on('click', function() {
	$(':checked').parent().removeClass('hide');
	$('input:checkbox:not(:checked)').parent().addClass('hide');
});
$('.completed').on('click', function() {
	$('input:checkbox:not(:checked)').parent().removeClass('hide');
	$(':checked').parent().addClass('hide');
});
