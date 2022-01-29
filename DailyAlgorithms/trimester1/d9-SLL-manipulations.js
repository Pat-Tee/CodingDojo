class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class SLList{
    constructor(){
        this.head = null
    }

    addToFront(value) {
        var node = new Node(value);
        node.next = this.head;
        this.head = node;
        return this;
    }

    // given a value, add it to the back of your singly linked list
    // what if the list is empty?
    addToBack(value) {
        var node = new Node(value);
        if(this.head == null) {
            this.head = node;
        }
        var runner = this.head;
        while(runner.next != null) {
            runner = runner.next;
        }
        runner.next = node;
        return this;
    }

    // find and return the second to last value in your SLL
    secondToLast() {
        if (!this.head)
            return null;
        let runner = this.head;             //start at the head
        if (runner.next == null)            //if the next node is null, we have one node
            return this.head.value          //return because this one node is simultaneously first, last, second to last, second to first, its everything, the alpha, the omega, it's the one, baby!
        while (runner.next.next != null) {  //if the next node's next node is not null
            runner = runner.next;           //we advance the current node to the next one.
                                            //if the next node's next node IS null, we know we are at the second to last node in the list and the loop will break
        }
        return runner.value;                //return the value of our second-to-last node
    }

    // given a list of integers, remove the negative values from the list
    removeNegatives() {
        if (!this.head)
            return null;
        let runner = this.head;                 //start at the head
        let prevRunner = runner;                //keep track of the previous node

        while (runner != null) {
            if (runner.value < 0) {             //if current node's value is negative
                if (runner == this.head)        //then if we are still at the head node
                    this.head = runner.next;    //we need to reassign the head to the next node, as this one's value is negative and is being removed
                prevRunner.next = runner.next;  //the previous node should now point to the next node, and not to the current node
            } else                              //if the current node's value is non-negative
                prevRunner = runner;            //the previous node is updated to be the current node
            runner = runner.next;               //and the current node is advanced to the next one
        }
        return this;
    }

    removeNegativesKaysee() {

        while(this.head != null && this.head.value < 0) {
            this.head = this.head.next
        }

        if(this.head == null) {
            console.log("There's nothing left in this list!")
            return this
        }
        var runner = this.head
        while(runner.next != null) {
            if(runner.next.value < 0) {
                runner.next = runner.next.next
            } else {
                runner = runner.next
            }
        }
        return this
    }
    
    // print the singly linked list
    printValues() {
        if(this.head == null) {
            console.log("There's nothing in this list!");
            return this;
        }
        var runner = this.head;
        while(runner != null) {
            console.log(`${runner.value} --> `);
            // console.log(runner.value + " --> ");
            runner = runner.next;
        }
        return this;
    }

}

const sll = new SLList();
console.log("==================Original list:========================")

sll.addToFront(-122)
// sll.addToFront(41)
sll.addToFront(-3)
// sll.addToBack(48)
sll.addToBack(-5)
sll.addToBack(-15)
// sll.addToBack(14)
// sll.addToBack(41)
sll.addToBack(-3)
sll.addToBack(-125)
sll.addToBack(-23)
sll.addToBack(-17)
// sll.addToBack(100)
// sll.addToBack(14)
sll.printValues()
console.log("==========================================")
console.log("The list without any negative values is:")
sll.removeNegativesKaysee()
sll.printValues()
console.log("==========================================")
console.log('The second to last value in the list is: ', sll.secondToLast())