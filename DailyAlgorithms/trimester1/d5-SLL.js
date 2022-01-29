
class Node{
    constructor(valueInput) {
        this.value= valueInput;
        this.next = null;
    }
}

class SLL{
    constructor() {
        this.head = null;
    }

    // addtofront creates a new node, points to the head of the list, and then makes the
    // new node point to the old head node. the head of the list is then assigned the new node.
    addToFront(value) {
        var node = new Node(value);
        node.next = this.head;
        this.head = node;
        return this;
    }

    // addtoback creates a new node, points to the head of the list, and then iterates
    // through the list until the next one is NULL. it then assign that pointer, which
    // points to the last node, as the new node.
    addToBack(value) {
        var node = new Node(value);
        if (!this.head) {
            this.head = node;
            return this;
        }
        let pointer = this.head;
        while (pointer.next != null){   // if the next one is null, then the current 
            pointer = pointer.next;     // one is the last.
            }
        pointer.next = node;
        return this;
    }

    // contains() creates a pointer to start at the head of the list. while the pointer is not
    // null, it checks to see if the current node matches the value that is given.
    // When true it adds to the counter. 
    contains(value) {
        let pointer = this.head;
        let count = 0;
        while (pointer != null) {
            if (pointer.value == value) {
                count ++;
            }
            pointer = pointer.next;
        }
        
        console.log("Found '", value,"'", count, "time(s).");

        if (count > 0) 
            return true;
        
        return false;
    }

    // pointer points to head of list. while loop prints the value in the node and then
    // iterates the pointer to the next.
    display(){
        let pointer = this.head;
        while (pointer != null) {
            console.log(pointer.value);
            pointer = pointer.next;
        }
    }
}

myList = new SLL();
myList.addToBack('x');
// myList.addToFront('c').addToFront('b').addToFront('a');
myList.addToBack('x').addToBack('y').addToBack('z').addToBack('b');
// myList.contains('b');
myList.display();