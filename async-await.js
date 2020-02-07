const axios = require('axios');

function abc() {
	return new Promise((resolve, reject) => {
		axios.get(`http://192.168.0.138:8080/sum/3/1`).then((res) => resolve(res.data));
	});
}
function add(){
    return new Promise((resolve, reject) => {
		axios.get(`http://192.168.0.138:8080/sum/5/1`).then((res) => resolve(res.data));
	});
}
async function result() {
	try {
        let result1 = await abc();
        let result2 = await add();
		console.log(result1+result2);
	} catch (err) {
		console.log(err);
	}
}
result();
