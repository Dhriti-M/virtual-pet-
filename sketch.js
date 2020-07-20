//Create variables here
var dog, happyDog, database, foodS, FoodStock;
function preload()
{
  //load images here
  dog_img=loadImage("images/dog.png");
  happydog_img=loadImage("images/happydog.png");
  

 
  
}

function setup() {
  createCanvas(500, 500);
  background(46,139,87);
  
  database=firebase.database();
  
  dog=createSprite(200,200,10,10);
  dog.addImage(dog_img);

  Foodstock=database.ref("food");
  Foodstock.on("value",readStock);

}


function draw() {  

  

  if(keyWentDown(UP_ARROW)){
   writeStock(foodS);
   dog.addImage(happydog_img);
  }

  if(keyWentup(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dog_img);
   }


   drawSprites();
    
   text("FoodStock" + foodS,100,100);
   text("Press UP_ARROW key to feed Drago Milk!!",100,150);


  //add styles here

}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  database.ref('/').update({
    /*if(x<= 0){
      x=0;
    }
    else{
      x=x-1;
    }*/
    
    Food:x
             })
}



