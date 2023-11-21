
var w = window.innerWidth;
var h = window.innerHeight;  

var weather;
var api = "https://api.openweathermap.org/data/2.5/weather?";
var units = "&units=imperial";
var APIkey = "&appid=ca7caccfa515826d1bc1bc37590f135b";

var stars = [];
var speed = 2;

//api var

var temp;
var speed;
var humidity;
var pressure;
var modPressure;

var input; // Declare input variable
let t = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  //create starts
  for (var i = 0; i < 300; i++) {
    stars[i] = new Star();
  }

  // Create an input element and position it at the bottom of the canvas
  input = createInput();
  input.position(20, height + 20);

  // Create a button to trigger the weatherAsk function
  var button = createButton("Input Location");
  button.position(input.x + input.width + 10, height + 20);
  button.mousePressed(weatherAsk);

  // Call the weatherAsk function initially with the default input value
  // weatherAsk();
}

function weatherAsk() {
  var url = api + "q=" + input.value() + APIkey + units;
  loadJSON(url, gotData);
}

function gotData(data) {
  // also set variables
  console.log(data);
  weather = data;

  // establish global variables
  temp = weather.main.temp;
  feelsLike = weather.main.feels_like;
  speed = weather.wind.speed;
  humidity = weather.main.humidity;
  clouds = weather.clouds.all;
  pressure = weather.main.pressure;
  modPressure = (pow((pressure - 900), 3))
}

function draw() {
  background("#fff");
  translate(width / 2, height / 2);
  stroke("#0f0f0f");
  strokeWeight(1);

  for (var i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show();
  }
  
  if (weather) {

    var color = colorFunction(temp);
    colorMode(HSB);
    stroke(color, 100, 100);

    console.log(color)

    for (let i = 0; i < humidity * 2; i++) { // how many lines are generated
      line(x1(t + i), y1(t + i), x2(t + i) + feelsLike, y2(t + i) + feelsLike);
    }

    t += 0.05 * speed;

    // colorUpdate();
  
  }
}

function x1(t) {
  return sin(t / 10) * (pressure - 950);
}

function y1(t) {
  return cos(t / 10) * (pressure - 950);
}

function x2(t) {
  return sin(t / 15) * modPressure + sin(t / 25) * modPressure + sin(t / 35) * modPressure;
}

function y2(t) {
  return cos(t / 15) * modPressure + cos(t / 25) * modPressure + cos(t / 35) * modPressure;
}
