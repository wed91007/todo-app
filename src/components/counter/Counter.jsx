import React, {Component}from 'react'
import PropTypes from 'prop-types'
import './Counter.css'

class Counter extends Component {
    constructor() {
        super() // must call
        this.state = {
            counter : 0,
            
        }
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
    }


    render(){
        return(
        <div className = "counter">
            <CounterButton by = {1} incrementMethod = {this.increment}></CounterButton>
            <CounterButton by = {5} incrementMethod = {this.increment}></CounterButton>
            <CounterButton by = {10} incrementMethod = {this.increment}></CounterButton>
            <CounterButton by = {1} decrementMethod = {this.decrement}></CounterButton>
            <CounterButton></CounterButton>
            <span className = "count">{this.state.counter}</span>
        </div>
        );
    }

    increment(by) {//update the state - counter++
        // console.log(`increment from child - ${by}`)
        this.setState(
        (prevState) =>  {
            return {counter : prevState.counter + by}
            }
        );
    }

    decrement(by) {
        this.setState(
            (prevState) => {
                return {counter : prevState.counter - by}
            }
        );
    }

    reset(){
        this.setState(
            () => {
                return {counter : this.state.counter = 0}
            }
        )
    }
}

class CounterButton extends Component {
    //Define the initial state in a constructor
    //state => counter 0
    constructor() {
        super() // must call
        this.state = {
            counter : 0,
            
        }
        this.increment = this.increment.bind(this)
    }


    render() {
        return(
        <div className = "counterButton">
            <button onClick = {this.increment}>+{this.props.by}</button>
            
        </div>
        )
    } 
    
    increment() {//update the state - counter++
        
        // this.setState({
        //     counter : this.state.counter + this.props.by + 1
        // })
        this.props.incrementMethod(this.props.by);
    }
}

CounterButton.defaultProps = {
    by : 1
}

CounterButton.propTypes = {
    by : PropTypes.number
}

export default Counter