/* 
write a func that accepts 2 parameters - 
  an array of positive integers and a positive integer

function should return the minimal length of a contiguous subaray 
  of which the sum is greater than 
  or equal to the integer passed to the function
if there isn't one, return 0 instead

input: array of POS int, a POS int
output: integer representing length of shortest sequence of numbers that >= target
constraints ;O(n)
edgecase : if no sequence >= target, return 0;

ex: [2,3,1,2,4,3] 7 -> return 2
  

// start at first num. then stretch it UNTIL we have a sum >= target.
// once we hit that point, mark the length
// if our sum is >= target2

// sliding logic
// if the sum is less than target, add the next number to the sum and check again
// if the sum is more than target, check if currentLength < minLen, if so update it. 
    The next thing we check is subtract the first number.
// make sure to always increment and decrement length to compare to minlen

*/



const minSubArrayLen = (arr, n) => {
  let minLen = Infinity;
  let currentSum = 0;
  let currentLength = 0;
  let i = 0;
  let j = 0;
  
  while (i <= arr.length) {
    if (currentSum >= n) {
      if (currentLength < minLen) minLen = currentLength;
      currentSum -= arr[j];
      currentLength--
      j++;
    } else {
      currentSum += arr[i];
      currentLength++;
      i++;
    }
  }

  return minLen === Infinity ? 0 : minLen
};