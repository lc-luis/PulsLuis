var geo = navigator.geolocation;
var geoOpciones = {};

function geoError(){
	console.log('No se donde estas');
};
function geoExito(posicion){
	var lat  = posicion.coords.latitude;
	var lon  = posicion.coords.longitude;
	var mapa = new Image();
	mapa.src = "http://maps.googleapis.com/maps/api/staticmap?zoom=12&size=200x200&sensor=false&center=" + lat + "," + lon;
	$('#geo').append(mapa);

	obtenerGeoInformacion(lat, lon);
};

geo.getCurrentPosition(geoExito, geoError, {
	enableHightAccuracy: true,
	timeout: 5000,
	maximumAge: 0
});
