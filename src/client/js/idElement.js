export const idElement = () =>{
	let arrayIdElements = [];
	for(let i = 0; i < 18; i++){
		let currentId = 'card' + i;
		arrayIdElements.push(currentId);
	}
	return arrayIdElements;
};