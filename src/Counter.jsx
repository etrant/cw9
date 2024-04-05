import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        };
    }

    incrementCount = () => {
            this.setState({
                count: this.state.count + 1
            });
    }
  
    render() {
        return (
            <div className="counter">
                <p>The count is currently: <h3>{this.state.count}</h3></p>
                <button className="btn btn-primary" onClick={this.incrementCount}>Increase</button>
            </div>
        );
    }
}

export default Counter;