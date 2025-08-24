//showing something if a condition is true

//using if statemnt
function MissedCall(){
    return <h1> Missed</h1>
}
function MadeGoal(){
    return <h1>Goal</h1>

}

function Goal(props){
    const isGoal = props.isGoal
if(isGoal){
    return <MadeGoal />
}
return <MissedCall />
}

//using Logical && operator
//only if a condition is true, the second part will be executed
function Garage(props){
    const cars = props.cars;
    return(
        <>
        <h1>Garage</h1>
        {cars.length >0 && <h2> you have {cars.length} cars</h2>}
        </>
    )
}
root.render(<Garage cars={["Ford", "BMW", "Audi"]} />);// this will render the h2 element because the condition is true
root.render(<Garage cars={[]} />);// this will not render the h2 element because the condition is false

//using Ternary operator
//when you want to show something if a condition is true, and something else if it is false
function Goal(props){
    return(
        <>
        {props.isGoal ? <MadeGoal />: <MissedGoal />}
        </>
    )
}
root .render(<Goal isGoal={true} />);// this will render the MadeGoal component because the condition is true
root.render(<Goal isGoal={false} />);// this will render the MissedCall component because the condition is false