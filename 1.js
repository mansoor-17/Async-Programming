//Async vs Sync
//What are the ways to implement async mechanism
//1) FCB (Function Call Backs)
//2) Promises
//3) Async Await

function addNumber(a, b) {
	console.log('In call stack of addNumber');
	return a + b;
}

function multiplyNumber(a, b) {
	console.log('In call stack of multiplyNumber');
	var c = 0;
	setTimeout(function() {
		c = addNumber(a, b);
		console.log('Return value from addNumber - ' + c);
	}, 1000);
	return c * b;
}

console.log('Final Output - ' + multiplyNumber(2, 3));
