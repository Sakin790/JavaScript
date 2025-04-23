class Stack {
  constructor() {
    this.items = [];
  }

  push(elm) {
    this.items.push(elm);
  }

  pop() {
    if (this.isEmpty()) {
      return "Stack is Empty";
    }
    return this.items.pop();
  }

  peek() {
    if (this.isEmpty()) return "Stack is Empty";
    return this.items[this.items.length - 1]; // check the top element
  }

  isEmpty() {
    return this.isEmpty.length == 0;
  }
  length() {
    return this.items.length;
  }
}


