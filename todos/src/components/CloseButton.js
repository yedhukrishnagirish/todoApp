import React, { Component } from "react";

export default class CloseButton extends Component {

    render(){
        return(
           <button
             className="del-btn"
             onClick={()=>this.props.removeToDoItem(this.props.index)}
            >
          x
        </button>
        )
    }

}