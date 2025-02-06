import React, { Component } from 'react'

class CBCStateEx extends Component {
    constructor(){
        super();
        this.state={
            username:"hemanth"
        };
    }
    changeName=()=>{
        this.setState({username : "shravan is absent from last two days"});
    }

    render() {
        console.log(this);
        return (
            <div>CBCStateEx
                <h1>{this.state.username}</h1>
                <button onClick={this.changeName}>Update the state</button>
            </div>
        )
    }
}
export default CBCStateEx