var inquirer = require("inquirer");
var makeCards = require("./makeCards");
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
						for (i = 2; i < argv.length; i++){
							makeCard = new makeCards();
						}
						
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
