class ZigzagIterator {
  v1: number[];
  v2: number[];
  flag: boolean;
  len: number;
  count: number;
  constructor(v1: number[], v2: number[]) {
    this.v1 = v1;
    this.v2 = v2;
    this.len = v1.length + v2.length;
    this.count = 0;
    if (this.v1.length > 0) {
      this.flag = true;
    } else {
      this.flag = false;
    }
  }

  next(): number {
    this.count++;
    if (this.flag) {
      if (this.v2.length > 0) {
        this.flag = !this.flag;
      }
      return this.v1.shift()!;
    } else {
      if (this.v1.length > 0) {
        this.flag = !this.flag;
      }
      return this.v2.shift()!;
    }
  }

  hasNext(): boolean {
    return this.count < this.len;
  }
}

/**
 * Your PeekingIterator object will be instantiated and called as such:
 * var obj = new PeekingIterator(iterator)
 * while (obj.hasNext()) ret.push(obj.next());
 */
