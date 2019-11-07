//creation of a random number
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6


//associate a random dice image to a random number via concatenation
var randomDiceImage = "dice" + randomNumber1 + ".png"; //string from dice1.png to dice6.png

var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

//change the source attribute of the element
var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);



 
//second dice image
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

//change title according to the result
//If Player 1 wins
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins! 🤑";
}

else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🤑"; 

}

else{
    document.querySelector("h1").innerHTML = "It's a draw! 🙃";
}