/**
 * Good morning! Here's your coding interview problem for today.

This problem was asked by Stripe.

Given an array of integers, find the first missing positive integer in linear time and constant space. 
In other words, find the lowest positive integer that does not exist in the array. 
The array can contain duplicates and negative numbers as well.

For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.

You can modify the input array in-place.
 */

function proc(arr) {
    // let testArr = arr.sort();
    let min = 0;
    for(let i = 0; i < arr.length; i ++) {
        let el = arr[i];
        if(arr.indexOf(el + 1) == -1) {
            if(!min || (el + 1 < min && el + 1 !== 0)) {
                min = el + 1;
            }
            // break;
        }
    }
    return min;
}


console.log(proc([3, 3, 4, 4, -1, 1]))