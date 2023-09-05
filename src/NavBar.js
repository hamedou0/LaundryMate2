import React, {useState} from 'react';

//adding state for washer/dryer button using destrucuring
//initializing button as washer 



//adding states for dryer button
 export default function NavBar() {
    const [appliance, setAppliance] = useState('Washer');

    function ApplianceSwitch () {
        if ((appliance) == 'Dryers'){
            setAppliance("Washer")
        } 
        if ((appliance) == 'Washer'){
            setAppliance("Dryers")
        } 

        
        
    }
    return (
        <div> 
        <ul>
            <img src="./uab.jpg" height="50" width="50" alt="picture of blaze the dragon"></img>
            <li> Home</li>
            <li> About</li>
            <li> Feedback </li>
            <button type="button" onClick= {ApplianceSwitch}> { appliance }</button>
        </ul>
    </div> 
    )
}



