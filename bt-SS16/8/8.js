"use strict";
function mergeObjects(obj1, obj2) {
    const mergedObj = Object.assign(Object.assign({}, obj1), obj2);
    for (const key in mergedObj) {
        if (typeof obj1[key] === "object" && typeof obj2[key] === "object") {
            mergedObj[key] = mergeObjects(obj1[key], obj2[key]);
        }
    }
    return mergedObj;
}
const Object1 = {
    a: 1,
    b: {
        c: 2,
        d: [3, 4],
    },
};
const Object2 = {
    a: 5,
    b: {
        c: 6,
        d: [7, 8],
        e: {
            f: 9,
        },
    },
    g: 10,
};
const mergedObject = mergeObjects(Object1, Object2);
console.log(mergedObject);
