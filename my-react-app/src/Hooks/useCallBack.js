import React, { useState, useCallback } from 'react';
import { createRoot } from 'react-dom/client';

// ✅ Child component
// React.memo prevents re-render unless props actually change
const Button = React.memo(({ onClick, text }) => {
  console.log(`${text} button rendered`); // Logs when child renders
  return <button onClick={onClick}>{text}</button>;
});

function WithCallbackExample() {
  // ✅ Parent state
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  // ✅ Memoized functions using useCallback
  // These functions will only change when their dependencies change
  const handleClick1 = useCallback(() => {
    setCount1(count1 + 1); // Increment count1
  }, [count1]); // Dependency array: recreate function only if count1 changes

  const handleClick2 = useCallback(() => {
    setCount2(count2 + 1); // Increment count2
  }, [count2]); // Recreate only if count2 changes

  console.log("Parent rendered"); // Logs when parent renders

  return (
    <div>
      <h2>With useCallback:</h2>
      <p>Count 1: {count1}</p>
      <p>Count 2: {count2}</p>

      {/* Pass memoized functions to children */}
      <Button onClick={handleClick1} text="Button 1" />
      <Button onClick={handleClick2} text="Button 2" />
    </div>
  );
}

// ✅ Render to DOM
createRoot(document.getElementById('root')).render(
  <WithCallbackExample />
);
