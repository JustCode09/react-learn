//props=properties 
//allow data to flow from parent to child components

//passing a string
// function Car (props){
//  return <h1>i am a {props.brand}</h1>
// }

// function Garage(){
//     return <Car brand="Ford" /> 
// }

//passing a variable
// function Car(props){
//     return <h1>i am a {props.brand}</h1>
// }

// function Garage(){
// const carName = "Ford";
// return < Car brand={carName} /> 
// }

// passing an Object
function Car(props){
    return <h2>i am a {props.brand.name} {props.brand.model}</h2>
}

function Garage(){
    const carInfo = { name : "ford", model: "mustang"};
    return <Car brand={carInfo} />
}

