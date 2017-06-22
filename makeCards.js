var fs = require("fs");
var inquirer = require("inquirer");
var ClozeCard = require("./ClozeCard.js");
var clozeObj = {"cards": []};
fs.readFile("./ClozeCard.json", function(err, data){
				if(err) {
					console.log(err);
				};
				var parseData = JSON.parse(data);
				//console.log("bs: " + JSON.stringify(parseData));
				console.log("1" + parseData.cards);
				for (var i = 0; i < parseData.cards.length; i++){
					clozeObj.cards.push(parseData.cards[i]);
					console.log("2" + JSON.stringify(clozeObj.cards[i]));	
				};
							console.log(clozeObj.cards);
				//clozeCards.push(JSON.stringify(data));
				});

//var clozedCardArr = clozeCards.push(readCloze);
//console.log(clozedCarArr[0]);
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
 						
						clozeObj.cards.push(clozeCard);
						
						console.log(clozeObj.cards);
						fs.writeFile("ClozeCard.json", JSON.stringify(clozeObj), "utf8", function(err){if(err){console.log("err " + err)} console.log("One Down!");});
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

