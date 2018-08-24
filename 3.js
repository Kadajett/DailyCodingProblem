/**
 * Good morning! Here's your coding interview problem for today.

This problem was asked by Google.

Given the root to a binary tree, implement serialize(root), which serializes the tree into a string, and deserialize(s), 
which deserializes the string back into the tree.

For example, given the following Node class

class Node:
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
The following test should pass:

node = Node('root', Node('left', Node('left.left')), Node('right'))
assert deserialize(serialize(node)).left.left.val == 'left.left'
 */


/**
 * How do I serialize a tree into a string?
 * How would I de-serialize it?
 */



/**
 * @param {object} data
 * @param {object} left
 * @param {object} right
 */
class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.right = right;
        this.left = left;
    }
}

/**
 * Binary Search Tree
 */
class BST {
    constructor() {
        this.root = null
    }
    add(data) {
        const node = this.root;
        if (node === null) {
            this.root = new Node(data);
            return;
        }

        const searchTree = function (node) {
            if (data < node.data) {
                if (!node.left) {
                    node.left = new Node(data);
                    return;
                }
                return searchTree(node.left);
            } else if (data > node.data) {
                if (!node.right) {
                    node.right = new Node(data);
                    return;
                }
                return searchTree(node.right)
            }

            return null;
        }

        return searchTree(node)
    }

    findMin() {
        let current = this.root;
        while (current.left) {
            current = current.left;
        }
        return current.data;
    }

    findMax() {
        let current = this.root;
        while (current.right) {
            current = current.right;
        }
        return current.data;
    }

    find(data) {
        let current = this.root;
        while (current && current.data !== data) {
            if (data < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
            // This is probably unnecessary
            // if(!current) {
            //     return current;
            // }
        }
        return current;
    }

    isPresent(data) {
        if (this.find(data)) {
            return true;
        }
        return false;
    }

    remove(data) {
        const removeNode = function (node, data) {
            if (!node) {
                return null;
            }
            if (data == node.data) {

                // if node has no children
                if (!node.left && !node.right) {
                    return null;
                }

                // node has no left child
                if (!node.left) {
                    return node.right;
                }
                // no right child
                if (!node.right) {
                    return node.left;
                }

                // node has two children
                let tempNode = node.right;
                while (tempNode.left) {
                    tempNode = tempNode.left;
                }
                node.data = tempNode.data;
                node.right = removeNode(node.right, tempNode.data);
                return node;
            } else if (data < node.data) {
                node.left = removeNode(node.left, data);
                return node;
            }
            node.right = removeNode(node.right, data);
            return node;
        }

        this.root = removeNode(this.root, data);
    }

    levelOrder() {
        if (!this.root) return [];
        let array = [];

        search(this.root, 1, 1);

        function search(node, level, index) {
            if (node) {
                const count = Math.pow(2, level - 1);
                if (array.length < level) {
                    array.push(Array(count).fill(""))
                }
                let arr = array[level - 1];
                arr[index - 1] = node;
                const leftIndex = 2 * index - 1;
                const rightIndex = 2 * index;
                search(node.left, level + 1, leftIndex);
                search(node.right, level + 1, rightIndex);
            }

            return;
        }

        return array;
    }

    serialize(root) {
        let result = [];
        this.serializer(root || this.root, result);

        return result.join(",");
    }

    serializer(node, output) {
        if (!node) {
            // output.push('#');
            return;
        }

        output.push(node.data);
        this.serializer(node.left, output);
        this.serializer(node.right, output);
    }

    deserialize(str) {
        let testArray = str.split(',');


        console.time('bst2.deserialize');
        testArray.forEach(el => {
            if (el !== '#') {
                this.add(parseInt(el));
            }
        });
        console.timeEnd('bst2.deserialize');
    }
}

const bst = new BST();
const bst2 = new BST();



var arr = []
while (arr.length < 20000) {
    var randomnumber = Math.floor(Math.random() * 50000) + 1;
    if (arr.indexOf(randomnumber) > -1) continue;
    arr[arr.length] = randomnumber;
}

arr.forEach(el => {
    bst.add(el);
})

// bst.remove(4);

// console.log(bst.findMin());
// console.log(bst.findMax());
// bst.remove(7)
// console.log(bst.findMax());
// console.log(bst.isPresent(4));

bst2.deserialize(bst.serialize())



console.time('bst2SerializeTime');
bst2.serialize();
console.timeEnd('bst2SerializeTime');

console.log(`1 max: ${bst.findMax()}, 2 max: ${bst2.findMax()}`);
console.log(`1 min: ${bst.findMin()}, 2 min: ${bst2.findMin()}`);