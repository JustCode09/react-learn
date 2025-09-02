//useMem0: It’s basically a “remember my calculation” tool so your app doesn’t waste time redoing the same work on every render.

// Import React hooks: useState (for state) and useMemo (for memoization)
import { useState, useMemo } from 'react';
// Import createRoot to render React into the DOM
import { createRoot } from 'react-dom/client';

const App = () => {
  // count state starts at 0
  const [count, setCount] = useState(0);
  // todos state is an empty array
  const [todos, setTodos] = useState([]);

  // Memoize the result of expensiveCalculation
  // It will only re-run when "count" changes
  const calculation = useMemo(() => expensiveCalculation(count), [count]);

  // Function to increase the count by 1
  const increment = () => {
    setCount((c) => c + 1);
  };

  // Function to add a new todo item
  const addTodo = () => {
    setTodos((t) => [...t, "New Todo"]);
  };

  // JSX: what the component renders
  return (
    <div>
      <div>
        <h2>My Todos</h2>
        {/* Loop through todos array and render each as <p> */}
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
        {/* Button to add a new todo */}
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <hr />
      <div>
        {/* Show count value */}
        Count: {count}
        {/* Button to increment count */}
        <button onClick={increment}>+</button>
        <h2>Expensive Calculation</h2>
        {/* Show the memoized calculation result */}
        {calculation}
      </div>
    </div>
  );
};

// A slow function that simulates heavy work
// It loops 1 billion times and keeps increasing the number
// Logs "Calculating..." whenever it actually runs
const expensiveCalculation = (num) => {
  console.log("Calculating...");
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
};

// Render the <App /> component inside the HTML element with id "root"
createRoot(document.getElementById('root')).render(
  <App />
);
