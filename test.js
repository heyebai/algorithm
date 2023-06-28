import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>You clicked {count} times!</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <ComponentToRender />
    </div>
  );
}

function ComponentToRender() {
  const count = React.useRef(0);

  React.useEffect(() => {
    console.log("component rendered", count.current++);
  });

  return (
    <div className="ComponentToRender">
      <p>sub</p>
    </div>
  );
}
