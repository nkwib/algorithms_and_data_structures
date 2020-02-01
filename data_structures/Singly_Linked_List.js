class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
    return this;
  }
  pop() {
    if (!pre) return undefined;
    let pre = this.head;
    let post = this.head.next;
    if (!pre.next) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return pre;
    } else {
      while (post.next) {
        pre = post;
        post = post.next;
      }
      pre.next = null;
      this.tail = pre;
      this.length -= 1;
      return post;
    }
  }
  shift() {
    if (!this.head) return undefined;
    let shifted = this.head;
    this.head = this.head.next;
    this.length -= 1;
    if (this.length === 0) {
      this.tail = null;
    }
    return shifted;
  }
  unshift(val) {
    let newNode = new Node(val);
    if (this.head) {
      newNode.next = this.head;
    }
    this.head = newNode;
    this.length += 1;
    if (this.length === 1) {
      this.tail = newNode;
    }
    return this;
  }
  get(i) {
      if(i<0 || i>=this.length) return null ;
      let node = this.head;
      for(let k=0;k<i;k++) {
          node = node.next;
      }
      return node;
  }
  set(i, val) {
      let foundNode = this.get(i);
      if (foundNode) foundNode.val = val;
      return !!foundNode;
  }
  insert(i, val) {
      if(i<0 || i>this.length) return false;
      if(i===this.length) return !!this.push(val);
      if(i===0) return !!this.unshift(val);

      let newNode = new Node(val);
      let pre = this.get(i-1);
      let post = pre.next;
      pre.next = newNode;
      newNode.next = post;
      this.length =+ 1;
      return true
  }
  remove(i) {
      if(i<0 || i>this.length) return false;
      if(i===(this.length-1)) return this.pop;
      if(i===0) return this.shift;

      let pre=this.get(i-1);
      let current = pre.next;
      let post=current.next;
      pre.next = post;
      this.length -= 1;
      return current;
  }
  print() {
      var arr = [];
      var current = this.head;
      while(current) {
          arr.push(current.val);
          current = current.next;
      }
      console.log(arr);
  }
  reverse() {
      if(this.length === 1) return this;
      let node = this.head;
      this.head = this.tail;
      this.tail = node;
      let next;
      let prev = null;
      for(let i=0;i<this.length;i++){
          next = node.next;
          node.next = prev;
          prev = node;
          node = next;
      }
      return this;
  }
}
