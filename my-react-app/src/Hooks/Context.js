// Import React hooks and functions
import { useState, createContext, useContext } from "react";
import { createRoot } from "react-dom/client";

// 1️⃣ Create a context object
// This will allow us to share "user" data across components
const UserContext = createContext();

// 2️⃣ Top-level component
function Component1() {
  // useState → store the user name in state
  const [user, setUser] = useState("linus");

  return (
    // UserContext.Provider → makes "user" available to all child components
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}`}</h1> {/* Access state directly */}
      <Component2 /> {/* Passes control to Component2 (no props needed!) */}
    </UserContext.Provider>
  );
}

// 3️⃣ Second component
function Component2() {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 /> {/* Goes deeper into the tree */}
    </>
  );
}

// 4️⃣ Third component (child of Component2)
function Component3() {
  // useContext → read the value from UserContext
  const user = useContext(UserContext);

  return (
    <>
      <h1>Component 3</h1>
      {/* We can access "user" here, even though it was defined in Component1 */}
      <h2>{`Hello ${user}`}</h2>
    </>
  );
}

// 5️⃣ Render the top-level component into the root div in index.html
createRoot(document.getElementById("root")).render(<Component1 />);
