const a = [1, 2, 3];
console.log(a); // [1, 2, 3]
a.reverse();
console.log(a); // [3, 2, 1]

function arrayRotate(arr, reverse) {
    if (reverse) arr.unshift(arr.pop());
    else arr.push(arr.shift());
    return arr;
  }
  
  arrayRotate([1, 2, 3, 4, 5]);       // [2, 3, 4, 5, 1];
  arrayRotate([1, 2, 3, 4, 5], true); // [5, 1, 2, 3, 4];


const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]

const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);
// expected output: Array ["a", "b", "c", "d", "e", "f"]