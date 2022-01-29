class MinHeap{
    constructor(){
        this.heap = [null]
    }
        //from here, add logic to see if the value that was inserted is at the right place following the rules of a min heap. 
        //calculate the parent from the current index (new value is pushed to last index--> this.heap.length-1)
        //while the parent is greater than the child, do some swapping
    // Svetlana
    // insert(val){
    //     this.heap.push(val);

    //     if(this.heap.length == 2){
    //         return this;
    //     }

    //     let newValIndex = this.heap.length-1;
    //     let parentIndex = Math.floor(newValIndex /2);
        
    //     if(this.heap[parentIndex] < this.heap[newValIndex]){
    //         return this;
    //     } else {
    //         while(this.heap[parentIndex] > this.heap[newValIndex]){
    //             [ this.heap[parentIndex] , this.heap[newValIndex] ] = [this.heap[newValIndex], this.heap[parentIndex]];
    //             newValIndex = parentIndex;
    //             parentIndex = Math.floor(newValIndex / 2);
    //         }
    //     }
    //     return this;
    // }
//     Instructor_SaurabhD
// class MinHeap{
//     constructor(){
//         this.heap = [null]
//     }

    insert(val){
        //push the val into the heap
        this.heap.push(val);
        // console.log('the heap is ', this.heap);
        
        if(this.heap.length == 2){
            return this;
        }

        
        //calculate the parent from the current index (new value is pushed to last index--> this.heap.length-1)
        let newValIndex = this.heap.length-1;
        let parentIndex = Math.floor(newValIndex /2);
        
        if(this.heap[parentIndex] < this.heap[newValIndex]){ //is this in a heap format? if so, we're good to go, return out of the function
            return this;
        } else { //if it is not following the rules of a heap, then while the parent is greater than the child, do some swapping
            while(this.heap[parentIndex] > this.heap[newValIndex] && parentIndex>0){
                [ this.heap[parentIndex] , this.heap[newValIndex] ] = [  this.heap[newValIndex], this.heap[parentIndex]];

                newValIndex = parentIndex; //set the new child index as we go up the heap
                parentIndex = Math.floor(newValIndex / 2); //set the new parent index
            }
        }
        return this;

    }

    sort() {
        let heap = this.heap;                                       // just to avoid typing this.
        //let max = Math.floor(this.heap.length/2)+1;                 // define max as half the array length plus 1 so that  
        let max = 100;                                                            // we don't go out of bounds in our forward looking math
        for (let i=1; i < max; i++) {                               // we keep i=0 as a null index, so start at 1
            if (heap[i] > heap[i*2]) {                              // if value at heap[i] is larger than its child, at heap[i*2], 
                                                                    // which is it's left side child, then swap
                [heap[i*2], heap[i]] = [heap[i], heap[i*2]];
                console.log("left side swap");
            }
            else if (heap[i] > heap[i*2+1]) {                       // else, if value at heap[i] is larger than its child, at heap[i*2+1], 
                                                                    // which is it's right side child, then swap
                [heap[i*2+1], heap[i]] = [heap[i], heap[i*2+1]];
                console.log("right side swap");
            }
        }
    }

    remove() {
        [this.heap[1], this.heap[this.heap.length-1] ] = [ this.heap[this.heap.length-1], this.heap[1] ];   // swap our first index val with the last one in order to
        this.heap.pop();                                                                                    // pop that value off of the heap array
        this.sort();                                                                                        // resort the heap array
    }

    show() {
        let heap = this.heap;
        const space = " ";
        const rowCount = this.heap.length>>2;
        let thisLine = "";
        // let y = heap.length / rowCount;
        let y = rowCount;
        // let leftSpace = heap.length * 2 / y;
        let leftSpace = heap.length / 4;
        console.log("heap length(including [0]:null) === "+ heap.length + ", and therefore has this many rows: "+ rowCount);
        
        const numDigits = (val)=>{
            let digitCount = 1;
            while (val>9) {
                digitCount++;
                val /= 10;
            }
            return digitCount;
        }

        const padding=(max, digits=0)=>{
            let pad = "";
            for (let x=0; x < max-digits; x++) {
                pad += space;
            }
            return pad;
        }

        for (let i = 1; i < heap.length; i<<=1) {
            thisLine += padding(rowCount*(y-1));
            for (let j = i; j < i*2; j++) {
                thisLine += padding(y) + heap[j] + padding(y);
            }
            console.log(thisLine);
            thisLine = "";
            y--;
        }
    };
}

let heap = new MinHeap()

heap.insert(6).insert(50).insert(30).insert(2).insert(15).insert(42).insert(13).insert(33).insert(99).insert(77).insert(66).insert(60).insert(49).insert(55).insert(4);
console.log("original heap: ", heap);

// heap.remove();
// console.log("removed one item, heap: ", heap);
heap.show();
