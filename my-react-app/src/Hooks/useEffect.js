//useeffect lets you perform side effects in function components
//side effects are operations that can affect other components and can't be done during rendering, like fetching data, setting up a subscription, or manually changing the DOM.

import { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";

function App() {
  // 1️⃣ State variables
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  // 2️⃣ Example: Runs on every render (❌ not recommended usually)
  useEffect(() => {
    console.log("Effect ran on EVERY render");
  });

  // 3️⃣ Example: Runs only once (like componentDidMount in classes)
  useEffect(() => {
    console.log("Effect ran only on first render");
  }, []);

  // 4️⃣ Example: Runs when 'count' changes
  useEffect(() => {
    console.log("Effect ran because COUNT changed");
    setCalculation(count * 2);
  }, [count]);

  // 5️⃣ Example: Cleanup (stops timer when component re-renders/unmounts)
  useEffect(() => {
    const timer = setTimeout(() => {
      setCount((c) => c + 1);
    }, 1000);

    return () => clearTimeout(timer); // cleanup
  }, [count]);

  return (
    <>
      <h1>useEffect Demo</h1>
      <p>Count: {count}</p>
      <p>Calculation (count * 2): {calculation}</p>
      <button onClick={() => setCount((c) => c + 1)}>Increase Count</button>
    </>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);
