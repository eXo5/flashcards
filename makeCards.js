var inquirer = require("inquirer");
var output = require("./clozeCards.txt");
var flashCard = function(front,back) {
	this.front = front;
	this.back = back;
};

var pickCard = function() {
 		this.inquirer.prompt([
 		{
 			type:"list",
 			name: "cardType",
 			choices: ["basic", "cloze"],
 			message: "How will your flashcard work?"
 		}]).then(function(answers){
 			if(answer.cardType == basic) {
 				this.makeBasic = function() {
 					inquire.prompt([
 					{
 						type:"input",
 						name:"front",
 						message:"What will the front of your flashcard say?"
 					}, {
 						type:"input",
 						name:"back",
 						message:"What will the back of your flashcard say?"
 					}]);
 			}
 				
 				}//end basic
 			else {

 			}//end else	
 		});//end then function answers
 	}//end pickCard


 module.exports = flashCard;
 