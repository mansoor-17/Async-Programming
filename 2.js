//FCB -  function accepting another function as an argument
function abc() {
	console.log(' I am ABC');
}
abc();
console.log('I am gonna be Sync');
function greeting(name) {
	console.log(`Hello ${name}, welcome to Scotch!`);
}
function introduction(firstName, lastName, callback) {
	const fullName = `${firstName} ${lastName}`;

	callback(fullName);
}
introduction('Chris', 'Nwamba', greeting);
function abc() {
	console.log(' I am ABC');
}
abc();
console.log('I am gonna be Sync');
