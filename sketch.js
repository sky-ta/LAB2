var weather;
var wea="";
var clock;
var number = 0;
var temp;
var humidity;
var description;

//images:
var nymorning;
var sun;

//color:
var r, g, b;

function preload() {
  // Get the most recent earthquake in the database
let apiKey = 'f8058d380a416701bba86ce105de8fc9';
let city = 'newyork';
let url = `https://api.openweathermap.org/data/2.5/forecast?id=5128638&units=imperial&APPID=${apiKey}`;
  weather = loadJSON(url);


}
	

function setup() {
  //noLoop();
  createCanvas(900, 600);
  //Images: not loading for some reasons
  nymorning = loadImage("./assets/nymorning2.jpg");
  sun = loadImage ("./assets/sun.png");

  console.log(weather); 
  //println(url);
}

function draw() {
  background(234, 237, 236);
  image(nymorning, 0,0, 600, 400);
  image(sun);
  //console.log(url);
 	//background(100 + sin(frameCount * 0.05) * 50, 100 + sin(frameCount * 0.06) * 50, 100 + sin(frameCount * 0.07) * 50);
  	getWeather(number);
  	textFont('Verdana');
  	textSize(30); 
    //textAlign(CENTER, CENTER);
    fill(189, 147, 226);
    text("New York City", 50, 50);
    textSize(20); 
    fill(188, 210, 255);
    
    //Printing out the info from function getWeather(i):
   //text(clock, width/2, height/2 - 100);
  	// text(wea, width/2, height/2 - 40);
    text(description, 50, 100);
    //TEMP:
    fill(0);
    text ("Temperature:", 100, 170);
    textSize(15); 
    text(temp, 130 + temp*5, 230);
    fill(242, 232, 184);
    rect(100, 200, temp*5, 30);

    //HUMIDITY:
    fill(0);
    textSize(20);
    text ("Humidity:", 100, 270);
    textSize(15); 
    text(humidity, 130 + humidity*5, 330);
    fill(220, 239, 247);
    rect(100, 300, humidity*5, 30);




}

function getWeather(i){
	wea = weather.list[i].weather[0].main;
	//clock = weather.list[i].dt_txt;
	temp = weather.list[i].main.temp;
  description = weather.list[i].weather[0].description;
  humidity = weather.list[i].main.humidity;
	//console.log(description);
}

//function mouseClicked(){
	// if(button<39){
	// 	button++;
	// }

//}
