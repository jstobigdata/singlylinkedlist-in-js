import LinkedListNode from "./LinkedListNode.js";

export default class LinkedList {
  constructor() {
    this._head = null;
    this._tail = null;
    this._size = 0;
  }

  /**
   * Adds the new Node at Head.
   *
   * @param {*} data
   * @returns
   * @memberof LinkedList
   */
  prepend(data) {
    let newNode = new LinkedListNode(data, this._head);
    this._head = newNode;

    //if no tail yet, make a new tail node
    if (!this._tail) {
      this._tail = newNode;
    }
    this._size++;

    return this;
  }

  /**
   * Add to the end of the Linked list.
   *
   * @param {*} data
   * @returns
   * @memberof LinkedList
   */
  append(data) {
    let newNode = new LinkedListNode(data);

    if (!this._head) {
      this._head = newNode;
      this._tail = newNode;
    } else {
      this._tail.next = newNode;
      this._tail = newNode;
    }
    this._size++;

    return this;
  }

  /**
   * Finds the Node with the Given value.
   *
   * @param {*} data
   * @returns
   * @memberof LinkedList
   */
  find(data) {
    if (!this._head) {
      return null;
    }

    let tempNode = this._head;
    while (tempNode) {
      if (tempNode.data === data) { //TODO - replace with Comparator
        return tempNode;
      }
      tempNode = tempNode.next;
    }

    return null;
  }

  /**
   * Delete a random node that contains the given data.
   *
   * @param {*} data
   * @returns
   * @memberof LinkedList
   */
  delete(data) {
    // If no Element.
    if (!this._head) {
      return null;
    }

    // Check if the data is present in Head node
    if (this._head.data === data) {
      return this.deleteHead();
    }

    // Check if data is present in Tail node
    if (this._tail.data === data) {
      return this.deleteTail();
    }

    let tempNode = this._head;

    while (tempNode.next) {
      //If a match found.
      if (tempNode.next.data === data) {
        let deletedNode = tempNode.next;
        tempNode.next = tempNode.next.next;
        this._size--;
        return deletedNode;
      }
      tempNode = tempNode.next;
    }

    // If no Node with match data found.
    return null;

  }

  /**
   * Delete the head - first element.
   *
   * @returns deleted Node
   * @memberof LinkedList
   */
  deleteHead() {
    if (!this._head) {
      return null;
    }

    let deletedNode = this._head;
    if (this._head.next) {
      this._head = this._head.next;
    } else {
      this._head = null;
      this._tail = null;
    }
    this._size--;

    return deletedNode;
  }

  /**
   * Delete the first/head element.
   *
   * @memberof LinkedList
   */
  deleteFirst() {
    return this.deleteHead();
  }

  /**
   * Delete the Last element.
   *
   * @returns
   * @memberof LinkedList
   */
  deleteTail() {
    //If no elements
    if (!this._tail) {
      return null;
    }
    let deletedNode = this._tail;

    //If exactly one elememt present
    if (this._head === this._tail) {
      this._head = null;
      this._tail = null;
      this._size--;

      return deletedNode;
    }

    let tempNode = this._head;
    while (tempNode.next) {
      if (!tempNode.next.next) {
        tempNode.next = null;
      } else {
        tempNode = tempNode.next;
      }
    }
    this._tail = tempNode;
    this._size--;

    return deletedNode;
  }

  /**
   * Delete the last element.
   *
   * @memberof LinkedList
   */
  deleteLast() {
    return this.deleteTail();
  }

  /**
   * Empty the LinkedList.
   *
   * @returns
   * @memberof LinkedList
   */
  deleteAll() {
    if (!this._head) {
      return this;
    }
    this._head = null;
    this._tail = null;
    this._size = 0;

    return this;
  }

  /**
   * Convert an Array to LinkedList.
   *
   * @param {*[]} array
   * @returns {LinkedList}
   * @memberof LinkedList
   */
  fromArray(values) {
    values.forEach(value => this.append(value));

    return this;
  }

  /**
   * LinkedList to Array.
   *
   * @returns {*[]} array
   * @memberof LinkedList
   */
  toArray() {
    let nodes = [];
    let tempNode = this._head;
    while (tempNode) {
      nodes.push(tempNode);
      tempNode = tempNode.next;
    }

    return nodes;
  }

  /**
   * The size of the LinkedList.
   * 
   * @readonly
   * @memberof LinkedList
   */
  get size() {
    return this._size;
  }
}