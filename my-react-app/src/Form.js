//controlled Componenet 

import {useState} from 'react';
import {createRoot} from 'react-dom/client';

function myForm(){
    const[name,setName] = useState('');

}
function handleChange(e){
    setName(e.target.value);// updates the state with the value from the input field

}
return(
    <form>
        <label>
            enter your name:
            <input type='text' value={name} onchange={handleChange} />
        </label>
        <p>current value : {name}</p>
    </form>
)