/**
 * An XOR linked list is a more memory efficient doubly linked list. 
 * Instead of each node holding next and prev fields, it holds a field named both, 
 * which is an XOR of the next node and the previous node. Implement an XOR linked list; 
 * it has an add(element) which adds the element to the end, and a get(index) which returns the node at index.
 * If using a language that has no pointers (such as Python), you can assume you have access to 
 * get_pointer and dereference_pointer functions that converts between nodes and memory addresses.
 */

/**
 * gonna make a linked list first as a refresher.
 */

// class LinkedList {
//     constructor() {
//         this.head = null;
//         this.tail = null;
//     }

//     addToHead(value) {
//         const newNode = new Node(value, this.head, null);
//         if(this.head) this.head.prev = newNode;
//         else this.tail = newNode;

//         this.head = newNode;
//     }
//     addToTail(value) {
//         const newNode = new Node(value, null, this.tail);
//         if(this.tail) this.tail.next = newNode;
//     }
// }

// class Node {
//     constructor(value, next, prev) {
//         this.value = value;
//         this.next = next;
//         this.prev = prev;
//     }
// }





/**
 * I don't have access to pointers here, so I am going to use an array. 
 * https://stackoverflow.com/questions/16138998/how-exactly-does-a-xor-linked-list-work
 */
class XORLinkedList {
    constructor() {
        /**
         * this is used to simulate a memory address for the bitwise operators
         */
        this.array = [];
        this.array[1111101000] = false;
        this.head = null;
    }

    addToHead(head, value) {
        const arrayPos = this.array.push({}) - 1; // this returns the new length of the array
        this.array[arrayPos - 1] = new XORNode(value, arrayPos, null)
        const newNode = this.array[arrayPos - 1];
        
        if(head) {
            let next = head.npx^null;
            head.npx = newNode.npx^next;
            // head.both = head.previous^head.next;
            
        } 
        this.head = newNode;
    }
}

class XORNode {
    /**
     * 
     * @param {*} npx XOR of the next and previous node
     */
    constructor(value, next, prev) {
        this.value = value
        this.npx = next^prev;
    }
}

const ll = new XORLinkedList();

ll.addToHead(ll.head, 100);
ll.addToHead(ll.head, 200);
ll.addToHead(ll.head, 300);

console.log(ll.array)