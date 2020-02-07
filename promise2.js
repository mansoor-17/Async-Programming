let promise1 = new Promise((resolve, reject) => {
	setTimeout(resolve, 1000, 'first');
});
promise1
	.then((x) => {
		return promise2;
	})
	.then((x) => {
		return promise3;
	})
	.then((x) => {
		console.log(x);
	});
let promise2 = new Promise((resolve, reject) => {
	setTimeout(resolve, 2000, 'second');
});
promise2
    .then((x)=>{
        console.log (x);
    })
    .then((x)=>{
        console.log (10);
    })

let promise3 = new Promise((resolve,reject)=>{
    setTimeout(resolve,3000,"third");
});
