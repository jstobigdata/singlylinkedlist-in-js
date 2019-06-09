export default class LinkedListNode {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }

  /**
   * The toString() method returns a string representing the object.
   * For reference - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString
   *
   * @param {*} callback
   * @returns
   * @memberof LinkedListNode
   */
  toString(callback) {
    return callback ? callback(value) : `${this.data}`;
  }
}