const question = $("h2");
const answers = $(".answer");
const homeScreen = $("#home");
const gameScreen = $("#game");
const scoreScreen = $("#score");
const playBtn = $("#playBtn");
const resultP = $("#result");
const playAgainBtn = $("#playAgain");
const details = $("#details");

// $.get(url, function (question) {
//     question.first().html(JSON.stringify(question));
//     answer.last().html(answer);
// })
let questionCounter = 0;
let score = 0;
let wrongAnswers = [];

function writeQuestion(questionNumber) {
    $.ajax( {
        url: "/json/question.json",
        method: "GET",
        dataType: "json"
    })
        .done(function (response) {
            question.first().html(response[questionNumber].question);
            for (let i = 0; i < answers.length; i++) {
                answers.eq(i).html(response[questionNumber].answer[i]);
            }
        })
}


answers.click(function () {

    const userAnswer = this.innerText;

    $.ajax( {
        url: "/json/question.json",
        method: "GET",
        dataType: "json"
    })
        .done(function (response) {
            if (userAnswer === response[questionCounter].right) {
                score++;
            }
            else {
                console.log("mauvais : " + score);
                wrongAnswers.push([questionCounter, userAnswer]);
            }
            writeQuestion(questionCounter +1);
            questionCounter++;
            if (!response[questionCounter]) {
                gameScreen.css("display", "none");
                scoreScreen.css("display", "flex");
                resultP.text('Votre score est de ' + score + " / " + response.length);

                for (let wrongAnswer of wrongAnswers){
                    details.html(details.html() + "- A la question numéro " + (wrongAnswer[0]+1).toString() +
                        " vous avez répondu " + wrongAnswer[1] + "<br>" + " La bonne réponse etait : " +
                        response[wrongAnswer[0]].right + "<br>");
                }
            }
        })
})

playBtn.click(() => {
    homeScreen.css("display", "none");
    gameScreen.css("display", "flex");
    writeQuestion(0);
})

playAgainBtn.click(() => {
    score = 0;
    questionCounter = 0;
    wrongAnswers = [];
    scoreScreen.css("display", "none");
    gameScreen.css("display", "flex");
    writeQuestion(0);
    console.log(details.html());
    details.html(" ");
})