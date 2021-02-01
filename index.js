var randomNumber1 = Math.floor((Math.random() * 6)+1);
var randomImage1 = "dice" + randomNumber1 + ".png";
var randomImageSource1 = "images/" + randomImage1;
var image1 = document.querySelector(".img1");
image1.setAttribute("src", randomImageSource1);

var randomNumber2 = Math.floor((Math.random() * 6)+1);
var randomImage2 = "dice" + randomNumber2 + ".png";
var randomImageSource2 = "images/" + randomImage2;
var image2 = document.querySelector(".img2");
image2.setAttribute("src", randomImageSource2);

var h1Text = document.querySelector("h1");
if(randomNumber1 > randomNumber2){
  h1Text.innerHTML = "Player 1 wins!🚩"
}
else if(randomNumber2 > randomNumber1){
  h1Text.innerHTML = "Player 2 wins!🚩"
}
else if(randomNumber1 === randomNumber2){
  h1Text.innerHTML = "Draw!🤝";
}
