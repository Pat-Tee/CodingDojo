class Node {
    constructor(valueInput) {
        this.value = valueInput;
        this.next = null;
    }
}


// BROKEN DOESNT WORK
class SLL {

    constructor() {
        this.head = null;
    }

    addToFront(value) {
        var node = new Node(value);
        node.next = this.head;
        this.head = node;
        return this;
    }

    count() {
        let counter = 0;
        let pointer = this.head;

        while (pointer !=  null) {
            pointer = pointer.next;
            counter++;
        }
        return counter;
    }

    reverse() {
        if (this.head == null) {
            console.log("Empty list.");
            return null;
        }
        else if (this.head.next == null) {
            console.log("Only one item in list.");
            return null;
        }

        let pointer = this.head;
        let count = this.count();

        while (count > 1) {
            pointer = this.head;
            this.head = pointer.next;
            pointer.next = pointer.next.next;

            for (let i = count; i > 0; i--) {
                console.log("for loop i=", i);
                pointer = pointer.next;
                console.log("pointer node value=", pointer.value);
            }
            
            this.moveTo(pointer);
            count--;
        }
        console.log("reverse finished");
    }

    recursiveReverse() {

    }

    moveTo(node) {
        let pointer = this.head;
        let prev = pointer;

        while (pointer != node) {
            prev.next = pointer.next;
            pointer.next = prev;

            prev = pointer;
            pointer = pointer.next;
        }
    }

    printValues() {
        if(this.head == null) {
            console.log("There's nothing in this list!");
            return this;
        }
        var runner = this.head;
        let list = "List";

        while(runner != null) {
            list += " --> "+ runner.value;
            runner = runner.next;
        }
        console.log(list);
        return this;
    }

}


sll = new SLL;

sll.addToFront(1).addToFront(2).addToFront(3).addToFront(4).addToFront(5);
sll.printValues();

sll.reverse();
sll.printValues();

