import React, { Component } from "react";
import Counters from "./components/counters";
import Navbar from "./components/navbar";

class App extends Component {
  state = {
    counters: [],
    highestId: 0,
  };

  handleDecrement = (counter) => {
    if (counter.value === 0) return;

    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleCreate = () => {
    const counters = [...this.state.counters];
    const counter = {
      id: this.state.highestId + 1,
      value: 1,
    };
    counters.push(counter);
    this.setState({ counters, highestId: counter.id });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
            onCreate={this.handleCreate}
            counters={this.state.counters}
          />
        </main>
      </React.Fragment>
    );
  }

  componentDidMount() {
    this.handleCreate();
  }
}

export default App;
