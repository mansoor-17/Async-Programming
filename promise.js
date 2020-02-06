//Promise - resolve() reject()
// resolve will go to then block
// reject will go to catch
console.log('First');
function abc() {
	return new Promise((resolve, reject) => {
		if (true) {
			resolve('Success');
		} else {
			reject();
		}
	});
}
abc()
	.then((data) => {
		console.log(data);
	})
	.catch(() => {
		console.log('Error');
	});
console.log('Last');
