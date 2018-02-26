export function checkCards(firstSelected, secondSelected) {
  const nameOneCard = firstSelected.name;
  const nameTwoCard = secondSelected.name;
  return nameOneCard === nameTwoCard;
}