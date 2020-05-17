class Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

class Stack {
    constructor() {
        this.top = null;
    }

    push(data) {
        // if the stack is empty, the node will be the top of the stack
        if (this.top === null) {
            this.top = new _Node(data, null);
            return this.top;
        }

        // otherwise, create a new node and have pnt point to the top
        const node = new _Node(data, this.top);
        this.top = node;
    }

    pop() {
        // to remove the top of the stack, you have to point the the pointer to 
        // the next item and that next item becomes the top of the stack
        const node = this.top;
        this.top = node.next;
        return node.data;
    }
}