class BSTNode {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}
class BST {
    constructor() {
        this.root = null
    }
    // Inserts a value into the tree
    // positioning based on it's value.

    add(value) {
        let runner = this.root;

        if (!this.root) {
            this.root = new BSTNode(value);
            return this;
        }

        while (runner) {
            if ( value < runner.value ){
                if ( runner.left )
                    runner = runner.left;
                    else {
                    runner.left = new BSTNode(value);
                    return this;
                    }
            } else
                if ( runner.right )
                    runner = runner.right;
                    else {
                    runner.right = new BSTNode(value);
                    return this;
                    }
        }
        return this;
    }

    findMin() {
        let runner = this.root;
        let min = 0;
        if (runner)
            min = this.root.value;
            else {
            console.log("Tree is empty.");
            return this;
            }

        while (runner) {
            if ( runner.value < min )
                min = runner.value;
            runner = runner.left;
        }
        console.log("Minimum value in tree is ", min);
        return this;
    }

    findMax() {
        //Find max value
        let runner = this.root;
        let max = 0;
        if (runner)
            max = this.root.value;
            else {
            console.log("Tree is empty.");
            return this;
            }

        while (runner) {
            if ( runner.value > max )
                max = runner.value;
            runner = runner.right;
        }
        console.log("Maximum value in tree is ", max);
        return this;
    }

    printTree(node=this.root) {
        console.log("Current node = ", node.value);
        if (node.left != null) {
            console.log("Left node of ", node.value, " = " + node.left.value);
            this.printTree(node.left);
        }
        if (node.right != null) {
            console.log("Right node of ", node.value, " = " + node.right.value);
            this.printTree(node.right);
        }
    }

    // printTree2() {
    //     let runner = this.root;
    //     let arr = [];

    //     while ( runner ) {

    //         runner = runner.left
    //         if (runner)

    //     }
    // }

    countNodes(node) {
        
        if (node.left && node.right)
            return this.countNodes(node.left) + this.countNodes(node.right);
        else
            return 1;
    }
}


tree = new BST();
tree.root = new BSTNode(15);

//tree.add(1).add(2).add(3).add(4).add(6).add(7).add(8).add(9).add(10);

tree.add(14).add(21).add(23).add(22).add(16).add(7).add(8).add(5).add(10);
tree.printTree();
tree.findMin();
tree.findMax();

console.log( tree.countNodes(tree.root) );



//1                      5
//2                    4   6
//3                  3       7
//4                2           8
//5              1               9
//6                                10

