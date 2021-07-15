import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    render() {
        const { onReset, counters, onDelete, onIncrement, onDecrement, onCreate } = this.props;
        return (
            <div>

                <table>
                    <thead>
                        <tr>
                            <th colSpan="3" className="text-start">Products</th>
                            <th colSpan="2" className="text-end">
                                <button className="btn btn-info btn-sm my-2 ms-3" onClick={onReset}>Reset All</button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {counters.map(counter =>
                            <Counter
                                key={counter.id}
                                onDelete={onDelete}
                                onIncrement={onIncrement}
                                onDecrement={onDecrement}
                                counter={counter}
                            />)}
                        <tr>
                            <td colSpan="5" className="text-end">
                                <button className="btn btn-success btn-sm my-2 ms-3" onClick={onCreate}>Create new</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Counters;