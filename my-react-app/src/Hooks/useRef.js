// Import React hooks
import { useRef, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";

function App() {
  // ✅ State: stores the input value (changes when typing)
  const [inputValue, setInputValue] = useState("");

  // ✅ Ref: stores a value that "survives" re-renders without causing new renders
  // count.current will start at 0
  const count = useRef(0);

  // ✅ Effect: runs after every render
  // Here we increase count.current each time the component re-renders
  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <>
      <p>Type in the input:</p>

      {/* Input field bound to inputValue state */}
      <input
        type="text"
        value={inputValue}
        // onChange → updates state whenever user types
        onChange={(e) => setInputValue(e.target.value)}
      />

      {/* Show how many times the component has rendered */}
      <h1>Render Count: {count.current}</h1>
    </>
  );
}

// Render App inside the root element
createRoot(document.getElementById("root")).render(<App />);
