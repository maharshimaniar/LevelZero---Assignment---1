var readLineSync = require('readline-sync');
var chalk = require('chalk');

var name = readLineSync.question("Enter your name : ");
console.log("Welcome " + name + " to Quiz Time !");
console.log("-----------------------------------");
console.log(chalk.bgYellowBright("RULES : "));
console.log(chalk.bgYellowBright("~Every correct answer gives 1 point."));
console.log(chalk.bgYellowBright("~Consequetive 5 correct answer promotes you to Level 2."));
console.log(chalk.bgYellowBright("~Consequetive 10 correct answer promotes you to Level 3."));
console.log(chalk.bgYellowBright("~There are total 20 questions and 3 levels in this game."));
console.log(chalk.bgBlueBright("ALL THE BEST!"));
console.log("-----------------------------------");
var score = 0;
var level = 1;
var trueCount = 0;
var questionCount = 0;
highScores = [{ name: "Maharshi", score: 18 ,level : 3}, { name: "Nirav", score: 12 ,level : 2}];

questions = [{
  question: "The current President of India is________? ",
  answer: "Ram Nath Kovind"
},{
  question: "What is the name of ISRO’s new humanoid robot that will go to space next? ",answer: "Vyommitra"
},{
  question: "How many kite festivals does India have in a year? ",
  answer: "Around 200"
},{
  question: "What is the professional Twenty20 cricket league in India called? ",
  answer: "IPL"
},{
  question: "Which Indian Cricketer was recently given the ‘Padma Vibushan’ award? ",
  answer: "Sachin Tendulkar"
},{
  question: "Where is the headquarters of ISRO located? ",
  answer: "Bangalore"
},{
  question: "Which are the two houses of the Parliament? ",
  answer: "The Rajya Sabha and Lok Sabha"
},{
  question: "Which is India’s smallest state? ",
  answer: "Goa"
},{
  question: "Who was the author of Ramayana? ",
  answer: "Valmiki"
},{
  question: "How many states are there in India? ",
  answer: "29"
},{
  question: "How many union territories are there in India? ",
  answer: "7"
},{
  question: "Which city is known as the Blue City of India? ",
  answer: "Jodhpur"
},{
  question: "Which country shares the shortest border with India? ",
  answer: "Afghanistan"
},{
  question: "Who was the first Indian to receive the Nobel peace prize? ",
  answer: "Rabindranath Tagore"
},{
  question: "Which latitude line passes through India? ",
  answer: "Tropic of Cancer"
},{
  question: "Which state is known as ‘Scotland of the East’ in India? ",
  answer: "Meghalaya"
},{
  question: "Which is the biggest Indian state? ",
  answer: "Rajasthan"
},{
  question: "Who is known as the Flying Sikh of India? ",
  answer: "Milkha Singh"
},{
  question: "India is the largest producer of which mineral? ",
  answer: "Sheet Mica"
},{
  question: "What is India’s national flower? ",
  answer: "Lotus"
}];

function levelCheck(trueCount){
  if (trueCount===10){
    level=3;
    console.log(chalk.greenBright("Yay! Level Upgraded."));
  }
  else if (trueCount===5){
    level=2;
    console.log(chalk.greenBright("Yay! Level Upgraded."));
  }
}

function play(question, answer) {
  questionCount ++;
  console.log(chalk.yellow("Level : "+level+"/3")+"          "+chalk.blue("Question : "+questionCount+"/20")+"          "+chalk.cyanBright("Streak : "+trueCount));
  userAnswer = readLineSync.question(question);
  if (userAnswer.toLowerCase() === answer.toLowerCase()) {
    console.log(chalk.green("Correct!"));
    score += 1;
    trueCount +=1;
    levelCheck(trueCount);
  }
  else {
    console.log(chalk.red("Wrong!"));
    trueCount=0;
  }
  console.log("Score : ", score);
  console.log("-----------------------------------");
}

function highScorePrint(rank, name, highScore,level) {
  console.log(rank, " ", name, " : ", highScore," : ",level);
}
function highScoreCheck(name, highScore) {
  if (score > highScore) {
    console.log("Congratulations! You have broken ", name, "'s Highscore.");
  }
  else if (score === highScore) {
    console.log("Congratulations! You have leveled ", name, "'s Highscore.");
  }
  else {
    console.log("You didn't brake Highscore. Better luck Next Time...");
  }
  return true;
}

for (var i = 0; i < questions.length; i++) {
  play(questions[i].question, questions[i].answer);
}
if(score<0){
  score = 0;
}
console.log(chalk.magenta("Final Score : ", score));
console.log("");
console.log("Highscores");
console.log("No     Name     Score     Level")
console.log("-----------------------------------");
for (var i = 0; i < highScores.length; i++) {
  highScorePrint(i + 1, highScores[i].name, highScores[i].score,highScores[i].level);
}

for (var i = 0; i < highScores.length; i++) {
  var flag = highScoreCheck(highScores[i].name, highScores[i].score);

  if (flag) {
    break;
  }
}