class BSTNode {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}
class BST {
    constructor() {
        this.size = 0;
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
//broken
    contains(runner=this.root, value) {

        if ( runner.value === value && runner.value != null )
            return true;

        if (runner.left)
            this.contains(runner.left, value);
        else if (runner.right)
                this.contains(runner.right, value);
        else
            return false;
    }

    count(runner=this.root) {

        if (!runner)
            return 0;
        else
            return this.count(runner.right) + 1 + this.count(runner.left);
    }

}//END CLASS

tree = new BST();
tree.root = new BSTNode(5);

tree.add(1).add(2).add(3).add(4).add(6).add(7).add(8).add(9).add(10);

console.log("number of nodes in tree:", tree.count())

let value = 2;
console.log("tree contains ", value, " :", tree.contains(value));
value = 233;
console.log("tree contains ", value, " :", tree.contains(value));