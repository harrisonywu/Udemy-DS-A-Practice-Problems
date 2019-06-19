/* 
write a function that takes in two strings and checks whether the characters in the first string
form a subsequence of the characters in the second string.
In other words, the function should check whether the characters in the first string appear
somewhere in the second string without their order changing.
*/

// ex: 'hello' 'hello world' -> return true
// ex: 'sing' 'sting' -> return true
// ex: 'abc' 'acb' -> return false (the order matters)


// input: two strings, one sub and main
// output: bool
// constrains: O(n + m) -> this means i loop through each string once 
// edge case: empty string. if first string is longer than second string, we can instantly return false;

// let i track which letter we are currently checking in substring
// let j track which letter we are currently checking in mainstring
// we need only loop through mainstring, incrementing i when we have found a character that is the same.
// loop through mainstring, starting from first char
  // if the char at mainstring[j] is equal to the char at substring[i]
    // increment i
    // if i is greater than substring length - 1, then we have found the entire substring
      // return true
// exit loop
// exiting means we have went through entire mainstring w/o finding the entire substring, so just return false

// what if substring is empty? 
const isSubsequence = (substring, mainstring) => {
  if (substring.length > mainstring.length) return false;
  if (substring === '') return true;
  let i = 0;
  for (let j = 0; j < mainstring.length; j++) {
    if (mainstring[j] === substring[i]) {
      i++;
      if (i > substring.length - 1) {
        return true;
      }
    }
  }
  return false;
}

// recursive solution
const isSubsequence = (substring, mainstring) => {
  
}