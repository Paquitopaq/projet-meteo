
//"http://www.infoclimat.fr/public-api/gfs/json?_ll=48.85341,2.3488&_auth=UkheSVUrBCZSf1ZhAHYFLAJqAjcPeQMkAn4KaV86Ui8HbFY3VjYAZl4wWyYGKQE3UXwAYwE6ADALYAF5WCpQMVI4XjJVPgRjUj1WMwAvBS4CLAJjDy8DJAJoCm9fLFIwB2xWNlYrAGteOFsnBjABNlF9AH8BPwA%2FC2gBZ1g9UDtSMV46VTIEZFIiVisANgU0AjYCYg9hAzsCNAo8X2NSZQdsVmNWYQBkXi9bOwY0ATBRYQBkATgAOAtrAXlYKlBKUkJeJ1V2BCRSaFZyAC0FZAJvAjY%3D&_c=9035e9f7d80d11df318b74fd64e78c46";

var cityHtml = document.querySelector(".city");


var testButton = document.querySelector("btn");

//Appel API OpenWeather et transformation en format JSON
async function showData(){
    
    const confJson = await jsonFile();
    const cityName = confJson.city;
    const apiKey = confJson.apiKey;
    

    const urlApi = "https://api.openweathermap.org/data/2.5/weather?q="
    + cityName 
    +"&appid="
    + apiKey
    
    const apiReponse = await fetch(urlApi);
    const dataOpenWeather = await apiReponse.json();

    console.log(dataOpenWeather);
    alert("it worked");
}

//Permet le chargement du fichier Json
async function jsonFile() {
    const confResponse = await fetch("conf.json");
    return await confResponse.json();
}