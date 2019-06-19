/* 
Given a sorted array of integers and a target average, 
determine if there is a pair of values in the array
where the average of the pair equals the target average.
There may be more than one pair that matches the average target.
*/

// input: array of ints, number representing the average of two numbers
// output: boolean
// constraints: O(n)
// edge cases: no average found -> return undefined?
     // multiple pairs... return true as soon as one is found

// because array is sorted, we can use multiple pointers

// let i = 0
// let j = arr.length - 1
// these represent the indices we hit in arr
// take the average. if they are greater than the target, then decrement j down
// if the average is less than the target, then incremint i up.
// do this as long as i < j.
// if we finish the loop, return false
// have a condition above that checks if they are ever equal. if so, return true.

// ex: [1,2,3], 2.5
// ex: [-1, 0, 3, 4, 5, 6], 3.5

const averagePair = (arr, target) => {
  let i = 0;
  let j = arr.length - 1;

  while (i < j) {
    let average = (arr[i] + arr[j]) / 2;
    if (average === target) {
      return true;
    }
    average > target ? j-- : i++;
  }
  return false;
}