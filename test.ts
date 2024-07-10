class Rectangular {
  height;
  width;
  area;
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Square extends Rectangular {
  area = 4;
  constructor(length) {
    super(length, length);
  }
  getArea() {
    return this.area;
  }

  public get are() {
    return this.area;
  }
  public set are(value) {
    this.area = value;
  }
}

const s = new Square(2);
console.log(s.getArea());
s.are = 3;
console.log(s.are);

const circle = {
  radius: 20,
  diameter() {
    return this.radius * 2;
  },
  perimeter: function () {
    return 2 * Math.PI * this.radius;
  },
};

console.log(circle.diameter());
console.log(circle.perimeter());

console.log(+new Date());
console.log(Date.now());

console.log("Start"); //1

queueMicrotask(() => {
  console.log("Inside microtask"); // 3
});

console.log("End"); //2

class UserC {
  private name;
  constructor(name) {
    this.name = name;
  }
  public getName() {
    return this.name;
  }
}
const userC = new UserC("hyb"); // ReferenceError
console.log(userC.getName());

function User(name) {
  this.name = name;
}

User.prototype.getName = function () {
  return this.name;
};
const user = new User("yy"); // No error
console.log(user.getName());

function test() {
  // const {a}
  console.log(arguments[0]);
}

test(1, 2, 3);

function test1(...r) {
  console.log(r);
}

test1(1, 2, 3);

console.log("Start");

setTimeout(() => {
  console.log("setTimeout");
}, 0);

setImmediate(() => {
  console.log("setImmediate");
});

process.nextTick(() => {
  console.log("process.nextTick");
});

console.log("End");

const promiseOne = new Promise((resolve, reject) =>
  setTimeout(() => resolve("I ran"), 100)
);
const promiseTwo = new Promise((resolve, reject) =>
  setTimeout(() => reject("I caused error"), 100)
);

Promise.allSettled([promiseOne, promiseTwo])
  .then((data) => console.log(data))
  .catch((e) => console.log("catch", e));
