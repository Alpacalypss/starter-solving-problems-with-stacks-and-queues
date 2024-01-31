const Stack = require("../lib/stack");

/*
Remove all spaces and punctuation from the sentence and make all characters lowercase.

Declare a variable middle and initialize it to half the length of the sentence, rounding down to an integer value for odd-length strings. For example, if the sentence is of length 7, then middle is 3.

Initialize a new stack.

Iterate through the sentence, from the first character up to middle. Push each character onto the stack.

Iterate from middle to the end of the sentence. If the sentence is an odd length, then iterate from middle+1 to skip the middle character of the sentence. On each iteration, pop a character from the stack and compare it to the current character. If they don't match, return false.

When the loop is done, return true.
*/

const isPalindrome = (sentence) => {
  sentence = sentence.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  let middle = Math.floor(sentence.length / 2);

  let stack = new Stack();
  for (let i = 0; i < middle; i++) {
    stack.push(sentence[i]);
  }

  middle += sentence.length % 2 === 0 ? 0 : 1;

  for (let i = middle, limit = sentence.length; i < limit; i++) {
    if (stack.pop() !== sentence[i]) {
      return false;
    }
  }
  return true;
};

module.exports = isPalindrome;
