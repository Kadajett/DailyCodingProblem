/**
 * Good morning! Here's your coding interview problem for today.
 * This problem was recently asked by Google.
 * Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
 * For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
 * Bonus: Can you do this in one pass?
 */

/**
 * O(n)
 */
function doAdd(numArray, sum) {
    let doesAdd = false;
    // let hash = {};
    // numArray.forEach(num1 => {
    //     hash[num1] = num1;
    // });
    numArray.forEach(num1 => {
        let diff = sum - num1;
        if (numArray.indexOf(diff) !== -1) {
            doesAdd = true;
        }
    });

    // numArray.forEach(num1 => {
    //     numArray.forEach(num2 => {
    //         if (num1 + num2 === sum) {
    //             doesAdd = true;
    //         }
    //     });
    // });

    console.log(doesAdd);
}
function doAdd1(numArray, sum) {
    let doesAdd = false;
    let hash = {};
    numArray.forEach(num1 => {
        hash[num1] = num1;
    });


    for(let i = 0; i < numArray.length; i++) {
        let num1 = numArray[i];
        let diff = sum - num1;
        if (hash[diff]) {
            doesAdd = true;
            break;
        }
    }

    // numArray.forEach(num1 => {
    //     numArray.forEach(num2 => {
    //         if (num1 + num2 === sum) {
    //             doesAdd = true;
    //         }
    //     });
    // });

    console.log(doesAdd);
}

console.time('timer');
doAdd([10, 15, 3, 7], 17);
console.timeEnd('timer');
console.time('timer2');
doAdd1([10, 12, 5, 9], 17);
console.timeEnd('timer2');