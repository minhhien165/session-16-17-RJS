"use strict";
function swap(array, ex1, ex2) {
    const temp = array[ex1];
    array[ex1] = array[ex2];
    array[ex2] = temp;
    return array;
}
console.log(swap([1, 2, 3, 4, 5], 1, 4));
