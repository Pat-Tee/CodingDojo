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

    enqueue(value) {
        var newNode = new Node(value);

        if (!this.head){
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            this.tail = this.tail.next;
        }
        return this;
    }

    dequeue() {
        if(!this.head) {
            console.log("Nothing in this queue!");
            return null;
        }
        var temp = this.head.value;
        this.head = this.head.next;
        return temp;
    }

    size(){
        var runner = this.head;
        var count = 0;
        while (runner){
            count++;
            runner = runner.next;
        }
        return count;
    }
    
    displayQueue(){
        if (!this.head){
            console.log("This queue is empty.");
        }
        else {
            var runner = this.head;
            var str = "";
            while(runner){
                str += runner.value + " -> ";
                runner = runner.next;
            }
            str += "null";
            console.log(str);
        }
    }


        // Reorder SLQueue values to alternate first half values with second half values, in order. For example: (1,2,3,4,5) becomes (1,4,2,5,3). You may create one additional SLQueue, if needed.

        // 1 --> 2 --> 3 --> 4 --> 5 --> 
        // 1 --> 2 --> 3 -->    |      4 --> 5 --> 
        // 1 --> 4 --> 2 --> 5 --> 3 --> 

    interleaveQueue(){
        // your code here
        let runner = this.head
        let list = []
        let list2 = []
        let mid = this.size() / 2 + 1
        let j = mid

        console.log("j = ", j)

        while (runner) {
            list.push(runner)
            console.log(runner.value)
            runner = runner.next
        }

        runner = this.head
        for (let i = 0; i < mid - 1; i++) {
            runner = runner.next
        }
        console.log("mid runner value: ", runner.value)

        while (runner) {
            list2.push(runner)
            runner = runner.next
        }

        var count = Math
        j = mid
        console.log("mid", mid)
        let i = 0
        // while (list2[j]) {
        //     console.log("list", j,":", list[j])
        //     console.log("list", i,":", list[i])
        //     list[i].next = list2[j]
        //     list2[j].next = list[i+1]
        //     i++
        //     j++
        // }
        let temp = null
        for (let i = 0; i < mid - 1; i++) {
            console.log("list["+i+"] :", list[i].value)
            console.log("    list2["+i+"] :", list2[i].value)
            temp
            list[i].next = list2[i]
            list2[i].next = list[i+1]
        }
    }
}


var q = new SLQueue();
console.log("___Original list___")
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);
q.enqueue(5);
q.enqueue(6);
q.displayQueue()
console.log("___interleave()___")
q.interleaveQueue();
q.displayQueue()

//1 - 4 - 2 - 5 - 3 - 6 