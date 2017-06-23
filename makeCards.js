var fs = require("fs");
var start = require("./flash.js");
var inquirer = require("inquirer");
var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");
var basicObj = {"cards": []};
var clozeObj = {"cards": []};
function clear(){process.stdout.write('\033c'); }
function clearscreen(){setTimeout(clear, 4000);setTimeout(start.start,4100)}; // clear the screen after 4 seconds
fs.readFile("./basics.json", function(err, data){
if(err){
	console.log(err);
};
var parseBasic = JSON.parse(data);
for (var i = 0; i < parseBasic.cards.length; i++){
	basicObj.cards.push(parseBasic.cards[i]);
//console.log("1 " + JSON.stringify(basicObj.cards[i]))//All of these console.logs from the readFile's console.log on initial execution, so they've been commented out, but for the most part they indicate where I ran into trouble..
	}
//console.log("basicJSON " + JSON.stringify(basicObj.cards));
})


fs.readFile("./ClozeCard.json", function(err, data){
				if(err) {
					console.log(err);
				};
				var parseData = JSON.parse(data);
				//console.log("bs: " + JSON.stringify(parseData));
				for (var i = 0; i < parseData.cards.length; i++){
					clozeObj.cards.push(parseData.cards[i]);
					//console.log("2" + JSON.stringify(clozeObj.cards[i]));	
				};
					//console.log("3" + clozeObj.cards);
				});

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
 						
 						var basicCard = new BasicCard(answers.front, answers.back);
 						console.log("One down!\n");
 						BasicCard.prototype.addCard = function() {
 							basicObj.cards.push(basicCard); 						
 							console.log(JSON.stringify(basicCard) + " added to basics.json!\n");
 							fs.writeFile("basics.json", JSON.stringify(basicObj), "utf8", function(err){if (err)console.log(err);
 							});
	 						}
 						basicCard.addCard();	
 						//end then for makeBasic
 						inquirer.prompt([
 						{
 							type: "list",
 							name: "more",
 							choices: ["Yes", "No"],
 							default: "No",
 							message: "Would you like to make another flash card?"
 						}]).then(function(answers){
 							if (answers.more !== "No"){
 								makeBasic();
 							}
 							else if (answers.more == "No"){
 							console.log("You can always make more later!");
 							clearscreen(); //4 seconds, clear the screen
 							}
 						})

 				});//end basic
 				};


 				makeBasic();
 			}
 			else {
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
 						//clozeCards.push(readCloze);
						
 						var clozeCard = new ClozeCard(answers.fullText, answers.clozeText);
 						console.log("One Down!\n" + JSON.stringify(clozeCard) + " added to ClozeCard.json!\n");
 						ClozeCard.prototype.addCard = function(){
								clozeObj.cards.push(clozeCard);					
								//this had to be nested in here because clozeCard was defined here.
								fs.writeFile("ClozeCard.json", JSON.stringify(clozeObj), "utf8", function(err) {
									if(err) {
										console.log("err " + err);
										} 
									});
							};
 						clozeCard.addCard();
						
						inquirer.prompt([
						{
							type: "list",
							name: "more",
							choices: ["Yes", "No"],
							default: ["No"],
							message: "Would you like to make another card?"
						}]).then(function(answers){
							if (answers.more !== "No"){
								makeCloze();
							}
							else if (answers.more == "No") {
							console.log("You can always make more later!\n");
							clearscreen(); //4 seconds, clear the screen
							}
						});
 					}
 				);//end Cloze
 				};
 				makeCloze();
 			}
 		});
 	};

 	// 		else {

 	// 		}//end else	
 	// 	};//end then function answers
 	// }//end pickCard

