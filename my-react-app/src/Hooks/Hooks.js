// hooks are special fucntions that let you "hook into" React features(like state and lifecycle) from function components.Hooks are functions React gives you so that function components can do everything class components used to (state, lifecycle, refs, etc.).Hooks are remote controls for your components.

// They let you tell your component how to remember things (useState) or do things at the right time (useEffect).
import {useState} from "react";

function FavoriteColor(){
    const [color, setColor] = useState("red");//default color is red
    return(
        <>
        <h1>my favorite color is {color}</h1>
        <button onClick={()=> setColor("blue")}>blue</button>
        <button onClick={()=> setColor("green")}>green</button>
        <button onClick={()=> setColor("red")}>red</button>
        </>
    );
}
export default FavoriteColor;
