export function checkCards(cardIdOne, cardIdTwo, arrayAllCards) {
	const nameOneCard = arrayAllCards[cardIdOne]['name'];
	const nameTwoCard = arrayAllCards[cardIdTwo]['name'];
	return nameOneCard === nameTwoCard;
}