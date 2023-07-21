// alert(1);
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.querySelector("body");

function handleClick() {
  console.log("클릭했네!");
}
function handleChange() {
  let c1 = color1.value;
  let c2 = color2.value;

  body.style.background = `linear-gradient(to right, ${c1}, ${c2})`;
}
