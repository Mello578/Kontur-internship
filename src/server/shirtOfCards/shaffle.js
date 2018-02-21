function shuffle(a){
	if(a){
		let j, x, i = a.length - 1;
		for (i; i > 0; i--) {
			j = Math.floor(Math.random() * (i + 1));
			x = a[i];
			a[i] = a[j];
			a[j] = x;
		}
		return a;
	}
}

module.exports = shuffle;