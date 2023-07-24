const panels = document.querySelectorAll(".panel");

// for( let i = 0; i < panels.length; i++ ) {
//     panels[i].addEventListener()
// }
panels.forEach(function (panel) {
  panel.addEventListener("click", function () {
    console.log(panel);
    // 모든 패널에서 active 클래스를 제거하기
    removeActiveClass();
    panel.classList.add("active");
  });
});

function removeActiveClass() {
  // 패널에 있는 모든 액티브 클래스를 제거한다.
  //   panels[0].classList.remove("active");
  //   panels[1].classList.remove("active");
  //   panels[2].classList.remove("active");
  //   panels[3].classList.remove("active");
  //   panels[4].classList.remove("active");

  // for (let i = 0; i < panels.length; i++) {
  //  panels[i].classList.remove("active");
  // }

  panels.forEach(function (p) {
    p.classList.remove("active");
  });
  //   질문) panels의 lenth를 자동으로 인식?
  //   질문) indexing 가능? ex) p[0], p[1].....
  //  질문) 요소전체 반복일때만 사용가능?
}
