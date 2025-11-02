class LinkedList {
  head;
  tail;
  length;
  constructor(value) {
    if (value) {
      const newNode = new Node(value);
      this.head = newNode;
      this.tail = newNode;
      this.length = 1;
    }
  }
  getHead() {
    return `Head: ${JSON.stringify(this.head)}`;
  }

  append(value) {
    const newNode = new Node(value);

    if (!this.length || this.length == 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length = (this.length ?? 0) + 1;
  }
  removeLast() {
    if (this.length == 0) return;

    let temp = this.head;
    let pre = this.head;
    while (temp.next != null) {
      pre = temp;
      temp = temp.next;
    }
    this.tail = pre;
    this.tail.next = null;

    this.length--;
    if (this.length == 1) {
      this.head = null;
      this.tail = null;
    }
  }
  prepend(value) {
    const newNode = new Node(value);
    if (!this.length || this.length == 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }
  removeFirst() {
    if (this.length == 0) return;
    let temp = this.head.next;
    this.head.next = null;
    this.head = temp;
    this.length--;
    if (this.length == 0) {
      this.tail = null;
    }
  }
  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    } else {
      let temp = this.head;
      for (let i = 0; i < index; i++) {
        temp = temp.next;
      }
      return temp;
    }
  }
  set(index, value) {
    if (index < 0 || index > this.length) {
      return null;
    } else {
      let temp = this.head;
      while (index < this.length) {
        temp = temp.next;
      }
    }
    if (temp != null) {
      temp.value = value;
      return true;
    }
    return false;
  }
  insert(index, value) {
    if (index < 0 || index > this.length) {
      return false;
    } else {
      const newNode = new Node(value);
      if (index == 0) {
        if (this.length == 0) {
          this.head = newNode;
          this.tail = newNode;
          this.length++;
          return true;
        }
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return true;
      }
      if (this.length == index) {
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return true;
      }

      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }

      newNode.next = prev.next;
      prev.next = newNode;
      this.length++;
      return true;
    }
  }
  removeLast() {
    if (this.length == 0) {
      return false;
    }
    let prev = this.head;
    let temp = this.head;
    while (temp.next != null) {
      prev = temp;
      temp = temp.next;
    }
    this.tail = prev;
    this.tail.next = null;
    this.length--;
    if (this.length == 0) {
      this.head = null;
    }
  }
  remove(index) {
    if (index < 0 || index >= this.length) {
      return false;
    }
    if (index == 0) {
      if (this.length == 0) {
        return false;
      }
      let temp = this.head;
      this.head = this.head.next;
      temp.next = null;
      this.length--;
      if (this.length == 0) {
        this.tail = null;
      }
      return true;
    }
    // if (index == this.length - 1) {
    //   let prev = this.head;
    //   let temp = this.head;
    //   while (temp.next != null) {
    //     prev = temp;
    //     temp = temp.next;
    //   }
    //   this.tail = prev;
    //   this.tail.next = null;
    //   this.length--;
    //   if (this.length == 0) {
    //     this.head = null;
    //   }
    //   return true;
    // }
    let prev = this.head;
    for (let i = 0; i < index - 1; i++) {
      prev = prev.next;
    }
    let curr = prev.next;
    prev.next = curr.next;
    curr.next = null;
    if (index == this.length - 1) this.tail = prev;
    this.length--;
    return true;
  }
  reverse() {
    let curr = this.head;
    this.head = this.tail;
    this.tail = curr;
    let before = null;
    let after = curr.next;
    for (let i = 0; i < this.length; i++) {
      after = temp.next;
      temp.next = before;
      before = temp;
      temp = after;
    }
  }
  findMiddle() {
    let slow = this.head;
    let fast = this.head;
    while (fast.next != null && fast != null) {
      slow = slow.next;
      fast = fast.next;
      if (fast != null) {
        fast = fast?.next;
      }
      return slow;
    }
  }
  hasLoop() {
    let slow = this.head;
    let fast = this.head;
    while (fast != null && fast.next != null) {
      slow = slow.next;
      fast = fast.next;
      if (fast != null) {
        fast = fast.next;
      }
      if (slow == fast) {
        return true;
      }
    }
    return false;
  }
}

class Node {
  value;
  next;
  constructor(payload) {
    this.value = payload;
    this.next = null;
  }
}

const linked = new LinkedList(2);
linked.append(5);
linked.append(56);
console.log(linked.getHead());
linked.append(7);
linked.append(100);
// linked.removeFirst();
console.log(linked.get(3).value, "is");
console.log(linked.getHead());
// linked.removeLast();
