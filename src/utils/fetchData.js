let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const fetchData = url => {
	return new Promise((resolve, reject) => {
		const xhttp = new XMLHttpRequest();
		//async enable with true
		xhttp.open('GET', url, true);
		xhttp.onreadystatechange = () => {
			if (xhttp.readyState === 4) {
				if (xhttp.status === 200) {
					resolve(JSON.parse(xhttp.responseText));
				} else {
					const ERROR = newError('Error' + url);
					reject(error);
				}
			}
		};
		xhttp.send();
	});
};

module.exports = fetchData;
