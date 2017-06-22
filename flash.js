var fs = require("fs");
var inquirer = require("inquirer");
var BasicCard = require("./BasicCard.js");
var clozeJson = require("./ClozeCard.json");
//var basics = require("./basics.json");//basics JSON
var cards = require("./makeCards.js");//making cards - come back to this
var argv = process.argv;
var ClozeCard = require("./ClozeCard.js");
var basics = require("./basics.json");
function clear(){
	process.stdout.write('\033c');
}
function clearScreen(){
	console.log("Awesome!!");
	setTimeout(clear, 4000);
	setTimeout(start,4100)
}; // clear the screen after 4 seconds

process.stdout.write('\033c');

var start = exports.start = function(){ //lolwat that worked!

console.log("Welcome to flash");//Welcome Message
var count = 0;
var rightCount = 0;
var loginName = "";
inquirer.prompt([
{
	name: "name",
	message: "What is your name?"
}
	]).then(function(answers) {
		if (answers.name == "admin") {
			inquirer.prompt([
			{
				type: "input",
				name: "password",
				message: "Please enter your password"
			}]).then(function(answers){
				if (answers.password == "password") {
					console.log("Please choose below to begin the flashcard creation process.");
				cards.pickCard();
						}
				})
			}
		else if (answers.name !== "admin") {
		var loginName = answers.name;
		process.stdout.write('\033c'); // clear the screen
		console.log("Welcome to the ThunderDome \n");
		inquirer.prompt([
		{
			type: "list",
			name: "type",
			choices: ["Basic", "Cloze"],
			default: "Basic",
			message: "How would you like to test your 'luck'?"
		}]).then(function(answers){
			if (answers.type == "Cloze") {
			function askCloze(){
				if (count < clozeJson.cards.length){
				inquirer.prompt([{
				type: "input",
				name: "answer",
				message: clozeJson.cards[count].front
			}]).then(function(answers){
				if (clozeJson.cards[count].partial.toLowerCase() == answers.answer.toLowerCase()){
					console.log("Congrats!")
					rightCount++;
					count++;
					askCloze();
				} else {
					console.log("Sorry!\nThe correct answer was: " + clozeJson.cards[count].text);
					count++;
					askCloze();
				}

			})
			}//end count < clozeJson.cards.length
			if (count >= clozeJson.cards.length){
				console.log("Congratulations, You've finished!\n" + loginName + " got " + rightCount + " correct!");
				inquirer.prompt([
				{
					type:"list",
					name:"playAgain",
					choices: ["Yes", "No"],
					message: "Would you like to play again?"
				}]).then(function(answers){
					if (answers.playAgain == "Yes") {
						clearScreen();
					}
					else {
						console.log("Have a good day!");
					}
				})

			}
		}//end if cloze
		askCloze();
	}//end if == cloze
			
		//end clozetest
			else {
				
		function askBasic(){
		if (count < basics.cards.length) {
			inquirer.prompt([{
				type: "input",
				name: "answer",
				message: basics.cards[count].front
			}]).then(function(answers){
				if (answers.answer.toLowerCase() == basics.cards[count].back.toLowerCase()) {
					console.log("congrats");	
					count++;
					askBasic();
				}
				else {
					console.log("Sorry!\nThe correct answer is: " + basics.cards[count].back);
					count++;
					askBasic();
				}
			})
			}
				if (count >= basics.cards.length) {				 
				console.log("Congratulations You've finished!");
				inquirer.prompt([
				{
					type:"list",
					name:"playAgain",
					choices: ["Yes", "No"],
					message: "Would you like to play again?"
				}]).then(function(answers){
					if (answers.playAgain == "Yes") {
						clearScreen();
					}
					else {
						console.log("Have a good day!");
					}
				})
				}
		}
	askBasic();
	}//end else
		})

		}
	});
	};

	start();

