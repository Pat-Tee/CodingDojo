class Node {
    constructor(value) {
        this.next = null;
        this.prev = null;
        this.value = value;
    }
}

class DLL {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addFront(value) {
        var node = new Node(value);

        if (this.head == null) {        // if head is null, list is empty
            this.head = node;           // head and tail point to new, single node
            this.tail = node;
            this.length++;
            return this;
        }
        node.next = this.head;          // new node points to the old head
        this.head.prev = node;          // old head is not the head, so make its .prev point to new node
        this.head = node                // make new node the new head
        this.length++;                  // increase length of list counter
        return this;
    }
    
    addBack(value) {
        var node = new Node(value);

        if (this.head == null) {
            this.head = node;
            this.tail = node;
            this.length++;
            return this;
        }
        node.prev = this.tail;
        this.tail.next = node;
        this.tail = node;
        this.length++;
        return this;
    }
    
    removeFront() {
        if (this.head == null) {                // if head is null, list is empty
            console.log("List is empty.");
            return this;
        } else 
            if (this.head.next == null) {       // if head.next is null, list only has one item
                this.head = null;               // make head null, now the list is empty
                this.length--;                  // decrease count
                return this;
            }

        this.head = this.head.next;             // make the list head point to the next item
        this.head.prev = null;                  // make the next item's .prev point to null
        this.length--;                          // decrease count
        return this;
    }

    removeBack() {
        if (this.tail == null) {
            console.log("List is empty.");
            return this;
        } else 
            if (this.tail.prev == null) {
                this.tail = null;
                this.length--;
                return this;
            }

        this.tail = this.tail.prev;
        this.tail.next = null;
        this.length--;
        return this;
    }

    printForwards() {
        let pointer = this.head;                        // start at list's head
        let output = "List.Head -> ";                   // initialize a string to record list output
        for (let i = 0; i < this.length; i++) {         // iterate through list using the length count, just beacuse for loops are fun
            output += pointer.value+" -> ";             // push node value and a separator to string output
            pointer = pointer.next;                     // advance the pointer to next node
            //console.log(pointer);                     // debug
        }
        output+="NULL";                                 // append the output string with NULL to demarcate the end of the list
        console.log(output);                            // print the output string to console
    }

    printBackwards() {
        let pointer = this.tail;
        let output = "List.Tail -> ";
        for (let i = 0; i < this.length; i++) {
            output += pointer.value+" -> ";
            pointer = pointer.prev;
            //console.log(pointer);
        }
        output+="NULL";
        console.log(output);
    }
}//END CLASS

var dll = new DLL();

dll.addFront(4).addFront(99).addFront(14).addFront(5);
dll.printForwards();
dll.addBack(10).addBack(1000).addBack(54).addBack(7);

console.log('\n');
dll.printForwards();
dll.printBackwards();

console.log('\n');
console.log('remove 2 nodes from the front:');
dll.removeFront().removeFront();
dll.printForwards();

console.log('\n');
console.log('remove 2 nodes from the back:');
dll.removeBack().removeBack();
dll.printBackwards();