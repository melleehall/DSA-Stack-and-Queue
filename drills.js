// 2. Useful methods for a stack
// Using the Stack class above, implement the following helper functions outside of the class:
// peek(): allows you to look at the top of the stack without removing it

function peek(stack) {
    return stack.top;
  }
  
console.log(peek(stStack))

// isEmpty(): allows you to check if the stack is empty or not

function isEmpty(stack) {
    if (stack.top === null) {
      return 'Stack is empty'
    } else {
      return 'Stack is not empty'
    }
  }
  
  console.log(isEmpty(stStack))

// display(): to display the stack - what is the 1st item in your stack?

function display(stack) {
    let items = [];
  
    if (stack.top === null) {
      return 'Stack is empty'
    } 
  
    currNode = stack.top
    while (currNode !== null) {
      items.push(currNode)
      currNode = currNode.next;
    }
  
    return items[items.length - 1]
  }
  
  display(stStack)

// Remove McCoy from your stack and display the stack

function removeItemFromStack(stack, item) {
    if (stack.top === null) {
      return 'Stack is empty'
    } 
  
  
    if (stack.top.data === item) {
      stack.pop()
    } else {
        // we need to check each node's value for the items
        let currNode = stack.top
        // keep track of the previous node bc it will have to point to the currNode
        let prevNode = stack.top;
        while (currNode !== null) {
        if (currNode.data === item) {
          prevNode.next = currNode.next;
          return;
        }
        prevNode = currNode;
        currNode = currNode.next;
      }
    }
  }
  
  removeItemFromStack(stStack, 'McCoy')
  console.log(display(stStack))