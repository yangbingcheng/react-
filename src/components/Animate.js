import React,  { Component } from 'react'

class Animate extends Component {
    constructor() {
        super()
        this.state={
            isClicked: false
        }
    }

    handleAnim() {
        this.setState({
            isClicked: true
        })      
    }

    render() {
        return (
            <div className={`${this.state.isClicked ?` animate hide `:` animate `}`}>
                <div className={`${this.state.isClicked ?` mask1 change1 `:` mask1 `}`}></div>
                <div className={`${this.state.isClicked ?` mask2 change `:` mask2 `}`}></div>
                <div className="open" onClick={this.handleAnim.bind(this)}>拆</div>
            </div>
        )
    }
}

export default Animate