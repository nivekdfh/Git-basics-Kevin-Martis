function getCityFromInput(){
	const inputValue = document.getElementById('landen').value

	getWeather(inputValue)
	getAPIdata(inputValue)
}

// OpenWeather API

function getWeather(value){
	if (!value) return;

	var url = "https://api.openweathermap.org/data/2.5/weather";
	var apiKey ="d20e35ea80ee4c5556b7c44153f15960";
	var name = value;

	var request = url + "?" + "appid=" + apiKey + "&" + "q=" + name;
	
fetch(request)
	
	.then(function(response) {
		if(!response.ok) throw Error(response.statusText);
		return response.json();
	})

	
	.then(function(response) {
		onWeatherSucces(response);	
	})
	
	.catch(function (error) {
		onWeathererror(error);
	});
}

function onWeatherError(error) {
	console.error('Request failed', error);
	var weatherBox = document.getElementById('weather');
	weatherBox.className = 'hidden'; 
}

function onWeatherSucces(response) {

	var cityName = response.name;

	var degC = Math.floor(response.main.temp - 273.15);

	var type = response.weather[0].description;

	var weatherBox = document.getElementById('weer');
	weatherBox.innerHTML =  cityName + ' <br>'  +  type+ ' <br>' + degC + "&#176;C ";
	
	const coords = [response.coord.lon, response.coord.lat]

	// MapBox	
	mapboxgl.accessToken = 'pk.eyJ1Ijoibml2ZWtkZmgiLCJhIjoiY2wzNG05NHh5MDJkNjNqcDZkMjN1emd0eCJ9.khb1mRuVX992Nl1aNFFVzA';
	const map = new mapboxgl.Map({
		container: 'map',
		style: 'mapbox://styles/mapbox/streets-v11',
		center: coords,
		zoom: 9
});
}

// BierBrouwers API

function getAPIdata(value) {
	if (!value) return;
	
	var url = "https://api.openbrewerydb.org/breweries";
	var name = value;
	
	var request = url + "?" + "appid=" + "&" + "q=" + name;
	
	fetch(request)
	
	.then( function(response) {
		if(!response.ok) throw Error(response.statusText);
		return response.json();
	})
	.then(function(response) {
		onAPISucces(response);
	})
	
	.catch(function (error) {
		onAPIError(error);
	});
}

function onAPIError(error) {
	console.error('Request failed', error);
	var breweryBox = document.getElementById('brewery');
	breweryBox.className = 'hidden'; 
}

function onAPISucces(response) {
	console.log( brewery );
	var brewery = response[5];

	var breweryName = brewery.name;
	console.log(breweryName);

	var breweryStreet = brewery.street;
	console.log(breweryStreet);

	var breweryCity = brewery.city;
	console.log(breweryCity);

	var breweryZip = brewery.postal_code;
	console.log(breweryZip);

	var breweryWeb = brewery.website_url;
	console.log(breweryWeb);

	var breweryPhone = brewery.phone;
	console.log(breweryWeb);

	var breweryBox= document.getElementById('brewery');
	breweryBox.innerHTML = (breweryName || '') 
							+ '<br>' + (breweryStreet||'')
							+ '<br>' + (breweryCity||'')
							+ '<br>' + (breweryZip||'')
							+ '<br>' + (breweryPhone||'')
							+ '<br><a href='+ (breweryWeb||'') + '>'
							+ (breweryWeb||'') + '</a>';
}
