import { useState } from 'react';
import { createRoot } from 'react-dom/client';

function MyForm() {
  // 1) State to keep track of which fruit is selected
  const [selectedFruit, setSelectedFruit] = useState('banana'); // default is banana

  // 2) Update state when user selects a radio button
  const handleChange = (event) => {
    setSelectedFruit(event.target.value);
  };

  // 3) Handle form submission
  const handleSubmit = (event) => {
    alert(`Your favorite fruit is: ${selectedFruit}`);
    event.preventDefault(); // prevent page reload
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>Select your favorite fruit:</p>

      {/* Radio button for Apple */}
      <label>
        <input 
          type="radio"
          name="fruit"                  // same name = same group
          value="apple"                 // value for this option
          checked={selectedFruit === 'apple'} // true if state matches "apple"
          onChange={handleChange}       // update when clicked
        /> Apple
      </label>
      <br />

      {/* Radio button for Banana */}
      <label>
        <input 
          type="radio"
          name="fruit"
          value="banana"
          checked={selectedFruit === 'banana'}
          onChange={handleChange}
        /> Banana
      </label>
      <br />

      {/* Radio button for Cherry */}
      <label>
        <input 
          type="radio"
          name="fruit"
          value="cherry"
          checked={selectedFruit === 'cherry'} // FIX: must match "cherry"
          onChange={handleChange}
        /> Cherry
      </label>
      <br />

      <button type="submit">Submit</button>
    </form>
  );
}

// 4) Render the form on the page
createRoot(document.getElementById('root')).render(<MyForm />);
