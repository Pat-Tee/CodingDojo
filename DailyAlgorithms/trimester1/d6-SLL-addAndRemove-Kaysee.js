// ```javascript
// removeFromFront() {
//     if (this.head)                  //if there is a head node and the list is not empty
//         this.head = this.head.next; //make the new head the next in the list
// return this;
// }

// removeFromBack() {
//     let runner = this.head;        
//     if (this.head){                     //if there is a head node and the list is not empty

//     while (runner.next.next != null) { //traverse to the next-to-last node
//         runner = runner.next;
//     }    
//     runner.next = null;                //next-to-last node's next value made null, so next-to-last node is now the last node in the list
//     }
// return this;
// }
// ```

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
    
    removeFromFront() {
        if (this.head)                  //if there is a head node and the list is not empty
            this.head = this.head.next; //make the new head the next in the list
        return this;
    }
    
    removeFromBack() {
        let runner = this.head;        
        if (this.head){                     //if there is a head node and the list is not empty
    
        while (runner.next.next != null) { //traverse to the next-to-last node
            runner = runner.next;
        }    
        delete runner.next
        runner.next = null;                //next-to-last node's next value made null, so next-to-last node is now the last node in the list
        }
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
sll.addToFront(-3)
sll.addToFront(-122)
sll.addToFront(41)
sll.addToBack(48)
sll.addToBack(-5)
sll.addToBack(-15)
sll.addToBack(14)
console.log("===================\n|    Full List    |\n===================")
sll.printValues()
console.log("===================\n| removeFromBack  |\n===================")
sll.removeFromBack()
sll.printValues()
console.log("===================\n| removeFromFront |\n===================")
sll.removeFromFront()
sll.printValues()
console.log("=====================")