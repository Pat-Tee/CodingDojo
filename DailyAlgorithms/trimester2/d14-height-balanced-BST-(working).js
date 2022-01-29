// find height/tiers. 
// check for balance; i.e. if right side and left side have +-1 the same height.

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
        //console.log("Current node = ", node.value);
        if (node.left != null) {
            console.log("Left node of ", node.value, " = " + node.left.value);
            this.printTree(node.left);
        }
        if (node.right != null) {
            console.log("Right node of ", node.value, " = " + node.right.value);
            this.printTree(node.right);
        }
    }

    count(runner=this.root) {

        if (!runner)
            return 0;
        else
            return this.count(runner.right) + 1 + this.count(runner.left);
    }

    getHeight(runner = this.root) {
        if (runner === null) {                                // check if runner has a node
            return 0;
        } else {
            var leftHeight = this.getHeight(runner.left)      // set left side height recursively
            var rightHeight = this.getHeight(runner.right)    // set right side height recursively
            if (leftHeight > rightHeight) {                   // return the greater height of the two sides, + 1 to height count;
                return leftHeight + 1
            } else {
                return rightHeight + 1
            }
        }
    }

    isBalanced(runner=this.root) {

        if (runner) {
            let leftHeight = this.getHeight(runner.left);           // set left side height
            let rightHeight= this.getHeight(runner.right);          // set right side height
            let difference = leftHeight - rightHeight;              // set difference between the two sides

            if ( (difference > -1) && (difference < 1) )            // check if difference is greater than 1
                return true;
            else 
                return false;
        }
    }

}//END CLASS

tree = new BST();
tree2 = new BST();
tree.root = new BSTNode(50);
tree2.root = new BSTNode(50);

//unbalanced tree
tree.add(40).add(30).add(20); //left side leg
tree.add(60).add(70).add(80).add(90); //right side 

console.log("\n");
console.log("number of nodes in tree:", tree.count())
console.log("tree height: ", tree.getHeight() );
console.log("tree is balanced: ", tree.isBalanced() );

//balanced tree with uneven leg count
tree2.add(40).add(30).add(20); //left side leg
tree2.add(60).add(70).add(80).add(65); //right side leg

console.log("\n");
console.log("number of nodes in tree2:", tree2.count())
console.log("tree2 height: ", tree2.getHeight() );
console.log("tree2 is balanced: ", tree2.isBalanced() );
//tree.printTree(tree.root, output);

