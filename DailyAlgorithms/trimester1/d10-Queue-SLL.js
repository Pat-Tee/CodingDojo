//==============================================
class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

// a queue operates on the principal of "First In, First Out" like waiting in line for something
class SLQueue {
    constructor() {
        this.head = null
        this.tail = null
    }

    // add a node with the given value to the queue
    enqueue(value) {
        // your code here
        let node = new Node(value)
        if (!this.head) {
            this.head = node
            this.tail = node
            return this
        }
        this.tail.next = node
        this.tail = node
    }

    // remove and return the front value from the queue
    dequeue() {
        let value = null
        if (this.head)
            value = this.head.value
        else {
            console.log('Empty list')
            return null
        }
        this.head = this.head.next
        return (value)
    }

    //return true/false based on whether you find the given value in a queue
    contains(value) {
        // your code here
        let found = false
        if (!this.head) {
            console.log('Empty list.')
            return this
        }
        let runner = this.head

        while (runner) {
            if (runner.value === value)
                return true
            runner = runner.next
        }
        return found
    }

    // find the size/length of a queue
    size(){
        // your code here
        let count = 0;
        let runner = this.head
        while(runner) {
            count++
            runner = runner.next
        }
        return count
    }

    displayQueue(){
        // your code here
        if(this.head == null) {
            console.log("There's nothing in this list!");
            return this;
        }
        var runner = this.head;
        let str = ""
        while(runner != null) {
            str += `${runner.value} --> `
            runner = runner.next;
        }
        console.log(str)
        return this;
    }

}


var q = new SLQueue();
q.displayQueue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);
q.enqueue(5);
q.enqueue(6);
console.log('\n_______Original List_______\n')
q.displayQueue();
console.log('\n_______dequeue()_______\n')
q.dequeue();
q.displayQueue();
console.log('\n_______dequeue()_______\n')
q.dequeue();
q.displayQueue();
console.log('\n_______dequeue()_______\n')
q.dequeue();
q.displayQueue();
console.log('\n_______size()_______\n')
console.log(q.size());
console.log('\n_______contains(3)_______\n')
console.log(q.contains(3));
console.log('\n_______contains(6)_______\n')
console.log(q.contains(6));

//==============================================
