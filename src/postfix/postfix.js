const Stack = require("../lib/stack");

/*
Declare a variable named stack and initialize it to a new stack.

Declare a variable named result and initialize it to an empty array.

Iterate through each character in the expression, ignoring spaces.

If the current character is (, push it onto the stack.

If the current character is ), start popping characters off the stack and add each character to the result until you find a (. Do not add the parentheses to the result.

If the current character is an operator:

Look at the operator at the top of the stack.

If the stack is empty, or if the top of the stack is (, or if the current operator has higher precedence than the operator on the top of the stack, then push the current operator onto the stack.

Otherwise, start popping operators off the stack if the stack is not empty and the popped operator has higher or equal precedence to the current operator. Each popped operator is added to the result.

Push the current operator onto the stack.

If the current character is an operand, add it to the result.

Pop any remaining operators from the stack and add them to the result.

Return the result as a string.
*/
const precedence = {
  "+": 0,
  "-": 0,
  "*": 1,
  "/": 1,
};

const postfix = (expression) => {
  let stack = new Stack();
  let result = [];

  expression = expression.replace(/\s/g, "");
  expression.split("").forEach((character) => {
    if (character === "(") {
      stack.push(character);
    } else {
      if (character === ")") {
        let top = stack.pop();
        while (top !== "(") {
          result.push(top);
          top = stack.pop();
        }
      } else {
        if ("+-*/".includes(character)) {
          if (
            !stack.top ||
            stack.top.value === "(" ||
            precedence[character] > precedence[stack.top.value]
          ) {
            stack.push(character);
          } else {
            while (
              stack.top &&
              precedence[stack.top.value] >= precedence[character]
            ) {
              result.push(stack.pop());
            }

            stack.push(character);
          }
        } else {
          result.push(character);
        }
      }
    }
  });

  while (stack.top) {
    result.push(stack.pop());
  }

  return result.join(" ");
};

module.exports = postfix;
