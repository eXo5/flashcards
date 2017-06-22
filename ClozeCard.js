var fs = require("fs");
//var clozedCards = require("ClozeCard.JSON");

var ClozeCard = function(text, cloze) {
	this.text = text;
	this.partial = cloze;
	console.log(this.partial);
	this.partialArr = cloze.split("");
	this.clozeArr = [];
	this.fillCloze = function (){
	for (var i = 0; i < this.partialArr.length; i++ ){
			this.clozeArr.push("_ ");
			if (this.partialArr.indexOf(i) == " ") {
				this.clozeArr.splice(i,i," ");
			}		
		}
		
//this.clozes = text.replace(text, fillCloze)	
	}
	this.fillCloze();
	//console.log(this.clozeArr.join(" "));
	this.front = text.replace(cloze, this.clozeArr.join(" "));
	//console.log(this.front);
	//console.log(text);
	console.log(this.front);
};
//str.replace(regexp|substr, newSubstr|function)
module.exports = ClozeCard;

//push to an array and then write to json file with stringify;