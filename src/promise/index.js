//this function returns a new promise
const sometimesWillHappen = () => {
	/**The promise receives two params
	 * this params are functions */
	return new Promise((resolve, reject) => {
		if (true) {
			resolve('response');
		} else {
			reject('Whoops!');
		}
	});
};

sometimesWillHappen()
	.then(response => {
		console.log(response);
	})
	.catch(error => console.error(error));

const sometimesWillHappen2 = () => {
	return new Promise((resolve, reject) => {
		if (true) {
			setTimeout(() => {
				resolve('TRUE');
			}, 2000);
		} else {
			const error = new Error('Whoops!');
			reject(error);
		}
	});
};

sometimesWillHappen2()
	.then(response => console.log(response))
	.catch(error => console.error(error));

Promise.all([sometimesWillHappen(), sometimesWillHappen2()])
	.then(response => {
		console.log('Array of results', response);
	})
	.catch(error => console.error(error));
