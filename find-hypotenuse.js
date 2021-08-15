const base = document.getElementById("base");
const perpendicular = document.getElementById("perpendicular");
const getHypotenuse = document.getElementById("get-hypotenuse-btn");

const outputDiv = document.getElementById("hypotenuse-result");

getHypotenuse.addEventListener("click", function(){
    let c = Math.sqrt((Number(base.value) * Number(base.value)) + (Number(perpendicular.value) * Number(perpendicular.value))); 
    console.log(base.value, " ", perpendicular.value);
    outputDiv.innerHTML="c = "+c;
});