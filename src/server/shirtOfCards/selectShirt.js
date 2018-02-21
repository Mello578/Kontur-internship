const express = require('express');
const PATH_SHIRT_CARD = require('./pathToshirtCards');
let shuffle = require('./shaffle');

function randomCards (allCards){
 const numbRandomCard =	Math.floor(Math.random()*(allCards.length));
 return allCards[numbRandomCard];
}

function matchCheck(arrayCards, currentCard){
	if(arrayCards.length > 0){
		const currentId = currentCard.id;
		const arrayCardsId = arrayCards.map((item)=> item.id);
		return arrayCardsId.indexOf(currentId);
	}else{
		return -1;
	}
}

function setCards(){
	let setRandomCards = [];
	while(setRandomCards.length < 9){
		let randomCart = randomCards(PATH_SHIRT_CARD);
		if(matchCheck(setRandomCards, randomCart) === -1){
			setRandomCards.push(randomCart)
		}
	}
	return setRandomCards;
}

function arrayDublication(setCards) {
	return setCards.concat(setCards);
}

let theFinishedArray = function (){
	let notMixedArray = arrayDublication(setCards());
	shuffle(notMixedArray);
	return JSON.stringify(notMixedArray);
}

module.exports = theFinishedArray;