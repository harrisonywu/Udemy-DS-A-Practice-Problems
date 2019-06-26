// Write a function called binarySearch which accepts 
// a sorted array and a value and returns the index at which the value exists. 
// Otherwise return -1

function binarySearch(array, value) {
  let start = 0;
  let end = array.length;
  let middle;
  while (start < end) {
    middle = Math.floor((start + end)/2);
    if (array[middle] === value) return middle;
    else if (array[middle] < value) {
      start = middle + 1;
    } else if (array[middle] > value) {
      end = middle - 1;
    }
  }
  // one final check
  if (array[start] === value) return start;
  return -1;
}

console.log(binarySearch([1,2,3,4,5,92,1200]))
console.log(binarySearch([1,2,3,4,5], 2))
console.log(binarySearch([1,2,3,4,5], 3))
console.log(binarySearch([1,2,3,4,5], 4))
console.log(binarySearch([1,2,3,4,5], 5))