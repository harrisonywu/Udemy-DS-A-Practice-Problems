/* 
input: the string we will be searching through, the target string we want to find
output: integer, represents how many times target string was in main string
constraints: none
edge case: empty target string, return 0;

loop through string, currentLetter referring to the letter of mainStr
if (first letter of target === currentLetter) 
  then does second letter of target === cur


*/


const NaiveString = (mainStr, targetStr) => {
  if (!targetStr) return 0;
  let counter = 0;
  for (let i = 0; i < mainStr.length; i++) {
    for (let j = 0; j < targetStr.length; j++) {
      if (mainStr[i+j] != targetStr[j]) break
      if (j === targetStr.length - 1) counter++;
    }
  }
  return counter;
}

console.log(NaiveString('omgzasasdfomgasd', 'omg'))