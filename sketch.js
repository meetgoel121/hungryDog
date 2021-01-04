//Create variables here
var happyDog,dog,database,foodStock,foodS
function preload()
{dogImg1=loadImage("images/dogImg.png")
dogImg2=loadImage("images/dogImg1.png")
  //load images here
  
}

function setup() {
  database=firebase.database()
	createCanvas(500, 500);
  dog=createSprite(250,300,150,150)
dog.addImage(dogImg1)
dog.scale=0.2
//foodStock
foodStock=database.ref('Food');
foodStock.on("value",readStock)
}


function draw() {  
background(46,139,87)
  drawSprites();
  //add styles here
if(keyWentDown(UP_ARROW)){
writeStock(foodS);
dog.addImage(dogImg2)

}
fill("black")
stroke("black")
text("food remaining: "+foodS,170,200)

}
function readStock(data){
  foodS=data.val();

}

function writeStock(x){

if(x<=0){
  x=0;
}else{
  x=x-1;
}


database.ref('/').update({

})

}



