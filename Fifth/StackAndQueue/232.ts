class MyQueue {
  stackPush;
  stackPop;
  constructor() {
    this.stackPush = [];
    this.stackPop = [];
  }

  push(x: number): void {
    this.stackPush.push(x);
  }

  pop(): number {
    if (this.stackPop.length) {
      return this.stackPop.pop();
    }
    while (this.stackPush.length) {
      this.stackPop.push(this.stackPush.pop());
    }
    return this.stackPop.pop();
  }

  peek(): number {
    if (this.stackPop.length) {
      return this.stackPop[this.stackPop.length - 1];
    }
    while (this.stackPush.length) {
      this.stackPop.push(this.stackPush.pop());
    }
    return this.stackPop[this.stackPop.length - 1];
  }

  empty(): boolean {
    return !this.stackPop.length && !this.stackPush.length;
  }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
