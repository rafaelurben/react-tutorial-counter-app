import React, { Component } from 'react';

class Counter extends Component {
    render() {
        return (
            <tr>
                <td><span>{this.getName()}</span></td>
                <td><span className={this.getNumberBadgeClasses()}>{this.props.counter.value}</span></td>
                <td><button onClick={() => this.props.onIncrement(this.props.counter)} className={this.getIncrementBadgeClasses()}>+</button></td>
                <td><button onClick={() => this.props.onDecrement(this.props.counter)} className={this.getDecrementBadgeClasses()}>-</button></td>
                <td><button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm ms-1">Delete</button></td>
            </tr >
        );
    }

    getNumberBadgeClasses() {
        return "badge m-2 bg-" + (this.props.counter.value === 0 ? 'warning' : 'primary');
    }

    getIncrementBadgeClasses() {
        return "btn btn-secondary btn-sm ms-1";
    }

    getDecrementBadgeClasses() {
        return "btn btn-secondary btn-sm ms-1" + (this.props.counter.value === 0 ? ' disabled' : '');
    }

    getName() {
        return `Product #${this.props.counter.id}`
    }
}

export default Counter;