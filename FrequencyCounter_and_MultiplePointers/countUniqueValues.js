// func that accepts a sorted array
// counts the unique values in the array
// can be neg numbers, but array will always be sorted

// input: sorted array of integers? or just numbers
// output: integer - representing how many different values are actually in the array
// constraints: let's avoid O(n^2)
// edge case: no values in the array, return 0

//multiple pointers -> we can...?
// can i manipulate the array so that it's easier?
//
// two indices, i and j
// i can loop through the array, checking if the following value is diff
// if the following value is NOT diff, do nothing
// but once it IS diff
  // I can move I up, update the current number we are checking with

const countUniqueValues = (arr) => {
  let i = 0;
  if (arr.length === 0 ) {
    return 0;
  }
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

[1,1,1,2,3,3,3,4,4,5] 