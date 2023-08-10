let burger = document.getElementById("burgerID");
let category = document.querySelectorAll(".categories");
let showCategory = false;

burger.addEventListener("click", function () {
    showCategory = !showCategory;
    if (showCategory) {
        category.forEach(function (button) {
            button.classList.add("show");

        });
    }
    else {
        category.forEach(function (button) {
            button.classList.remove("show");

        });
    }
});