import React, { Component } from 'react';

import Counter from "./Counter";

class Counters extends Component {

    constructor(props) {
        super(props);

        this.state = {
            counters : [
                { id : 0, value : 0},
                { id : 1, value : 10},
                { id : 2, value : 20},
                { id : 3, value : 100},
            ]
        };

        this.handleDelete = this.handleDelete.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleDelete(counterID) {
        const counters = this.state.counters.filter(c => c.id !== counterID);

        this.setState({ counters });
    }

    handleReset(){
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });

        this.setState({ counters })
    }

    render() {
        return(
            <div>
                <button onClick={this.handleReset} className="btn btn-primary btn-sm m-2">
                    Reset
                </button>
                {this.state.counters.map(c =>
                    <Counter
                        key={c.id}
                        onDelete={this.handleDelete}
                        counter={c}
                    />
                )}
            </div>
        );
    }
}

export default Counters;