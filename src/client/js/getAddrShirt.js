export async function getAddrShirt(url) {
	let responseCopy;
	return await fetch(url)
		.then(
			function (response) {
				if (response.status !== 200) {
					console.log('Looks like there was a problem. Status Code: ' +
						response.status);
					return;
				}
				responseCopy = response.json();
				// Examine the text in the response
				return responseCopy;
			}
		)
		.catch(function (err) {
			console.log('Fetch Error :-S', err);
		});
};


