import React, {useState} from 'react';

//adding state for washer/dryer button using destrucuring
//initializing button as washer 


//adding states for dryer button
export default function NavBar() {
    const [appliance, setAppliance] = useState('Washer');

    return (
    <div> 
        <button type="button" onClick = {setAppliance("dryer")} > { appliance }</button>
    </div> 
    )
}



