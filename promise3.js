const axios = require('axios');

function adding(num1, num2) {
	return new Promise((resolve, reject) => {
		axios
			.get(`http://192.168.0.138:8080/sum/${num1}/${num2}`)
			.then((res) => resolve(res.data))
			.catch((err) => console.log(err));
	});
}

adding(1, 2)
	.then((resultA) => {
		return resultA;
	})
	.then((resultA) => {
		return adding(resultA, 4);
	})
	.then((resultB) => {
        return adding(resultB,5)
    })
    .then((resultC)=>{
        console.log(resultC);
    })
