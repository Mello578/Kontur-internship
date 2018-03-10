export async function getUrlShirtAndNameCard(url) {
  const response = await fetch(url);
  try {
    if (response.status !== 200) {
      throw new Error('Looks like there was a problem. Status Code: ' + response.status);
    }
    return response.json();
    // Examine the text in the response
  } catch (err) {
    console.log('Fetch Error :-S', err);
  }
}
