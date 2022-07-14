class MyQueue {
  stackA: number[];
  stackB: number[];
  constructor() {
    this.stackA = [];
    this.stackB = [];
  }

  push(x: number): void {
    this.stackA.push(x);
  }

  pop(): number {
    if (this.stackB.length === 0) {
      while (this.stackA.length) {
        const num = this.stackA.pop();
        this.stackB.push(num);
      }
    }
    return this.stackB.pop();
  }

  peek(): number {
    if (this.stackB.length === 0) {
      return this.stackA[0];
    }
    return this.stackB[this.stackB.length - 1];
  }

  empty(): boolean {
    return this.stackB.length === 0 && this.stackA.length === 0;
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
