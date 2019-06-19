/* 
accepts an array of integers and number called n
function should calculate the max sum of n consecutive elements in the array

input: array of integers, a number representing the numbers we are summing at once
output: max sum (an integer)
constraints: O(n)
edge cases: empty array, return null
  if n > arr length, also return null

let's loop through, summing n numbers.
comopare with max, if that sum is > than max, replace max
subtract the first number, add the next.
do this arr.length -n + 1 times
*/



const maxSubarraySum = (arr, n) => {
  if (n > arr.length) {
    return null;
  }

  let max = -Infinity;
  let currentSum = 0;
  
  let i = 0;
  while (i < n) {
    currentSum += arr[i];
    i++;
  }
  
  for (let i = 0; i < arr.length - n + 1; i++) {
    if (currentSum > max) max = currentSum;
    currentSum += -arr[i] + arr[i+n];
  }
  return max;
}

[1,5,7,3,9,6,8,2], 3