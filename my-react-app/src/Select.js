import { useState } from "react";

function Select() {
  const [car, setCar] = useState("Volvo");

  return (
    <select 
      value={car} 
      onChange={e => setCar(e.target.value)}
    >
      <option value="Ford">Ford</option>
      <option value="Volvo">Volvo</option>
      <option value="Fiat">Fiat</option>
    </select>
  );
}
