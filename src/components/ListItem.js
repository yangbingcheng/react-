import React,  { Component } from 'react'

class ListItem extends Component {
    render() {
        return (
            <li className="bag-item">
                <div className="item-name">{this.props.name}</div>
                <div className="item-isMax">{this.props.isMax ? '⭐' : ''}</div>  
                <div className="item-money">{this.props.bag}</div>
                <div className="item-rest">{this.props.rest}</div>                        
            </li>
        )
    }
}

export default ListItem