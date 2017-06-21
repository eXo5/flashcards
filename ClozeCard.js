var fs = require("fs");
var clozedCards = require("./ClozeCard.json");

var ClozeCard = function(text, cloze) {
	this.text = text;
	this.partial = cloze;
	this.partialArr = cloze.split("");
	this.clozeArr = [];
	this.fillCloze = function (){
	for (var i = 0; i < this.partialArr.length; i++ ){
			this.clozeArr.push("_ ");		
		}
		
//this.clozes = text.replace(text, fillCloze)	
	}
	this.fillCloze();
	//console.log(this.clozeArr.join(" "));
	this.front = text.replace(cloze, this.clozeArr.join(" "));
	//console.log(this.front);
	//console.log(text);
	var clozeCards = [];
	clozeCards.push(clozedCards);
	clozeCards.append();
	fs.appendFile("clozeCard.json");
};
//str.replace(regexp|substr, newSubstr|function)
module.exports = ClozeCard;

//push to an array and then write to json file with stringify;