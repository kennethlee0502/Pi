import React from "react";

class Pi extends React.Component {
  constructor() {
    super();
    this.state = {
      number: 1,
      count: "",
    };
    this.add = this.add.bind(this);
  }

  add = () => {
    this.setState((prevState) => ({ number: prevState.number + 1 }));
  };

  getPi(id) {
    fetch(`https://api.pi.delivery/v1/pi?start=0&numberOfDigits=${id}`)
      .then((response) => response.json())
      .then((data) => this.setState({ count: data.content }));
  }

  componentDidMount() {
    this.getPi(this.state.number);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.number !== this.state.number) {
      this.getPi(this.state.number);
    }
  }

  render() {
    return (
      <>
        <h1>HAPPY PI DAY!</h1>
        <p>
          <h2>Current position of pi :{this.state.number}</h2>
        </p>
        <button onClick={this.add}>+</button>
        <h1>{this.state.count}</h1>
      </>
    );
  }
}

export default Pi;
