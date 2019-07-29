const $pepperoni = document.querySelector(".pepperoni");
const $olives = document.querySelector(".olives");
const $sausage = document.querySelector(".sausage");


const $buttons = document.querySelectorAll(".button");


const $sizeSelector = document.getElementById("sizes");
const $size = document.querySelector(".sizes");

$sizeSelector.addEventListener('change', function (event) {
    $size.innerHTML = (event.target.value);
});

for (let $button of $buttons) {
    $button.addEventListener("click", function (event) {
        if (event.target.id == "pepperoni") {
            $pepperoni.classList.toggle("show");
            $button.classList.toggle("checked");
        } else if (event.target.id == "olives") {
            $olives.classList.toggle("show");
            $button.classList.toggle("checked");
        } else {
            $sausage.classList.toggle("show");
            $button.classList.toggle("checked");
        }
    });
}
