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
    
    // remove the first node in the list
    removeFromFront() {
        if(!this.head) {
            console.log("There is no list!");
            return null;
        }
        
        var headToRemove = this.head;
        var newHead = this.head.next;

        this.head = newHead;
        headToRemove.next = null;
        return this;
    }

    // remove the last node in the list
    removeFromBack() {
        if(!this.head) {
            console.log("There is no list!");
            return null;
        } 
        if(this.head.next == null) {
            this.head = null;
            console.log("The list is now empty!")
        }
        var runner = this.head;
        while(runner.next.next != null) {
            runner = runner.next;
        }
        runner.next = null;
        return this;
    }

    // locate the min value and move it to the front of your list
    minToFront(){

        if(!this.head || this.head.next == null) {  //if head is null OR head.next is null, there is either no list or only one item.
            return null;
        }
        let min = this.head;
        var runner = this.head;

        while(runner.next != null) {                //tracks the node with the lowest value
            if (runner.next.value < min.value) {    //tracks the node previous to minimum
                min = runner.next;                  //our main runner to iterate through our list
            }
            runner = runner.next;
        }
        let temp = this.head.value;     //temporarily copy the head's value
        this.head.value = min.value;    //set the head's value to the minimum's
        min.value = temp;               //set the value at the min to the Head's
        return this;
    }

    minToFrontPTR(){
        if(!this.head || this.head.next == null) {
            return null; 
        }
        let min = this.head;            
        let minPrev = this.head;        
        var runner = this.head;         

        while(runner.next != null) {
            if (runner.next.value < min.value) {    //if the next node in the list has a value lower than min,
                min = runner.next;                  //replace our min with it
                minPrev = runner;                   //our current runner is previous to the next node which, as we have tested is our new minimum
            }
            runner = runner.next;
        }
        minPrev.next = min.next;
        this.addToFront(min.value);
        return this;
    }

    // locate the max value and move it to the end of your list
    maxToBack(){
        if(!this.head || this.head.next == null) {
            return null; 
        }
        let max = this.head;
        var runner = this.head;

        while(runner.next != null) {
            if (runner.next.value > max.value) {
                max = runner.next;
            }
            runner = runner.next;
        }
        let temp = runner.value;
        runner.value = max.value;
        max.value = temp;
        return this;
    }

        // locate the max value and move it to the end of your list
        maxToBackPTR(){
            if(!this.head || this.head.next == null) {
                return null; 
            }
            let max = this.head;        //tracks the node with the highest value
            let maxPrev = this.head;    //tracks the node previous to max
            var runner = this.head;     //our main runner to iterate through our list
            
            while(runner.next != null) {
                if (runner.next.value > max.value) {    //if the next node in the list has a value higher than max,
                    max = runner.next;                  //replace our max with it
                    maxPrev = runner;                   //our current runner is previous to the next node which, as we have tested is our new max
                }
                runner = runner.next;
            }
            maxPrev.next = max.next;        // maxPrev is updated to point to our max node's next node, effectively removing our max from it's old position in the list
            this.addToBack(max.value);      // add a new node with the max value to the end of the list
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

    maxToBackSVT() {
        console.log('inside minToFront')
        let runner = this.head
        let max = this.head
        let prevMax
        let maxNext
        let last
        let beforeLast
        while (runner.next) {
            if (runner.next.value > max.value) {
                max = runner.next
                prevMax = runner
                maxNext = runner.next.next
                console.log('maximum ; ', max)
                console.log('before ', prevMax, 'after ', maxNext, 'max ', max)
            }
            if(runner.next.next == null) {
                beforeLast = runner
                console.log(beforeLast)
                last = runner.next
            }
        runner = runner.next
        // }
        // last.next = max
        // beforeLast.next = am
        return this
    }

}
}
sll = new SLList();
sll.addToFront(-3).addToBack(41).addToBack(48).addToBack(-5).addToBack(-15).addToBack(5).addToBack(20).addToBack(-122).addToBack(14);
console.log("ORIGINAL LIST")
sll.printValues()
console.log("======minToFront()========< this swaps the values")
sll.minToFront();
sll.printValues()
console.log("==========addToBack(-124)=================")
sll.addToBack(-124);
sll.printValues();
console.log("============minToFrontPTR()================< this swaps the pointers")
sll.minToFrontPTR();
sll.printValues();
console.log("===========maxToBack()============< this swaps the values")
sll.maxToBack();
sll.printValues();
console.log("===============addToFront(1000)==========");
sll.addToFront(1000);
sll.printValues();
console.log("===============maxToBack()===========< this swaps the values");
sll.maxToBackSVT()
sll.printValues();