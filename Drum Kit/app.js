const btn1 = document.querySelector("button");
const btns = document.querySelectorAll("button");

// btn1.addEventListener(이벤트종류, 실행함수)
// btn1.addEventListener("click", function () {
//   alert("클릭됨");
// });
// function handleClick() {
//   alert("클릭됨!");
// }

// btns[0].addEventListener("click", function () {
//     alert("클릭됨");
//   });
//   btns[1].addEventListener("click", function () {
//     alert("클릭됨");
//   });
//   btns[2].addEventListener("click", function () {
//     alert("클릭됨");
//   });       >>>>>>>>>>>>> 반복싫어서 반복문 사용

// .length 배열갯수 모를 때 유용하게 쓴다.
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function (e) {
    const key = e.target.textContent;
    console.log(key);
    // 내가 클릭한 드럼의 글자색을 흰색으로 변경
    e.target.style.color = "white";
    // 내가 클릭한 드럼의 소리를 냄!
    drumPlay(key);
  });
}

document.addEventListener("keydown", function (e) {
  const key = e.key;
  drumPlay(key);
});

function drumPlay(key) {
  if (key == "w") {
    const audio = new Audio("sounds/tom-1.mp3");
    audio.play;
  } else if (key == "a") {
    const audio = new Audio("sounds/tom-2.mp3");
    audio.play();
  } else if (key == "s") {
    const audio = new Audio("sounds/tom-3.mp3");
    audio.play();
  } else if (key == "d") {
    const audio = new Audio("sounds/tom-4.mp3");
    audio.play();
  } else if (key == "j") {
    const audio = new Audio("sounds/snare.mp3");
    audio.play();
  } else if (key == "k") {
    const audio = new Audio("sounds/crash.mp3");
    audio.play();
  } else if (key == "l") {
    const audio = new Audio("sounds/kick-base.mp3");
    audio.play();
  }
}

// const audio = new Audio("sounds/tom-1.mp3");
// switch (key) {
//   case "w":
//     const audio = new Audio("sounds/tom-1.mp3");
//     audio.play();
//   case "a":
//     const audio = new Audio("sounds/tom-2.mp3");
//     audio.play();
//   case "s":
//     const audio = new Audio("sounds/tom-3.mp3");
//     audio.play();
//   case "d":
//     const audio = new Audio("sounds/tom-4.mp3");
//     audio.play();
//   case "j":
//     const audio = new Audio("sounds/snare.mp3");
//     audio.play();
//   case "k":
//     const audio = new Audio("sounds/crash.mp3");
//     audio.play();
//   case "l":
//     const audio = new Audio("sounds/kick-base.mp3");
//     audio.play();
// }

// const audio = new Audio("sounds/tom-1.mp3");
// audio.play();
