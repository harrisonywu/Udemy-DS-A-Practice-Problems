/* implement a function which accepts a variable number of arguments,
and checks if there are any duplicates among the arguments passed in.

*/

// understand how args array works better.


// method 1: Frequency Counter
// this method will work for non strict equality.
const areThereDuplicates = (...args) => {
  const argFrequency = {};
  for (let i = 0; i < args.length; i++) {
    let currentArg = args[i];
    if (!argFrequency[currentArg]) {
      argFrequency[currentArg] = 1;
    } else {
      return true;
    }
  }
  return false;
}

console.log(areThereDuplicates(1,'hello','donkey kong', '1'));

// method 2: Multiple Pointers
// let's assume the args are already sorted. otherwise, we can't use multiple pointers. 

const areThereDuplicates = (...args) => {
  args.sort(); // this breaks O(n), but otherwise, we wouldn't be able to use multiple pointers
  let i = 0;
  for (let j = 1; j < args.length; j++) {
    if (args[i] === args[j]) {
      return true;
    } else {
      i = j;
    }
  }
  return false;
}