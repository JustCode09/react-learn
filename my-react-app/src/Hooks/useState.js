//usestate is a react hook that allows function components to have state.
//state = data that can change over time and trigger re-renders.

import { useState } from "react";
import { createRoot } from "react-dom/client";

function App() {
  // 1️⃣ Simple state (string)
  const [color, setColor] = useState("red");

  // 2️⃣ Multiple state values
  const [brand, setBrand] = useState("Ford");
  const [model, setModel] = useState("Mustang");
  const [year, setYear] = useState("1964");

  // 3️⃣ One object state
  const [car, setCar] = useState({
    brand: "Tesla",
    model: "Model S",
    year: "2024",
    color: "black"
  });

  // Update only the car's color using spread operator
  const updateCarColor = () => {
    setCar(prevCar => {
      return { ...prevCar, color: "blue" };
    });
  };

  return (
    <>
      {/* 1️⃣ Simple state */}
      <h1>My favorite color is {color}!</h1>
      <button onClick={() => setColor("blue")}>Blue</button>
      <button onClick={() => setColor("green")}>Green</button>
      <button onClick={() => setColor("red")}>Red</button>

      <hr />

      {/* 2️⃣ Multiple states */}
      <h2>My {brand}</h2>
      <p>
        It is a {color} {model} from {year}.
      </p>

      <hr />

      {/* 3️⃣ Object state */}
      <h2>My {car.brand}</h2>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
      <button onClick={updateCarColor}>Change Car Color to Blue</button>
    </>
  );
}

// Render to root div
const root = createRoot(document.getElementById("root"));
root.render(<App />);
