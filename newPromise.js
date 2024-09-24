console.log("Hello");

const p = new Promise(executor);
p.then(onSuccess);
   
console.log("there");

function executor(resolve, reject){
    console.log("executing");
    resolve("Bue!");
}

function onSuccess(data){
    console.log(data);
}
