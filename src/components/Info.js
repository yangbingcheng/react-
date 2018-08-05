import React,  { Component } from 'react'

class Info extends Component{
    render() {
        return (
            <div className="alert-info">{this.props.text}</div>
        )
    }
}
export default Info