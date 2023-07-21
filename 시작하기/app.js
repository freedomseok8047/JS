//  대화 상자 함수
// let age = prompt("나이를 입력해 주세요", 100);
// alert(`당신의 나이는 ${age} 입니다!`);

// let result = confirm("당신이 주인인가요?");
// alert(result);

// if 문
// let 사과 = 10,
//   바나나 = 10;

// if (사과 > 바나나) {
//   console.log("사과가 바나나보다 많습니다 .");
// } else if (사과 < 바나나) {
//   console.log("바나나가 사과보다 많습니다 .");
// } else {
//   console.log("사과와 바나나 갯수가 같습니다 .");
// }

// for (let i = 1; i <= 100; i++) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     console.log("삼삼오오");
//   } else if (i % 3 == 0) {
//     console.log("삼삼");
//   } else if (i % 5 == 0) {
//     console.log("오오");
//   } else {
//     console.log(i);
//   }
// }

// 함수 funtion
// 함수 선언
// function showMessage() {
//   alert("안녕!");
// }
// 함수 호출(실행)
// showMessage();

function showMessage() {
  let message = "안녕하세요!"; // 지역 변수

  alert(message);
}

showMessage(); // 안녕하세요!

alert(message);
