var dog, happyDog,dogimg,happyDogimg;
var foodS, foodStock;
var database;
var sadDog;
var fedTime,lastFed,feed,addFood,foodObj;

function preload() {
dogimg = loadImage('images/dogImg.png');
happyDogimg = loadImage('images/dogImg1.png');
}

function setup() {
  createCanvas(1000, 400);
  database = firebase.database();
  dog = createSprite(250,250,10,10);
  dog.addImage("dog",dogimg);
  dog.scale = 0.25;
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
  feed = createButton("Feed the dog");
  feed.position(700,95);
  feed.mousePressed(addFoods);

}


function draw() {  
background(250,250,250);
if (keyWentDown(UP_ARROW)) {
  writeStock(foodS);
  dog.addImage("happpyDog",happyDog);
}
fedTime = database.ref('FeedTime');
fedTime.on("value",function(data) {
  lastFed = data.val();
});
fill(255,255,254);
textSize(15);
if (lastFed>=12) {
  text("Last Feed : " + lastFed%12 + "PM", 350,30);
}
else if(lastFed==0) {
  text("Last Feed : 12 AM",350,30);
}
else {
  text ("Last Feed :"+ lastFed + "AM",350,30);
}
  drawSprites();
  
}

function readStock(data) {
  foods-data.val();
}

function writeStock(x) {
database.ref('/').update({
  Food:x
})
}

function feedDog() {
  dog.addImage(happyDog);

foodObj.updateFoodStock(foodObj.getFoodStock()-1);
database.ref('/').update({
  Food:foodObj.getFoodStock(),
  FeedTime:hour()
})
}

function addFoods() {
  foodS++;
  database.ref('/').update({
    Food:foodS
  })
}



