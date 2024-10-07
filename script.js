document.addEventListener('DOMContentLoaded', function () {
    const answers = {
        q1: "a",
        q2: "a",
        q3: "b",
        q4: "b"
    };

    let currentQuestion = 1;
    let score = 0;

    const nextButton = document.getElementById('nextButton');
    const resetButton = document.getElementById('resetButton');
    const quizForm = document.getElementById('quizForm');

    nextButton.addEventListener('click', function () {
        const form = document.forms["quizForm"];
        const selectedAnswer = form[`q${currentQuestion}`];

        
        if (!selectedAnswer || !selectedAnswer.value) {
            alert("Please select an answer before proceeding.");
            return;
        }

        
        if (selectedAnswer.value === answers[`q${currentQuestion}`]) {
            score++;
        }

       
        document.getElementById(`question${currentQuestion}`).style.display = 'none';

        currentQuestion++;
        if (currentQuestion <= 4) {
            document.getElementById(`question${currentQuestion}`).style.display = 'block';
        } else {
            displayResults();
        }
    });

    resetButton.addEventListener('click', function () {
        resetQuiz();
    });

    function displayResults() {
        quizForm.style.display = 'none';
        let result = `<p>Your Score: ${score}/4</p>`;
        result += "<h3>Correct Answers:</h3>";
        result += "<p>1. HTML stands for: HyperText Markup Language</p>";
        result += "<p>2. CSS stands for: Cascading Style Sheets</p>";
        result += "<p>3. JavaScript was created in: 1995</p>";
        result += "<p>4. JavaScript runs in a web browser</p>";

        document.getElementById('result').innerHTML = result;

        
        resetButton.style.display = 'block';
    }

    function resetQuiz() {
       
        score = 0;
        currentQuestion = 1;

        
        document.getElementById('result').innerHTML = '';
        quizForm.style.display = 'block';
        quizForm.reset();

        
        resetButton.style.display = 'block';
        nextButton.style.display = 'block';

        
        document.getElementById('question1').style.display = 'block';
        document.getElementById('question2').style.display = 'none';
        document.getElementById('question3').style.display = 'none';
        document.getElementById('question4').style.display = 'none';
    }
});
