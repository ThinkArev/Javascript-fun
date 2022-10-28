const request = require("request");
//request is a npm package
const url =
  "http://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=32845785ef2e9fa3d05817058690203d&units=metric";
//metric used here to get temperature in celcius.
request(
  {
    url: url,
    json: true,
  },
  (error, response) => {
    // var data = JSON.parse(response.body); dont need to use it as json sets to true

    console.log(
      `${response.body.weather[0].description}. It is currently ${response.body.main.temp} degrees out.It feels like ${response.body.main.feels_like} degress out.`
    );
  }
);

//geocoding
//adress -> lang/lon -> weather

// Goal : Print the lat/long for Los Angeles.
const geoCodeURL =
  "http://api.positionstack.com/v1/forward?access_key=6b93bbab0c69fdbe22ddf6dec243894a&query=1600%20Pennsylvania%20Ave%20NW,%20Washington%20DC";

request({ url: geoCodeURL, json : true }, (error, response) => {
    const longitude = response.body.data[0].longitude;
    const latitude = response.body.data[0].latitude;
    console.log(`${longitude}, ${latitude}`);
});