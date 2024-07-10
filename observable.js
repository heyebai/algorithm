// import { from } from "rxjs";
import { Observable } from "rxjs";
import fetch from "node-fetch";
// const fetchObservable = from(
//   fetch("https://jsonplaceholder.typicode.com/todos/1").then((response) =>
//     response.json()
//   )
// );
const fetchObservable = new Observable((subscriber) => {
  fetch("https://jsonplaceholder.typicode.com/todos/1").then((response) =>
    subscriber.next(response.json())
  );
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  subscriber.complete();
});

fetchObservable.subscribe({
  next(data) {
    console.log(data);
  },
  error(err) {
    console.error("Error: " + err);
  },
  complete() {
    console.log("Completed");
  },
});

// Output:
// { userId: 1, id: 1, title: "delectus aut autem", completed: false }
