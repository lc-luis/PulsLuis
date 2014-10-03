$(function(){
	$.get('logos_footer.html', function(codigo){
		$('footer').append(codigo);
	});

	$.get('usuario.json', function(info){
		var info = $.parseJSON(info);
		var avatar = new Image();
		avatar.src = info.avatar;
		avatar.title = info.nombre+' '+info.edad;

		$('#avatar').append(avatar);

	});
});

var base_url = "http://query.yahooapis.com/v1/public/yql?q=";

function obtenerGeoInformacion(lat, lon){
	var query = 'SELECT * FROM geo.placefinder WHERE text="'+lat+', '+lon+'" AND gflags="R"';
	query = encodeURIComponent(query);

	$.ajax({
		url: base_url+query,
		dataType: 'jsonp',
		jsonpCallback: 'procesarGeoInfo',
		data: {
			format: 'json'
		}
	});
};

function procesarGeoInfo(datos){
	console.log(datos);
	var res = datos.query.results.Result;
	var barrio = res.neighborhood;
	var pais = res.country;
	var ciudad = res.city;
	var calle = res.line1;
	var woeid = res.woeid;

	$('#geo').prepend('<p><strong>'+calle+'</strong><br>'+barrio+'<br>'+ciudad+','+pais+'</p>');
	obtenerClima(woeid);
}

function obtenerClima(woeid){
	var query = 'SELECT * FROM weather.forecast WHERE woeid="'+woeid+'" AND u="c"';
	query = encodeURIComponent(query);

	$.ajax({
		url: base_url+query,
		dataType: 'jsonp',
		jsonpCallback: 'procesarWeatherInfo',
		data: {
			format: 'json'
		}
	});
};

function procesarWeatherInfo(datos){
	console.log(datos);
	var clima = datos.query.results.channel;
	var temp = clima.item.condition.temp;
	var code = clima.item.condition.code;
	var imgClima = new Image;
	imgClima.src = "http://l.yimg.com/a/i/us/we/52/"+code+".gif";
	$('#clima').html('<p>Temperatura actual: '+temp+' ºC </p>');
	$('#clima').prepend(imgClima);
}