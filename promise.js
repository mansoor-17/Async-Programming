//Promise - resolve() reject()
// resolve will go to then block
// reject will go to catch

function abc(){
    return new Promise((resolve,reject)=>{
        setTimeout( (str)=>{
            if(str == 'prash'){
                resolve(str);
            }
           else{
               reject();
           }
        }, 3000, "prashanth");
    })
}
abc()
    .then((data)=>{
        console.log(data);
    })
    .catch(()=>{
        console.log("Error");
    })