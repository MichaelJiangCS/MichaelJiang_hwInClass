const buttonA = document.querySelector("#buttonA");
const hideA = document.querySelector("#hideA");
const divA = document.querySelector(".divA");

const buttonB = document.querySelector("#buttonB");
const hideB = document.querySelector("#hideB");
const divB = document.querySelector(".divB")

const buttonC = document.querySelector("#buttonC");
const hideC = document.querySelector("#hideC");
const divC = document.querySelector(".divC")


//pic A
hideA.addEventListener("click", function() {
    divA.style.display = "none";
});

buttonA.addEventListener("click", function() {
    divA.style.display = "block";
});

//pic B
hideB.addEventListener("click", function() {
    divB.style.display = "none";
});

buttonB.addEventListener("click", function() {
    divB.style.display = "block";
});

//pic C
hideC.addEventListener("click", function() {
    divC.style.display = "none";
});

buttonC.addEventListener("click", function() {
    divC.style.display = "block";
});