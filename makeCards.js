var fs = require("fs");
var inquirer = require("inquirer");
//var basicOutput = require("./basics.JSON");
//var clozeOutput = require("./clozeCards.JSON");
var flashCard = function(front,back) {
	this.front = front;
	this.back = back;
};

exports.pickCard = function() {
 		inquirer.prompt([
 		{
 			type:"list",
 			name: "cardType",
 			choices: ["basic", "cloze"],
 			message: "How will your flashcard work?"
 		}]).then(function(answers){
 			if (answers.cardType !== "cloze") {
 				var makeBasic = function() {
 					inquirer.prompt([
 					{
 						type:"input",
 						name:"front",
 						message:"What will the front of your flashcard say?"
 					}, {
 						type:"input",
 						name:"back",
 						message:"What will the back of your flashcard say?"
 					}]).then(function(answers){
 						
 						var basicCard = new flashCard(answers.front, answers.back);
 						//var x = fs.readFile(basics.JSON);
 						//x.push(basiccard);trying to use an array somehow//
 						fs.appendFile("basics.json", basicCard, function(err){if (err)console.log(err);
						console.log(JSON.stringify(basicCard) + " added to basics.json");
										});

 				
 				});//end basic
 				};
 				var makeCloze = function(){
 					inquirer.prompt([
 					{
 						type:"input",
 						name:"fullText",
 						message:"Please define the entire sentence"
 					}, {
 						type:"input",
 						name:"clozeText",
 						message:"Verbatim, please define the word or words that you wish to hide"
 					}]).then(function(answers){

 					}
 				);//end Cloze
 				};
 				makeBasic();
 			}

 		});
 	};

 	// 		else {

 	// 		}//end else	
 	// 	};//end then function answers
 	// }//end pickCard

