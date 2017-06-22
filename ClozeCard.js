var fs = require("fs");
//var clozedCards = require("ClozeCard.JSON");

var ClozeCard = function(text, cloze) {
	this.text = text;
	this.partial = cloze;
	this.partialArr = cloze.split("");
	this.clozeArr = [];
	this.fillCloze = function (){
	for (var i = 0; i < this.partialArr.length; i++ ){
			if (this.partialArr[i] == " ") {this.clozeArr.push(" ")}
				else {
			this.clozeArr.push("_ ");
				}
			}		
		
		
//this.clozes = text.replace(text, fillCloze)	
	}
	this.fillCloze();
	this.front = text.replace(cloze, this.clozeArr.join(" "));

};
//str.replace(regexp|substr, newSubstr|function) - references sometimes get left in for future.. reference.
module.exports = ClozeCard;

//push to an array and then write to json file with stringify;