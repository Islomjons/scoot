var elBtn = document.querySelector(".header__burger-btn");
var elContainer = document.querySelector(".header__container");

elBtn.addEventListener("click", function (pramas) {
    elContainer.classList.toggle("header__container--active")
})