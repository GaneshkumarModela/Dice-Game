//Randomizing first dice image

var randomNumber1 = Math.random();
randomNumber1 = randomNumber1 * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;

// We are generating random dice images  using the random number 
// we have generated

var randomDiceImage = "dice" + randomNumber1 +".png"; //dice1.png - dice6.png
var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png


var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);



//Randomizing second dice image

var randomNumber2 = Math.random();
randomNumber2 = randomNumber2 * 6;
randomNumber2 = Math.floor(randomNumber2) + 1;

var randomDiceImage2 = "dice" + randomNumber2 +".png"; //dice1.png - dice6.png
var randomImageSource2 = "images/" + randomDiceImage2; //images/dice1.png - images/dice6.png

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);

//Displaying who wins

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent = "🚩play1 Wins!";
}
    

else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").textContent = "play2 Wins!🚩";
}
    
else{
    document.querySelector("h1").textContent = "Draw!🤦‍♂️";

}
    
    

    

   
  


