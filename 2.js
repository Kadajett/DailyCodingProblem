/**
 * This problem was asked by Uber.

Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

Follow-up: what if you can't use division?
 */


 /**
  * First solution didn't use division lol
  */
function sumArray(arr) {
    let newArr = [];
    if (arr) {
        
        arr.forEach((number, index) => {
            let testArr = Array.from(arr);
            testArr.splice(index, 1);
            let p = testArr.reduce(((accumulator, currentValue) => accumulator * currentValue))
            newArr.push(p)
        });
    }

    return newArr;
}

function sumArrayWithDivision(arr){
    let newArr = [];
    arr.forEach((el) => {
        newArr.push(arr.reduce((accumulator, currentValue) => accumulator * currentValue) / el);
    });

    return newArr;
}

console.log(sumArray([3, 2, 1]));
console.log(sumArrayWithDivision([3, 2, 1]));