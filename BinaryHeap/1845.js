// Design a system that manages the reservation state of n seats that are numbered from 1 to n.

// Implement the SeatManager class:

// SeatManager(int n) Initializes a SeatManager object that will manage n seats numbered from 1 to n. All seats are initially available.
// int reserve() Fetches the smallest-numbered unreserved seat, reserves it, and returns its number.
// void unreserve(int seatNumber) Unreserves the seat with the given seatNumber.

const upHeap = (arr) => {
    let parentIndex = (arr.length >> 1) - 1;
    let selfIndex = arr.length - 1;
    while (arr[selfIndex] < arr[parentIndex]) {
        // swap
        const temp = arr[parentIndex];
        arr[parentIndex] = arr[selfIndex];
        arr[selfIndex] = temp;
        selfIndex = parentIndex;
        parentIndex = ((parentIndex + 1) >> 1) - 1;
    }
};

const downHeap = (arr, selfIndex) => {
    let minIndex = selfIndex;
    let leftChild = 2 * selfIndex + 1;
    let rightChild = 2 * selfIndex + 2;
    if (arr[minIndex] > arr[leftChild]) {
        minIndex = leftChild;
    }
    if (arr[minIndex] > arr[rightChild]) {
        minIndex = rightChild;
    }
    if (selfIndex !== minIndex) {
        const temp = arr[minIndex];
        arr[minIndex] = arr[selfIndex];
        arr[selfIndex] = temp;
        downHeap(arr, minIndex);
    }
};

/**
 * @param {number} n
 */
var SeatManager = function (n) {
    this.seats = [];
    for (let i = 1; i <= n; i++) {
        this.seats.push(i);
    }
};

/**
 * @return {number}
 */
SeatManager.prototype.reserve = function () {
    const temp = this.seats[0];
    this.seats[0] = this.seats[this.seats.length - 1];
    this.seats[this.seats.length - 1] = temp;
    const result = this.seats.pop();
    downHeap(this.seats, 0);
    return result;
};

/**
 * @param {number} seatNumber
 * @return {void}
 */
SeatManager.prototype.unreserve = function (seatNumber) {
    this.seats.push(seatNumber);
    upHeap(this.seats);
};

/**
 * Your SeatManager object will be instantiated and called as such:
 * var obj = new SeatManager(n)
 * var param_1 = obj.reserve()
 * obj.unreserve(seatNumber)
 */
