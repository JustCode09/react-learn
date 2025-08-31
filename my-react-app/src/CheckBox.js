// 1) Import the React Hook "useState" to store component state (form values).
import { useState } from 'react';
// 2) Import "createRoot" to mount (render) our React component into the HTML page.
import { createRoot } from 'react-dom/client';

// 3) Define a React component called "MyForm". Components must start with a capital letter.
function MyForm() {
  // 4) Create a single state object called "inputs" to hold all form fields.
  //    - useState(...) returns an array: [currentState, setStateFunction]
  //    - We initialize with default values:
  //        firstname: 'John'  → text input starts with "John"
  //        tomato: true       → tomato checkbox starts checked
  //        onion:  false      → onion checkbox starts unchecked
  const [inputs, setInputs] = useState({
    firstname: 'John',
    tomato: true,
    onion: false
  });

  // 5) Define one change handler for ALL inputs (text + checkboxes).
  const handleChange = (e) => {
    // 6) e.target is the input element that triggered the change.
    const target = e.target;

    // 7) For checkboxes, the "checked" property is the boolean value we want.
    //    For text inputs (and others like select), we use "value".
    const value = target.type === 'checkbox' ? target.checked : target.value;

    // 8) "name" comes from the input's name attribute (e.g., "firstname", "tomato", "onion").
    const name = target.name;

    // 9) Update the state immutably:
    //    - Take the previous state object "values".
    //    - Copy it using spread syntax: { ...values }
    //    - Replace only the field that changed using a computed key: [name]: value
    //    This keeps other fields intact while updating the current one.
    setInputs(values => ({ ...values, [name]: value }));
  };

  // 10) Define what happens when the form is submitted.
  const handleSubmit = (event) => {
    // 11) We'll build a string describing the selected fillings.
    let fillings = '';

    // 12) If tomato is checked, add "tomato".
    if (inputs.tomato) fillings += 'tomato';

    // 13) If onion is checked, append "onion".
    //     If tomato was already included, put " and " between them.
    if (inputs.onion) {
      if (inputs.tomato) fillings += ' and ';
      fillings += 'onion';
    }

    // 14) If neither checkbox was selected, say "no fillings".
    if (fillings === '') fillings = 'no fillings';

    // 15) Show a friendly message using the current state values.
    //     Example: "John wants a burger with tomato and onion"
    alert(`${inputs.firstname} wants a burger with ${fillings}`);

    // 16) Prevent the browser's default form submission (page reload).
    event.preventDefault();
  };

  // 17) The JSX below renders the actual form UI.
  //     - Each input is a "controlled component": its value/checked comes from state,
  //       and onChange updates that state.
  return (
    // 18) onSubmit calls handleSubmit when the user presses the button or Enter.
    <form onSubmit={handleSubmit}>
      {/* 19) Text input for the user's name. */}
      <label>
        My name is:
        <input 
          type="text"               // 20) This is a text input.
          name="firstname"          // 21) Tells handleChange which key in state to edit.
          value={inputs.firstname}  // 22) Controlled value: comes from state.
          onChange={handleChange}   // 23) Update state whenever the user types.
        />
      </label>

      {/* 24) A short label before our checkboxes. */}
      <p>I want a burger with:</p>

      {/* 25) Checkbox for tomato. */}
      <label>
        Tomato:
        <input 
          type="checkbox"          // 26) This is a checkbox input.
          name="tomato"            // 27) State key for this checkbox.
          checked={inputs.tomato}  // 28) Controlled "checked" (boolean) from state.
          onChange={handleChange}  // 29) Update state when user clicks the checkbox.
        />
      </label>

      {/* 30) Checkbox for onion. */}
      <label>
        Onion:
        <input 
          type="checkbox"
          name="onion"
          checked={inputs.onion}
          onChange={handleChange}
        />
      </label>

      {/* 31) Submit button triggers the form's onSubmit (handleSubmit). */}
      <button type="submit">Submit</button>
    </form>
  );
}

// 32) Find the DOM element with id="root" and render the MyForm component inside it.
createRoot(document.getElementById('root')).render(<MyForm />);
