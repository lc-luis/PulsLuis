// VARIABLES

var $form = $('#formulario'),
	$titulo = $('#titulo'),
	$url = $('#url'),
	$button = $('#mostrar-form'),
	$list = $('#contenido'),
	$post = $('.item').first();

// FUNCIONES

if (localStorage.getItem('autosave')){
	$titulo.val(sessionStorage.getItem('titulo'));
	$url.val(sessionStorage.getItem('url'));
}

var id = setInterval(function(){
	sessionStorage.setItem('titulo', $titulo.val());
	sessionStorage.setItem('url', $url.val());

},1000);

function mostrarFormulario(){
	$form.slideToggle();
	$list.slideToggle();
	return false;
}

function agregarPost(){
	var url = $url.val();
	var titulo = $titulo.val();
	var $clone = $post.clone();

	$clone.find('.titulo_item a').text(titulo).attr('href', url);
	$clone.hide();

	$list.prepend($clone);
	$clone.fadeIn();

	$url.val('');
	$titulo.val('');

	$form.hide().fadeOut();
	$list.slideToggle();

	return false;
}

// EVENTOS

$button.click( mostrarFormulario );
$form.on('submit', agregarPost);






