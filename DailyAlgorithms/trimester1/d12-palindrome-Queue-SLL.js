class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

// a queue operates on the principal of "First In, First Out" like waiting in line for something
class SLQueue{
    constructor() {
        this.head = null
        this.tail = null
    }

    // add a node with the given value to the queue
    enqueue(value) {
        var newNode = new Node(value);

        if (!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else {
        this.tail.next = newNode;
        this.tail = this.tail.next;
        return this;
        }
    }

    // remove and return the front value from the queue
    dequeue() {
        if(!this.head) {
            console.log("Nothing in this queue!");
            return null;
        }
        var temp = this.head.value;
        this.head = this.head.next;
        return temp;
    }

    empty() {
        this.head = null
        this.tail = null
    }

    displayQueue(){
        if (!this.head) {
            console.log("This queue is empty.");
            return this;
        }

        if (this.head == this.tail){
            console.log("This queue has one entry.");
            return this;
        }

        var runner = this.head;
        var str = "";
        while(runner){
            str += runner.value+' ';
            runner = runner.next;
            }
        console.log(str);
        return this
    }

    // displayQueue() {
    //     if (!this.head)
    //         console.log("The list is empty!")
    //     else
    //     if (this.head == this.tail) {       //if head points to tail, we have a single node. without this the display enters an infinite loop
    //         console.log(this.head.value)
    //         return this
    //     }
    //     let runner = this.head

    //     while (runner != null) {
    //         console.log(runner.value)
    //         runner = runner.next
    //     }
    //     return this
    // }
    // given a queue, determine whether or not the values therein are a pallindrome 
    // Ex: 1 --> 2 --> 3 --> 2 --> 1 --> null
    // any values that are in the same order going forwards as backwards is a pallindrome, doesn't need to just be letters
    isPallindrome() {
        let values = []                     //create a list for the queue values
        let runner = this.head              //head of the queue

        if (!this.head)                     //if no head, we have an empty queue
            return false

        if (this.head == this.tail)         //if head points to tail, we only have one entry in the queue
            return true

        while (runner) {                    //while not null
            values.push(runner.value)       //push the values of the queue into a list
            runner = runner.next            //advance our pointer to the next node
        }

        let j = values.length -1;           //j holds the index of the last value in the list
        for (let i=0; i<j; i++) {           //while i is less than j
            if (values[i] !== values[j-i])  //if the value in the first half of the list doesn't match the value in the mirrored position from the last half of the list
                return false;               //we do not have a palindrome
        }
        return true;                        //if we get here, we do have a palindrome
        }
}

var q = new SLQueue();
console.log('\n____Empty queue____')
q.displayQueue();
console.log("is a palindrome? ", q.isPallindrome());

console.log('\n____Single entry queue____')
q.enqueue(1);
q.displayQueue();
console.log("is a palindrome? ", q.isPallindrome());

q.empty()
console.log('\n____Palindrome queue____')
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(3);
q.enqueue(2);
q.enqueue(1);
q.displayQueue();
console.log("is a palindrome? ", q.isPallindrome());

q.empty()
console.log('\n____non-Palindrome queue____')
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(3);
q.enqueue(2);
q.enqueue(2);
q.displayQueue();
console.log("is a palindrome? ", q.isPallindrome());

q.empty()
console.log('\n____Palindrome queue____')
q.enqueue('r');
q.enqueue('a');
q.enqueue('c');
q.enqueue('e');
q.enqueue('c');
q.enqueue('a');
q.enqueue('r');
q.displayQueue();
console.log("is a palindrome? ", q.isPallindrome());