class Node {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    insert(value) {
        let newNode = new Node(value);
        if(!this.root) {
            this.root = newNode;
            return this;
        }
        var current = this.root;
        while(true) {
            if (value === current.value) return false;
            let dest = value < current.value? 'left' : 'right';
            if (current[dest] === null) {
                current[dest] = newNode;
                return this;
            }
            current = current[dest];    
        }
    }
    find(value) {
        let current = this.root;
        while(true) {
            if (value === current.value) return true;
            let dest = value < current.value? 'left' : 'right';
            if (current[dest] === null) return false;
            current = current[dest]; 
        }
    }
}