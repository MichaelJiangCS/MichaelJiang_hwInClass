const buttonA = document.getElementById('buttonA');
const hideA = document.getElementById("hideA");
const divA = document.getElementById("divA");


hideA.addEventListener("click", (e)=> {
    divA.style.display = "none";
});

buttonA.addEventListener("click", (e)=> {
    divA.style.display = "initial";
});