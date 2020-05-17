class _Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
    }

    enqueue(data) {
        const node = new _Node(data)

        if (this.first === null) {
            this.first = node;
        }

        if (this.last) {
            // point the last item to the new node
            this.last.next = node;
        }

        // make the new node the last item on the queue
        this.last = node;
    }

    dequeue() {
        if (this.first === null) {
            return;
        }

        // save the node getting removed
        const node = this.first;
        // set the next item in line as the new first item
        this.first = this.first.next;
        // if this is the last item in the queue
        if (node === this.last) {
            this.last = null;
        }
        return node.value;
    }
}