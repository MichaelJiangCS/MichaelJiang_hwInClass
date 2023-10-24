const buttonA = document.getElementById('buttonA');
const hideA = document.getElementById("hideA");
const divA = document.getElementById("divA");

//buttonA.addEventListener("click", (e)=> {
//    document.getElementById('imageA').style.display="block";
//});


hideA.addEventListener("click", (e)=> {
    divA.style.visibility = "none";
});