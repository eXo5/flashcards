var fs = require("fs");
var inquirer = require("inquirer");
var BasicCard = require("./BasicCard");
var ClozeCard = require("./ClozeCard.js");
var basics = require("./basics.json");//basics JSON
var cards = require("./makeCards.js");//making cards - come back to this
var argv = process.argv;

var basicCard = new BasicCard("Where is 300 Atrium Drive", "Somerset");
console.log(basicCard.front, + "\n" + basicCard.back);
var clozeCard = new ClozeCard("Javascript and Java are both made by Oracle", "Oracle");
console.log("cc.front " + clozeCard.front);

//console.log((basics.back));


inquirer.prompt([
	{
		name: "name",
		message: "What is your name?"
	}
		]).then(function (answers) {
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
		else {
			var loginName = answers.name;
			inquirer.prompt([
			{
				type: "input",
				name: "answer",
				message: basicCard.front
			}]).then(function(answers){
				if (answers.answer == basicCard.back) {
					console.log("congrats");	
				}
			}
		);

		}

	});	
}
});