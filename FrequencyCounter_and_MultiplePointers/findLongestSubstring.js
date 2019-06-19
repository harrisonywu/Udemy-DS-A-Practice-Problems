/* 
func accepts a string and 
returns the length of the longest substring with all distinct characters

input: string
output: integer (length of substring)
constraints O(n)
edge case: empty string, return 0

update an obj w/ letters?

two main bits of logic
1. how do I know we've hit a duplicate char?
2. once I know there's a duplicate char, how do I slide the front to immediate after that?

obj w/ letter as key, value as index?
ex: rithmschool

*/

const findLongestSubstring = (str) => {
  let i = 0;
  let longestSubStringLength = 0;
  let currentSubstringLength = 0;

  let charIndices = {};

  while (i <= str.length) {
    let currentChar = str[i];
    currentSubstringLength++;
    if (!charIndices[currentChar]) {
      charIndices[currentChar] = i 
    } else { 
      if (currentSubstringLength > longestSubStringLength) longestSubStringLength = currentSubstringLength;
      currentSubstringLength -= charIndices[currentChar]+1;
      //hit a duplicate
      // need to update currentsubstringlength
      // need to move j up??? do i need j?
    }
      i++;
  }
  return longestSubStringLength
}