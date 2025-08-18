// //rendering a component in React
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// function Car(){
//   return <h2>hiiiiiii</h2>
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<car/>);

// //props in React
// function Car({color}) {
//   return <h2>i am a {color} car</h2>
// }
// root.render(<car color="red" />);
// //using props in React

// //component inside component
// function Car({color}) {
//   return <h2>i am a car</h2>
// }

// function Garage() {
//   return(
//     <>
//     <h1>who lives in my garage?</h1>
//     <Car/>
//     </>
//   );
// }
// root.render(<Garage />);
//rendering a component inside another component

// //split componenets into files
// export default function Car(){
//   return <h2>i am a car</h2>
// }