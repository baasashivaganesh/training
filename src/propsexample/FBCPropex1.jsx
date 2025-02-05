import React from "react"

const FBCPropex1 = (props) => {
    console.log(props);
   if(props.isLoggedIn === true){
    return(
        <div>
            <h1>welcome {props.username}</h1>
            {
                props.hobbies.map((value)=>{
                    return <li>{value}</li>

                })
                    
                
            }
        </div>
    )
}else{
    return <h1>Please Login first</h1>
   }

    

    
}
export default FBCPropex1;