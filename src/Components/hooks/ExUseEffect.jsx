import React, { useEffect, useState } from 'react'

const ExUSeEffect = () => {
    const[users,, setUsers]=useState([]);
    console.log(users);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response=>response.json().then(data=>{
            setUsers(data);
        }))
        .catch(err=>console.log(err))

    } , []);
    return (
        <div>ExUseEffect
            {
                users.map((user,i)=>{
                    return(
                        <React.Fragment key={i}>
                            <h1>{user.name}</h1>
                            <h3>{user.email}</h3>
                        </React.Fragment>
                    )
                })
            }

        </div>
    )
}
export default ExUSeEffect