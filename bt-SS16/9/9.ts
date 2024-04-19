function flatten<T>(nestedArray: T[]): T[] {
    const flattenedArray: T[] = [];
  
    for (const element of nestedArray) {
      if (Array.isArray(element)) {
        flattenedArray.push(...flatten(element));
      } else {
        flattenedArray.push(element);
      }
    }
  
    return flattenedArray;
}

const nestedArray = [1, [2, 3], [4, [5, 6]]];
const flattenedArray = flatten(nestedArray);
console.log(flattenedArray);