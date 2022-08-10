class SmallestInfiniteSet {
  counter: number;
  arr: number[];
  constructor() {
    this.counter = 1;
    this.arr = [];
  }

  popSmallest(): number {
    if (this.arr.length === 0) {
      return this.counter++;
    } else {
      return this.arr.sort((a, b) => a - b).shift();
    }
  }

  addBack(num: number): void {
    if (num >= this.counter || this.arr.includes(num)) return;
    this.arr.push(num);
  }
}

/**
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */
