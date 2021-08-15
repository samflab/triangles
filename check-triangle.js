const angleA = document.querySelector("#first-angle");
const angleB = document.querySelector("#second-angle");
const angleC = document.querySelector("#third-angle");
const checkTriangleBtn = document.querySelector("#check-triangle");

const output = document.querySelector("#angles-result");

checkTriangleBtn.addEventListener("click", function(){
    //let flag = 1;
    var allAngles = Number(angleA.value) + Number(angleB.value) + Number(angleC.value);
    //console.log(allAngles);
    if(allAngles === 180){
        output.innerHTML= "It is a triangle";
    }
    else{
        output.innerHTML="It is NOT a triangle";
    }
});