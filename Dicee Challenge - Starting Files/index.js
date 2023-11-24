var randomNumber1 = Math.floor( 6 * Math.random() + 1);
var randomDiceImg1 = "images/dice" + randomNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randomDiceImg1);

var randomNumber2 = Math.floor( 6 * Math.random() + 1);
var randomDiceImg2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomDiceImg2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player1 is winnner!";
}
else if( randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player2 is winnner!";
}
else{
    document.querySelector("h1").innerHTML = "It's a tie.";
}
