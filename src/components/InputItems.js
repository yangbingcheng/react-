import React,  { Component } from 'react'
import { Link } from 'react-router-dom'
import Info from './Info'

class InputItem extends Component {

    constructor() {
        super()
        this.state = {
            people: '',
            money: '',
            text1: '',
            text2: '',
        }
    }

    handlePeopleNumber(e) {
        var v = e.target.value + ''
        console.log(v)
        if (/\D/.test(v)) {
            this.setState({
                people: v.replace(/\D/, ''),
                text1: '人数必须为整数'
            })
            return false
        } else if (/^[0]/.test(v)) {
            this.setState({
                people: v.replace(/^[0]/, ''),
                text1: '人数必须大于0'
            })
            return false
        } else {
            this.setState({
                people: v,
                text1: '',
            })
        }
    }

    handleMoneyNumber(e) {
        var v = e.target.value
        if (+v !== Number(v)) {
            this.setState({
                money: v.replace(/\D$/, ''),
                text2: '钱数必须是数字'
            })
            return false
        } else if (Number(v) < 0.01) {
            this.setState({
                money: v,
                text2: '钱数必须大于0.01'
            })
            return false
        } else{
            this.setState({
                money: v,
                text2: '',
            })
        }
    }

    handleSubmit(e) {
        if ((!this.state.text1) 
        && (!this.state.text2) 
        && (this.state.people)
        && (this.state.money)
        && (this.props.onSubmit)) {
            const { people, money } = this.state
            if (Number(money) < 0.01 * Number(people)) {
                this.setState({
                    text2: '平均金额不能小于0.01'
                })
                e.preventDefault()
            } else {
                this.props.onSubmit({ people, money })
                this.setState({
                    people: '',
                    money: '',
                })
            }
        } else {
            e.preventDefault()
        }
    }

    render() {
 
        return (
            <div className="wrapper-input">
                <h2 className="input-title">发红包</h2>
                <div className="input-block">
                    <div className="input-field">
                        <div className="input-people">
                            <label>请输入人数</label>
                            <input type="text" 
                            value={this.state.people}
                            onChange={this.handlePeopleNumber.bind(this)}
                            autoFocus/>
                        </div>
                        <Info text={this.state.text1}/>
                    </div>
                    <div className="input-field">
                        <div className="input-money">
                            <label>请输入金额</label>
                            <input type="text" 
                            value={this.state.money}
                            onChange={this.handleMoneyNumber.bind(this)} />
                        </div>
                        <Info text={this.state.text2}/>
                    </div>
                </div> 
                <div className="send-bag">
                    <Link to="/complete" onClick={this.handleSubmit.bind(this)}>发红包</Link>
                </div>          
            </div>
        )
    }
}


export default InputItem