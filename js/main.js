window.onload = function () {
  // hamburgerクリック
  const setHamOpen = document.querySelector(".hamburger");
  const setOpen = document.querySelectorAll(".setHam");
  setHamOpen.addEventListener("click", function () {
    setOpen.forEach(function (e) {
      e.classList.toggle("open");
    });
  });
  // maskクリック
  const maskClose = document.querySelector(".mask");
  maskClose.addEventListener("click", function () {
    setOpen.forEach(function (e) {
      e.classList.toggle("open");
    });
  });
};
//Topに戻る
