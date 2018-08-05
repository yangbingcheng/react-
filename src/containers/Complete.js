import React,  { Component } from 'react'
import { Link } from 'react-router-dom'
import BagList from './BagList'
import Animate from '../components/Animate'

class Complete extends Component {
    render() {
        return (
            <div className="wrapper-input white">
                <Animate />
                <BagList />
                <div className="send-bag">
                    <Link to='/'>返回</Link>
                </div>
            </div>
        )
    }
}

export default Complete