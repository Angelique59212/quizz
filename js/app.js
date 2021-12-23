$(".questions");
let Question = function (question1, question2, question3, question4, question5, question6, question7, question8,
                         question9, question10) {
    this.question1 = question1;
    this.question2 = question2;
    this.question3 = question3;
    this.question4 = question4;
    this.question5 = question5;
    this.question6 = question6;
    this.question7 = question7;
    this.question8 = question8;
    this.question9 = question9;
    this.question10 = question10;
}
let Choice = function (choice1, choice2, choice3) {
    this.choice1 = choice1;
    this.choice2 = choice2;
    this.choice3 = choice3;

}


let question1 = new Question("Quel est le 1er long métrage d'animation de Walt Disney?")
