//useReducer is a React Hook that helps you manage state with more complex logic than useState.
import { useReducer } from "react";
import { createRoot } from "react-dom/client";

// ✅ 1. Initial state
// The starting value of our counter
const initialState = { count: 0 };

// ✅ 2. Reducer function
// Determines how state should change based on the action
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      // Return new state with count increased by 1
      return { count: state.count + 1 };
    case "DECREMENT":
      // Return new state with count decreased by 1
      return { count: state.count - 1 };
    case "RESET":
      // Return state reset to initial value
      return { count: 0 };
    default:
      // If unknown action → return current state
      return state;
  }
};

function Counter() {
  // ✅ 3. useReducer Hook
  // state → current state
  // dispatch → function to send actions to the reducer
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      {/* Display current count */}
      <h1>Counter: {state.count}</h1>

      {/* Buttons to trigger actions via dispatch */}
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+1</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-1</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
}

// ✅ 4. Render the Counter component into the DOM
createRoot(document.getElementById("root")).render(<Counter />);
