// React CSS-in-JS using styled-components
// ----------------------------------------
// This file demonstrates:
// 1. Basic styled component
// 2. Dynamic styles with props
// 3. Extending styles
// 4. Global styles

// Import styled-components
import styled, { createGlobalStyle } from "styled-components";

// ----------------------------------------
// 1. BASIC STYLED COMPONENT
// Create a custom styled <h1> tag
const MyHeader = styled.h1`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
`;

// ----------------------------------------
// 2. DYNAMIC STYLES WITH PROPS
// Create a button whose background changes based on props
const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: ${(props) =>
    props.btntype === "primary" ? "#007bff" : "#6c757d"};
  color: white;
  cursor: pointer;
`;

// ----------------------------------------
// 3. EXTENDING STYLES
// Base button without background color
const BaseButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
`;

// Extend BaseButton → change only background
const PrimaryButton = styled(BaseButton)`
  background-color: #007bff;
`;

const SuccessButton = styled(BaseButton)`
  background-color: #28a745;
`;

// ----------------------------------------
// 4. GLOBAL STYLES
// Apply global styles to all components
const GlobalStyle = createGlobalStyle`
  h1 {
    color: white;
    background-color: purple;
    font-family: Arial, sans-serif;
  }

  .myparagraph {
    font-family: courier, monospace;
    color: blue;
  }
`;

// ----------------------------------------
// MAIN APP COMPONENT
function App() {
  return (
    <>
      {/* Apply global styles */}
      <GlobalStyle />

      {/* 1. Basic styled component */}
      <MyHeader>Welcome with Styled Header!</MyHeader>

      {/* 2. Dynamic styles with props */}
      <Button btntype="primary">Primary Button</Button>
      <br />
      <br />
      <Button>Secondary Button</Button>

      <br />
      <br />

      {/* 3. Extending styles */}
      <PrimaryButton>Primary (Extended)</PrimaryButton>
      <SuccessButton>Success (Extended)</SuccessButton>

      <br />
      <br />

      {/* 4. Global styles */}
      <h1>Global Styled Heading</h1>
      <p className="myparagraph">This paragraph is styled globally.</p>
    </>
  );
}

export default App;
