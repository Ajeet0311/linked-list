class Node {
  constructor() {
    this.value = null;
    this.nextNode = null;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  append(value) {
    const newNode = new Node();
    newNode.value = value;

    if (this.tail === null) {
      this.head = newNode;
    } else {
      this.tail.nextNode = newNode;
    }

    this.tail = newNode;
    this.size++;
  }

  prepend(value) {
    const newNode = new Node();
    newNode.value = value;

    if (this.head === null) {
      this.tail = newNode;
    } else {
      newNode.nextNode = this.head;
    }

    this.head = newNode;
    this.size++;
  }

  listSize() {
    return this.size;
  }

  listHead() {
    if (this.head === null) return undefined;
    return this.head.value;
  }

  listTail() {
    if (this.tail === null) return undefined;
    return this.tail.value;
  }

  at(index) {
    let i = 0;
    let curNode = this.head;

    while (i < index && curNode !== null) {
      curNode = curNode.nextNode;
      i++;
    }

    if (curNode === null) return undefined;
    return curNode.value;
  }

  pop() {
    if (this.head === null) return undefined;

    const val = this.head.value;
    this.head = this.head.nextNode;
    this.size--;
    if (this.head === null) this.tail = null;

    return val;
  }

  contains(value) {
    let curNode = this.head;

    while (curNode !== null) {
      if (curNode.value === value) return true;
      curNode = curNode.nextNode;
    }

    return false;
  }

  findIndex(value) {
    let ind = 0;
    let curNode = this.head;

    while (curNode !== null) {
      if (curNode.value === value) return ind;

      curNode = curNode.nextNode;
      ind++;
    }

    return -1;
  }

  toString() {
    let curNode = this.head;
    let str = "";

    while (curNode !== null) {
      str += `(${curNode.value}) -> `;
      curNode = curNode.nextNode;
    }

    str += "null";
    return str;
  }
}
