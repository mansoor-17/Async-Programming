const axios = require('axios');
const fs = require('fs');
console.log("I am about to make http call");
axios
	.get('http://192.168.0.209:8000/some.txt')
	.then((response) => {
		const data = response.data;
		fs.writeFile('response.txt', data, (err) => {
			if (err) {
				throw err;
            }
            console.log("File Created Successfully");
		});
	})
	.catch(() => {
		console.log('Server Bad Response');
	});
    console.log("I am Done to make http call");
