//lists:rendering  a list=loop through ot to display itms

const cars = ['ford', 'bmw', 'audi'];
cars.map((car)=> console.log(car));

//example in react
<ul>
    {cars.map((car)=> <li>{car}</li>)}
</ul>

//components in a list //
function Car(props){
    return <li> I am a {props.brand}</li>
}

function Garage(){
    const cars = ['ford', 'bmw', 'audi'];
    return (
        <>
        <h1> who lives in my garage?</h1>
        <ul>
            {cars.map((car)=> <Car brand={car} />)}
        </ul>
        </>
    )
}

//keys in react = special attribute that helps react identify which items have changed, are added, or removed
//adding a keys
function Car(props){
    return <li>I am a {props.brand}</li>
}
function Garage(){
    const cars = [
        {id:1, brand: 'ford'},
        {id:2, brand: 'bmw'},
        {id:3, brand: 'audi'}
    ];
    return (
        <>
        <h1>who lives in my garage?</h1>
        <ul>
            {cars.map((car)=> <Car key={car.id} brand={car.brand} />)}
        </ul>
        </>
    )
}