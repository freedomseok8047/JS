// alert("1");
const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");
const h1 = document.querySelector(".container h1");
// img1.setAttribute("src", "images/dice6.png");
// img2.setAttribute("src", "images/dice1.png");

function getRandomNumber1() {
  return Math.floor(Math.random() * 6) + 1;
}
function getRandomNumber2() {
  return Math.floor(Math.random() * 6) + 1;
}

let x = getRandomNumber1();
let y = getRandomNumber2();

img1.setAttribute("src", `images/dice${x}.png`);
img2.setAttribute("src", `images/dice${y}.png`);

if (x > y) {
  h1.innerText = "🚩Player1 Wins!";
} else if (x < y) {
  h1.innerText = "Player2 Wins!🚩";
} else {
  h1.innerText = "Draw!";
}
