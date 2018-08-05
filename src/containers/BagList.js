import React,  { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import ListItem from '../components/ListItem'


class BagList extends Component {

    static propTypes = {
        bags: PropTypes.array
    }

    render() {
        return (
            <div className="wrapper-send">
                <div className="circle-field"></div>
                <div className="block-field"></div>                
                <div className="show-field">
                    <div className="money-field">
                        {`收到${this.props.bags[0].bag}元，
                        剩余${this.props.bags[0].rest}元`}
                    </div>
                    <div className="money-field">
                        {`${this.props.bags[0].isMax ? `是`:`不是`}最佳手气`}
                    </div>
                </div>
                <div className="list-field">
                    <ul className="list-item">
                        {this.props.bags.map((bag, i) => 
                            <ListItem name={`${i+1}、`}
                                    isMax={bag.isMax === true ? true : false}
                                    bag={`获得${bag.bag}元`}
                                    rest={`剩余${bag.rest}元`}
                                    key={i} />
                        )}
                    </ul>
                </div>
            </div>   
        )
    }
}

const mapStateToProps = (state) => {
    return {
        bags: state.bags
    }
}

BagList = connect(mapStateToProps)(BagList)
export default BagList