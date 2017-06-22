var fs = require("fs");
var inquirer = require("inquirer");
var BasicCard = require("./BasicCard");
var ClozeCard = require("./ClozeCard.js");
//var basics = require("./basics.json");//basics JSON
var cards = require("./makeCards.js");//making cards - come back to this
var argv = process.argv;

var basicCard = new BasicCard("Where is 300 Atrium Drive", "Somerset");
//console.log(basicCard.front + "\n" + basicCard.back);
var clozeCard = new ClozeCard("Javascript and Java are both made by Oracle", "Oracle");
console.log("cc.front " + clozeCard.front);
//var cloze2Card = new ClozeCard("Javascript is harder than English", "English");
//console.log("cc2.front " + cloze2card.front);

//console.log((basics.back));

console.log("Welcome to flash");
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
					console.log("Welcome Sir or Madame, please choose below to begin the flashcard creation process.");
				cards.pickCard();
						}
				})
			}
		else if (answers.name !== "admin") {
		var loginName = answers.name;
		process.stdout.write('\033c'); // clear the screen
		console.log("Welcome to the FlashderDome \n");
		inquirer.prompt([
		{
			type: "list",
			name: "type",
			choices: ["Basic", "Cloze"],
			default: "Basic",
			message: "Basic or Cloze type FlashCards?"
		}]).then(function(answers){
			if (answers.type == "Cloze") {
				inquirer.prompt([{
				type: "input",
				name: "answer",
				message: clozeCard.front
			}]).then(function(answers){
				if (clozeCard.back == answers.answer.toLowerCase()){
					console.log("Congrats!");
				}

			})
		}//end clozetest
		else inquirer.prompt([{
				type: "input",
				name: "answer",
				message: basicCard.front
			}]).then(function(answers){
				if (answers.answer.toLowerCase() == basicCard.back.toLowerCase()) {
					console.log("congrats");	
				}
			})
	})

	}
	});
	

