function inicio(){
	var botonPublicar = $('#form_submit');
	botonPublicar.click(function(e){
		e.preventDefault();
		var formulario = $('#formulario');
		var titulo = $('#form_titulo');
		var autor = $('#form_autor');

		if (titulo.hasClass("ocultar") == true)
		{
			titulo.removeClass("ocultar");
			autor.removeClass("ocultar");
		}
		else
		{
			if(titulo.val() == "")
			{
				alert("El título no puede estar vacio");
			}
			else
			{
				if(autor.val() == "")
				{
					alert("El autor no puede estar vacio");
				}
				else
				{
					var valorTitulo = titulo.val();
					titulo.val("");
					var valorAutor = autor.val();
					autor.val("");
					var texto = "<article class='item'><figure class='img_item'><img src='images/imagen.jpg' alt='pony'></figure><h2 class='titulo_item'><a href='#'>" + valorTitulo + "</a></h2><div class='autor_item'>por<a href='#'>" + valorAutor + "</a></div><div class='datos_item'><a href='#' class='tag_item'>pony</a><span class='fecha_item'>hace <strong>5</strong> min</span></div><div class='votacion'><a href='#' class='up icon-flecha-up'></a>50<a href='#' class='down icon-flecha-down'></a><a href='#' class='comentarios_item'>3</a><a href='#' class='guardar_item icon-estrella'></a></div></article>";
					titulo.addClass("ocultar");
					autor.addClass("ocultar");
					var contenedor = $("#contenido");
					contenedor.append(texto);
				}
			}
		}
	});
};