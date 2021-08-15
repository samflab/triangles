const quizForm = document.querySelector(".quiz-form");
const submitQuizBtn = document.querySelector("#submit-quiz");
const outputDiv = document.querySelector("#quiz-output");

const correctAnswers = ["right","equilateral"];

function calculateScore(){
    let score = 0;
    let index = 0;
    const formResults = new FormData(quizForm);
    for(let value of formResults.values()){
        if(value === correctAnswers[index])
            score++;
        
        index++;
    }
    
    console.log(score);
    outputDiv.innerHTML ="Your Score is: " + score;
}

submitQuizBtn.addEventListener("click", calculateScore);