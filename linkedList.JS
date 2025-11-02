// CREATE A CLASS FOR NODE
class Node {
  // NODE HAS TWO PROPERTIES
  // ONE IS VALUE, OTHER IS NEXT, NEXT WILL HAVE THE NEXT NODE ASSIGNED TO IT IN LINKED LIST,
  // WE USE NODE CLASS TO CREATE AND ASSIGN NODES BASED ON THE GIVEN VALUE TO HEAD/TAIL/ANY
  // LINKED LIST POSITION
  value;
  next;
  constructor(value) {
    this.value = value ? value : null;
    this.next = null;
  }
}
class LinkedList {
  //LINKED LIST HAS HEAD, TAIL PROPS.
  //CONSTRUCTOR CREATES A NEW LINKEDLIST WITH ONE VALUE

  head;
  tail;
  length;
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }

  getDetails() {
    let temp = this.head;
    let arr = [];
    //TEMP IS HEAD,
    //PUSH HEAD VALUE TO ARR
    //ASSIGN TEMP WITH NEXT KEY, NEXT TO HEAD
    //REPEAT UNTILL THE TEMP IS NULL, THAT IS THE NEXT KEY OF LAST ELEMENT (TAIL) IS NULL
    while (temp != null) {
      arr.push(temp.value);
      temp = temp.next;
    }
    return arr;
  }
  append(value) {
    const newNode = new Node(value);
    //WHEN LENGTH IS ZERO, CONDITION INSIDE IF IS JUST ANOTHER CONSTRUCTOR
    //IN ELSE BLOCK, WE FIRST SET NEWNODE TAIL.NEXT, NOW THE LAST ELEMENT HAS A NEW NODE
    //WHICH ITSELF HAS NOW BECOME THE LAST ELEMENT
    //NOW ASSIGN THE NEW LAST AS TAIL
    //DOING IT REVERSE WILL CREATE A NEW NODE WITH TAIL BUT WILL NOT HAVE ANYTHING POINT TO IT EXCEPT TAIL
    //THAT BREAKS LINKED LIST STRUCTURE
    if (this.length == 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }
  removeLast() {
    //WE CANNOT DIRECTLY ACCESS LAST ELEMENT LIKE IN ARRAY
    //SO WE HAVE TO LOOP THROUGH THE LINKED LIST FROM HEAD
    //THOUGH WE KNOW THE TAIL, WE CANT FIND WHAT LIES IN FRONT OF TAIL, SO WE CANNOT REMOVE THE TAIL
    //REMOVING TAIL MEANS, U SET PENULTIMATE VALUE AS TAIL AND SET NEXT OF THAT NODE AS NULL
    //SO U LOOP THROUGH LIST AND SET TEMP AS NEXT SO THE TEMP MOVES FORWARD, THE PRE SHOULD FOLLOW TEMP SO IT
    //ALWAYS KNOWS THE SECOND LAST KEY
    //WITH THAT, WE CAN FIND THE SECOND LAST AND POINT IT TO TAIL AND NEXT TO NULL
    if (this.length == 0) return;
    let pre = this.head;
    let temp = this.head;
    while (temp.next != null) {
      pre = temp;
      temp = temp.next;
    }
    this.tail = pre;
    this.tail.next = null;
    this.length--;
    if (this.length == 0) {
      this.head = null;
      this.tail = null;
    }
  }
  prepend(value) {
    const newNode = new Node(value);

    if (this.length == 0) {
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
    let temp = this.head;
    this.head = this.head.next;
    temp.next = null;
    this.length--;
    if (this.length == 0) this.tail = null;
  }
  get(index) {
    let temp = this.head;

    if (index < 0 || index >= this.length) {
      return null;
    } else {
      for (let i = 0; i < index; i++) {
        temp = temp.next;
      }
    }
    return temp;
  }
  set(index, value) {
    let temp = this.get(index);
    if (temp != null) {
      temp.value = value;
      return true;
    }
    return false;
  }
  insert(index, value) {
    if (index < 0 || index > this.length) return null;
    if (index == 0) {
      this.prepend(value);

      return true;
    }

    if (index == this.length) {
      this.append(value);

      return true;
    }
    const newNode = new Node(value);
    let pre = this.get(index - 1);
    newNode.next = pre.next;
    pre.next = newNode;
    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return null;
    // const newNode = new Node(value);
    if (index == 0) {
      this.removeFirst();
      return true;
    }
    if (index == this.length - 1) {
      this.removeLast();
      return true;
    }
    let pre = this.get(index - 1);

    let current = this.get(index);
    pre.next = current.next;
    this.length--;
    return true;
  }
  reverse() {
    let before = null;
    let current = this.head;
    let after = null;
    this.head = this.tail;
    this.tail = this.current;
    for (let i = 0; i < this.length; i++) {
      after = current.next;
      current.next = before;
      before = current;
      current = after;
    }
  }
  findMiddle() {
    let slow = this.head;
    let fast = this.head;
    while (fast.next != null && fast != null) {
      slow = slow.next;
      fast = fast.next;
      if (fast.next != null) {
        fast = fast.next;
      }
    }
    return slow.value;
  }
  getTail() {
    return this.tail;
  }
  getHead() {
    return this.head;
  }
  hasLoop() {
    let slow = this.head;
    let fast = this.head;
    while (fast != null && fast.next != null) {
      slow = slow.next;
      fast = fast.next;
      fast = fast?.next;
      if (fast == slow) {
        return true;
      }
    }
    return false;
  }
  findKthNodeFromEnd(k) {
    let fast = this.head;
    let slow = this.head;

    for (let i = 0; i < k; i++) {
      if (fast == null) {
        return null;
      }
      fast = fast.next;
    }
    while (fast != null) {
      slow = slow.next;
      fast = fast.next;
    }
    return slow;
  }
  binaryToDecimal() {
    let temp = this.head;
    let value = 0;
    while (temp != null) {
      value = value * 2 + temp.value;
      temp = temp.next;
    }
    return value;
  }
  partitionList(condition) {
    let dummyOne = new Node(0);
    let dummyTwo = new Node(0);
    let prev1 = dummyOne;
    let prev2 = dummyTwo;
    let temp = this.head;
    while (temp != null) {
      if (temp.value < condition) {
        prev1.next = temp;
        //temp.next = null;
        prev1 = prev1.next;
      } else {
        prev2.next = temp;
        //temp.next = null;
        prev2 = prev2.next;
      }
      temp = temp.next;
    }

    prev1.next = dummyTwo.next;
    // dummyOne = dummyOne.next;
    //dummyTwo.next = null;
    // dummyOne.next = null;
    prev2 = null;
    return dummyOne.next;
  }
}

const newLink = new LinkedList(55);
newLink.append(2);
newLink.append(81);
newLink.append(31);
newLink.append(5);
newLink.append(7);

newLink.append(2);
newLink.append(3);

console.log(newLink.partitionList());
