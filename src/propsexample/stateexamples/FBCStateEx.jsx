import React, {useState} from 'react'

const FBCStateEX = () => {
    const [value ,setValue]=useState("MRU");

    let changeName=()=>{
        setValue("Mallareddy university");
    }
    return (
        <div>FBCStateEX
            <h1>{value}</h1>
            <button onClick={changeName}>Change state</button>

        </div>
    )
}
export default FBCStateEX