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

    // find the given location in your list and append (add after) that location the given value as a new node
    appendValue(loc, val){
        let runner = this.head;         
        let i = 1;                      //make a counter to track our location
        if (loc < 1)
            return null;

        for (i; i < loc; i++) {         //move the runner to the requested location
            if (runner.next != null) {
                runner = runner.next;
            } 
        }

        let temp = runner.next;     //store the pointer to the next in list
        runner.next = new Node();   //point to a new node
        runner.next.value = val;    //give the new node the requested value
        runner.next.next = temp;    //point the new node to the next in list
        return this;
    }

    // find the given location in your list and prepend (add before) that location the given value as a new node
    prependValue(loc, val){

        let runner = this.head;         
        let i = 1;                      //make a counter to track our location
        if (loc < 1)
            return null;
    
        for (i; i < loc-1; i++) {       //move runner to the 1 node before the requested location.
            if (runner.next != null) { 
                runner = runner.next;
            } 
        }

        let temp = runner.next;     //store the pointer to the next in list
        runner.next = new Node();   //point to a new node
        runner.next.value = val;    //give the new node the requested value
        runner.next.next = temp;    //point the new node to the next in list
        return this;
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
// sll.addToFront(-3)
// sll.addToFront(-122)
// sll.addToFront(41)
// sll.addToBack(48)
// sll.addToBack(-5)
// sll.addToBack(-15)
// sll.addToBack(14)
// sll.printValues()
// console.log("==========================================")
// sll.appendValue(2, 15)
sll.appendValue(1, 99)
sll.printValues()
console.log("==========================================")
// sll.prependValue(2, 15)
// sll.printValues()
// sll.prependValue(3, 100)
// sll.printValues()