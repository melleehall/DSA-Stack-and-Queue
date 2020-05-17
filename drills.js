// Stack Drills

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


// 3. Check for palindromes using a stack
// A palindrome is a word, phrase, or number that is spelled the same forward and backward. For example, “dad” is a palindrome; “A man, a plan, a canal: Panama” is a palindrome if you take out the spaces and ignore the punctuation; and 1,001 is a numeric palindrome. We can use a stack to determine whether or not a given string is a palindrome.

// Write an algorithm that uses a stack to determine whether a given input is palindrome or not. Use the following template as a starting point.

// function is_palindrome(s) {
//     s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
//     // Your code goes here
// }

// // True, true, true, false
// console.log(is_palindrome("dad"));
// console.log(is_palindrome("A man, a plan, a canal: Panama"));
// console.log(is_palindrome("1001"));
// console.log(is_palindrome("Tauhida"));


function is_palindrome(str) {
    str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");

    // Create a new stack
  let stk = new Stack();

  for ( let i = 0; i < str.length; i++ ) {
    stk.push(str[i]);
  }

  // Declare a variable to store the reverse order
  let reverseStr = '';

  // While the top isn't null, pop the values off the stack
  while ( stk.top !== null ) {
    reverseStr += stk.pop();
  }

  // Validate if both strings are the same
  console.log(str);
  return str === reverseStr;
}

// True, true, true, false
console.log(is_palindrome("dad"));
console.log(is_palindrome("A man, a plan, a canal: Panama"));
console.log(is_palindrome("1001"));
console.log(is_palindrome("Tauhida"));


// 4. Matching parentheses in an expression
// A stack can be used to ensure that an arithmetic expression has balanced 
// parentheses. Write a function that takes an arithmetic expression as an 
// argument and returns true or false based on matching parenthesis. 
// As a bonus provide a meaningful error message to the user as to what's 
// missing. For example, you are missing a ( or missing a ")".

// For version 1, the parentheses you need to consider are ( and ). 
// Finding a close parenthesis without an open parenthesis is an error 
// (report the location of the close); reaching the end of the string 
// while still "holding" an open parenthesis is also an error (report 
// the location of the open).

// Getting opposite of expected output - need to revisit

function parentheses (string) {
    const stack = new Stack()
    for (let i = 0; i < string.length - 1; i++) {
        if (string[i] === '(') {
            stack.push(string[i])
        }
        if (string[i] === ')') {
            if (stack.pop() === null) 
            return false
        }
    }
    return(stack.top === null)
}

// expect false
console.log(parentheses('(hello))'))
// expect true
console.log(parentheses('((hello))'))

// Extension exercise: Recognize 3 pairs of brackets: (), [], and {}. 
// These must be correctly nested; "([)]" is incorrect, and should report 
// an error at the ), stating that you were expecting a ] but found a ). 
// If this is starting to look and sound very familiar, congratulations - 
// you're beginning to write a simple language parser!

// Extension extension exercise: Also recognize 2 types of quote character: 
// "" and ''. Inside quotes, brackets aren't counted at all - in fact, 
// nothing is counted until you reach the corresponding close quote.



// Queue Drills


// Create a queue called starTrekQ and add Kirk, Spock, Uhura, Sulu, and Checkov to the queue.

function makeStarTrekQ() {
    let stQ = new Queue();
    const names = ['Kirk', 'Spock', 'Uhura', 'Sulu', 'Checkov']
    for (let i = 0; i < names.length; i ++) {
      stQ.enqueue(names[i])
    }
  
    console.log(stQ)
  }
  
  const starTrekQ = makeStarTrekQ()

// Implement a peek() function outside of the Queue class that lets you take a peek at what the 1st item in the queue is.

function peek(queue) {
    return `First item is ${queue.first.value}`
  }
  
peek(starTrekQ)

// Implement a isEmpty() function outside the Queue class that allows you to check if the queue is empty or not


function isEmpty(queue) {
    if (queue.first === null) {
      return 'List is empty'
    } else {
      return 'List is not empty'
    }
  }
  
isEmpty(starTrekQ)

// Implement a display() function outside of the Queue class that lets you display what's in the queue.

function display(queue) {
    let items = [];
  
    currNode = queue.first
    while (currNode !== null) {
      items.push(currNode);
      currNode = currNode.next;
    }
  
    return items;
  }
  
  display(starTrekQ)

// Remove Spock from the queue and display the resulting queue.

function removeItemFromQueue(queue, item) {
    if (queue.first === null) {
      return 'Queue is empty'
    } 
  
  
    if (queue.first.value === item) {
      queue.dequeue()
    } else {
        // we need to check each node's value for the items
        let currNode = queue.first
        // keep track of the previous node bc it will have to point to the currNode
        let prevNode = queue.first;
        while (currNode !== null) {
        if (currNode.value === item) {
          prevNode.next = currNode.next;
          return;
        }
        prevNode = currNode;
        currNode = currNode.next;
      }
    }
  }
  
  removeItemFromQueue(starTrekQ, 'Spock')
  console.log(display(starTrekQ))



// 8. Queue implementation using a stack
// There are many ways to implement a queue. You have learned using singly linked list, and doubly linked list. Keeping the concept of a queue in mind, implement a queue using 2 stacks and no other data structure. (You are not allowed to use a doubly linked list or array. Use your stack implementation with a linked list from above to solve this problem.)

// 9. Square dance pairing
// As people come to the dance floor, they should be paired off as quickly 
// as possible: man with woman, man with woman, all the way down the line. 
// If several men arrive in a row, they should be paired in the order they 
// came, and likewise if several women do. Maintain a queue of "spares" 
// (men for whom you have no women yet, or vice versa), and pair them as 
// appropriate.

// F Jane
// M Frank
// M John
// M Sherlock
// F Madonna
// M David
// M Christopher
// F Beyonce

// Female dancer is Jane, and the male dancer is Frank
// Female dancer is Madonna, and the male dancer is John
// Female dancer is Beyonce, and the male dancer is Sherlock
// There are 2 male dancers waiting to dance






// 10. The Ophidian Bank
// At the Ophidian Bank, a single teller serves a long queue of people. 
// New customers join the end of the queue, and the teller will serve a 
// customer only if they have all of the appropriate paperwork. Write a 
// representation of this queue; 25% of the time (random), a customer's 
// paperwork isn't quite right, and it's back to the end of the queue. 
// Show what a few minutes of the bank's lobby would look like.