import React,{Component} from "react";

class CBCPropex1 extends Component{
    render(){
        console.log(this);
        return(
            <div>CBCPropex1
                <h1>{this.props.username}</h1>
                <h2>{this.props.age}</h2>
                <div>
                {this.props.desig[0]}
            </div>
            <h2>{this.props.userDetails.area}</h2>

            <button onClick={this.props.sendFun}>Click on button</button>
            </div>
            
        )
    }
}
export default CBCPropex1;