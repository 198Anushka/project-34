//Create variables here
var dog,happyDog,database,foodS,foodStock;
function preload()
{
  //load images here
  d1=loadImage("images/dogImg.png");
  d2=loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  var dog=createSprite(200,200);
  dog.addImage(d1);
  database=firebase.database;
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);

  
}


function draw() {  
 background(46,139,87);
 if(keyWentDown(UP_ARROW)){
   writeStock(foodS);
   dog.addImage(d2);
 }
  drawSprites();
  textSize(20);
  fill("green");
  stroke("white");
  text("Note:Press UP_ARROW Key To Feed Drago Milk")
  //add styles here

}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}

