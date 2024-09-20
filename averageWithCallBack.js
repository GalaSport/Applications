function calculateAverage(array, callBack) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        sum += element;
    }

    let averge = sum / array.length;

    callBack(averge);
}

function diplayResult(result) {
    console.log(`The result is ${result}.`);

}
let array = [2, 3, 5, 6];
calculateAverage(array, diplayResult);