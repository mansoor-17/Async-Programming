const fs = require('fs');

console.log(' I am starting my FCB Journey');

fs.readFile('data.txt', function(err, data) {
	if (err) {
		throw err;
	}

	fs.writeFile('new.txt', data, (err) => {
		if (err) {
			throw err;
		}
	});
});

console.log(' I am ending my FCB Journey');
