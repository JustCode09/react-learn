// hooks are special fucntions that let you "hook into" React features(like state and lifecycle) from function components
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
