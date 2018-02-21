export function checkCards(cardIdOne, cardIdTwo, arrayAllCards) {
	const nameOneCard = arrayAllCards[cardIdOne]['name'];
	const nameTwoCard = arrayAllCards[cardIdTwo]['name'];
console.log(cardIdOne);
	return nameOneCard === nameTwoCard;
}