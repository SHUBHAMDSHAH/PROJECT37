var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;



function setup(){
  canvas = createCanvas(displayWidth/2,displayHeight/2);
  database = firebase.database();
       
 form = new Form();
  
}
function draw(){
  form.display();
}