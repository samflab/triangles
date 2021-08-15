const quizForm = document.querySelector(".quiz-form");
const submitQuizBtn = document.querySelector("#submit-quiz");
const quizOutputDiv = document.querySelector("#quiz-output");

const correctAnswers = ["right", "equilateral", "acute", "2 congruent sides", "180 degrees"];

function calculateScore(){
    let score = 0;
    let index = 0;
    const formResults = new FormData(quizForm);
    for(let value of formResults.values()){
        if(value === correctAnswers[index])
            score++;
        
        index++;
    }
    
    //console.log(score);
    quizOutputDiv.innerHTML ="Your Score is: " + score;
}

submitQuizBtn.addEventListener("click", calculateScore);