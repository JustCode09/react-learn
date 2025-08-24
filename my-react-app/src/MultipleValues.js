// Import React's useState hook for managing state
import { useState } from 'react';
// Import createRoot to render our React component into the DOM
import { createRoot } from 'react-dom/client';  

// React component (should start with capital letter: MyForm, not myForm)
function MyForm() {

  // inputs = state object to hold multiple form fields
  // setInputs = function used to update the state
  const [inputs, setInputs] = useState({});

  // This function runs whenever the user types into an input field
  const handleChange = (e) => {
    const name = e.target.name;   // "name" attribute of the input (e.g. "firstName")
    const value = e.target.value; // typed value inside the input (e.g. "John")

    // Update state:
    // - copy old state with ...values
    // - update the field that changed using [name]: value
    setInputs(values => ({ ...values, [name]: value }));
  };

  return (
    <form>
      {/* First name input */}
      <label> First name:
        <input
          type="text"                          // input type
          name="firstName"                     // key for state object
          value={inputs.firstName || ""}       // value from state (empty string if undefined)
          onChange={handleChange}              // update state when user types
        />
      </label>

      {/* Last name input */}
      <label> Last name:
        <input
          type="text"
          name="lastName"
          value={inputs.lastName || ""}        // use stored value or empty string
          onChange={handleChange}
        />
      </label>

      {/* Display current state values */}
      <p>Current values: {inputs.firstName} {inputs.lastName}</p>
    </form>
  );
}

// Render MyForm component inside the element with id="root"
createRoot(document.getElementById('root')).render(
  <MyForm />
);
