const Stack = require("../lib/stack");

/*
Initialize a new empty stack.

Start a loop to iterate through each character in the expression.

If the current character is (:

Push it onto the stack.

Else:

If the current character is ):

If the stack isn't empty:

Pop one item off the stack.

Else:

Return false.

If the stack is empty:

Return true.

Else:

Return false.
*/

const match = (expression) => {
  let stack = new Stack();

  for (let i = 0, limit = expression.length; i < limit; i++) {
    if (expression[i] === "(") {
      stack.push("(");
    } else {
      if (expression[i] === ")") {
        if (stack.top) {
          stack.pop();
        } else {
          return false;
        }
      }
    }
  }
  return !stack.top;
};

module.exports = match;
