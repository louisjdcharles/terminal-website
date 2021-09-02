import React, { Component } from 'react';

import "./Counter.css"

class Counter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            value: this.props.counter.value,
        }

        this.handleIncrement = this.handleIncrement.bind(this);
        this.handleDecrement = this.handleDecrement.bind(this);
    }

    handleIncrement() {
        this.setState({
            value : this.state.value + 1
        })
    }

    handleDecrement() {
        this.setState({
            value : this.state.value - 1
        })
    }

    render() {
        return(
            <div>
                <span className={this.getCountClasses()}>{this.showCount()}</span>
                <button onClick={this.handleIncrement} className="btn btn-primary btn-sm m-2 countChanger">+</button>
                <button onClick={this.handleDecrement} className="btn btn-primary btn-sm m-2 countChanger">-</button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
            </div>
        );
    }

    getCountClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.value === 0 ? "warning" : "primary";

        return classes;
    }

    showCount() {
        const { value } = this.state;
        return value === 0 ?
            "Zero" : value;
    }
}

export default Counter;