class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

// a stack operates on the principal of "First In, Last Out" like waiting in line for something
class SLStack{
    constructor() {
        this.top = null
    }

    // add a given value to your stack
    push(value){
        let node = new Node(value) 
        node.next = this.top        // newly added node points to old top
        this.top = node             // top points to new node

        return this
    }

    // remove and return the top value
    pop(){
        if (!this.top) {                       //check for a stack
            console.log("The stack is empty!")
            return this
        }
        let value = this.top.value      //store value of the top
        this.top = this.top.next        //make the new top the second in the list
        return value                    //return the value of the one we removed
    }

    // return (don't remove) the top value of a stack
    returnTop() {
        if (this.top)
            return this.top.value
        else
            console.log('The stack is empty!')
            return this
    }

    printStack() {
        if (!this.top)
            console.log("The list is empty!")
        let runner = this.top
        while (runner) {
            console.log(runner.value)
            runner = runner.next
        }
        return this
    }
}

var sls = new SLStack()
console.log("\n___returnTop on empty stack___")
console.log(sls.returnTop())
console.log("\n___pop on empty stack____")
sls.pop()
sls.push(3)
sls.push(18)
sls.push(12)
sls.push(78)
sls.push(56)
sls.push(100)
sls.push(99)
sls.push(50)

console.log("\n___Original list___")
sls.printStack()

console.log("\n___pop()___")
console.log(sls.pop())
console.log("\n___list___")
sls.printStack()

console.log("\n___returnTop___")
console.log(sls.returnTop())
console.log("\n___pop pop pop pop____")
console.log(sls.pop())
console.log(sls.pop())
console.log(sls.pop())
console.log(sls.pop())

console.log("\n___list___")
sls.printStack()

console.log("\n")