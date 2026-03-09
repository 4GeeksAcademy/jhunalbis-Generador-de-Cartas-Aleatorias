import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let suits = ["♦", "♥", "♠", "♣"];
  let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

  let randomSuitIndex = Math.floor(Math.random() * suits.length);
  let randomValueIndex = Math.floor(Math.random() * values.length);

  let finalSuit = suits[randomSuitIndex];
  let finalValue = values[randomValueIndex];

  document.getElementById("top-suit").innerHTML = finalSuit;
  document.getElementById("number").innerHTML = finalValue;
  document.getElementById("bottom-suit").innerHTML = finalSuit;

  if (finalSuit === "♥" || finalSuit === "♦") {
    document.getElementById("card-container").style.color = "red";
};
}