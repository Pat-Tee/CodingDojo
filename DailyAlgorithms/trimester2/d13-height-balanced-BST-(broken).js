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

    count(runner=this.root) {

        if (!runner)
            return 0;
        else
            return this.count(runner.right) + 1 + this.count(runner.left);
    }

    // getHeight() {

    //     let leftHeight = this.height(this.root.left);
    //     let rightHeight = this.height(this.root.right);

    //     if (leftHeight > rightHeight)
    //         return leftHeight;
    //     else
    //         return rightHeight;
    // }

    height(runner=this.root, height=1) {
        let left = 0, right = 0;
        if (runner) {
            left = this.height(runner.left, height++);
            right = this.height(runner.right, height++);
            if (left > right)
                return left;
            else
                return right;
        }
        else {
            return height;
        }
    }

    isBalanced(runner=this.root) {

        let leftHeight = this.getHeight(this.root.left);
        let rightHeight= this.getHeight(this.root.right);
        let difference = leftHeight - rightHeight;

        if ( (difference > -1) && (difference < 1) )
        return true;
        
    }

}//END CLASS

tree = new BST();
tree.root = new BSTNode(50);

tree.add(40).add(30).add(20);

//balanced tree with longer inner leg
//tree.add(10).add(20).add(30).add(40).add(60).add(70).add(80).add(90).add(100).add(35).add(36).add(33).add(34);
//tree.add(44).add(54).add(23).add(15).add(67).add(78).add(76).add(99).add(90).add(100);

console.log("number of nodes in tree:", tree.count())

console.log("tree height: ", tree.height() );

//console.log("tree is balanced: ", tree.isBalanced() );

// Matthew Dgugly's solution
// class BSTNode {
//     constructor(value) {
//       this.value = value
//       this.left = null
//       this.right = null
//     }
//   }
//   class BST {
//     constructor() {
//       this.root = null
//       this.valArr = []
//       this.size = 0
//       this.tallness = 0
//     }

//     // Inserts a value into the tree
//     // positioning based on it's value.

//     add(value) {

//       if (this.valArr.includes(value)) { console.log("duplicate"); return }
//       this.valArr.push(value)
//       let runner = this.root
//       if (runner == null) {
//         this.root = new BSTNode(value)
//       }
//       else {
//         while (runner != null) {
//           if (runner.value < value) {
//             if (runner.right == null) { runner.right = new BSTNode(value); return }
//             runner = runner.right
//           }
//           else if (runner.value > value) {
//             if (runner.left == null) { runner.left = new BSTNode(value); return }
//             runner = runner.left
//           }
//         }
//       }
//     }
//     findMin() {
//       let runner = this.root
//       while (runner.left != null) { runner = runner.left }
//       return runner.value
//     }

//     findMax() {
//       let runner = this.root
//       while (runner.right != null) { runner = runner.right }
//       return runner.value
//     }
//     size() {
//       return this.valArr.length
//     }
//     contains(value) {
//       let runner = this.root
//       while (runner != null) {
//         if (value < runner.value) { runner = runner.left }
//         else if (value > runner.value) { runner = runner.right }
//         else if (value == runner.value) { return true }
//       }
//       return false
//     }
//     height(node = this.root, curheight = 0) {
//       if (node.right == null || node.left == null) { if (curheight > this.tallness) { this.tallness = curheight } return this.tallness }

//       curheight++; return this.height(node.right, curheight), this.height(node.left, curheight)

//     }

//     balanced() {
//       if (this.root.left == null && this.root.right == null) { return true }
//       this.tallness = 0;
//       let leftHeight = this.height(this.root.left)
//       this.tallness = 0;
//       let rightHeight = this.height(this.root.right)
//       if (Math.abs(leftHeight - rightHeight) > 1) { return false }
//       else return true
//     }

//     printTree(node = this.root) {
//       console.log("Current node = ", node.value);
//       if (node.left != null) {
//         this.printTree(node.left);
//       }
//       if (node.right != null) {
//         console.log("Right node of ", node.value, " = " + node.right.value);
//         this.printTree(node.right);
//       }
//     }
//   }

//alex S plus Nick, solution
height(rootNode = this.root) {
    if (rootNode === null) {
        return 0;
    } else {
        var leftHeight = this.height(rootNode.left)
        var rightHeight = this.height(rootNode.right)
        if (leftHeight > rightHeight) {
            return leftHeight + 1
        } else {
            return rightHeight + 1
        }
    }
}