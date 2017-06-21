var inquirer = require("inquirer");
var cards = require("./makeCards.js");
var argv = process.argv;
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
						inquirer.prompt([
						{
							type:"list",
							name:"cardType",
							choices:["basic", "cloze"],
							message: "Basic or cloze?"
						}]).then(function(answers){
							if (answers.cardType !== "cloze"){
								inquirer.prompt([{
									type: "input",
									name: "question",
									message: "What will the question be?"
									}, {
										type:"input",
										name: "answer",
										message:"What will the answer be?"
									}]).then(function(answers){
										var flashcard = new cards(answers.question, answers.answer);
										console.log(flashcard);
									});
								
							}
						});
						}
						
					
					else {
						console.log("Password Invalid");
					}
				})
		}
		else {
			var loginName = answers.name;
			console.log(loginName);

		}

	});	
