import React from "react";

class MultipleClassStateManagement extends React.Component {
  constructor() {
    super();
    this.state = {
      brand: "Toyota",
      model: "Camry",
      year: 2015,
      color: "Blue",
    };
  }

  render() {
    const changeAll = () => {
      this.setState({
        brand: "Honda",
        model: "Civic",
        year: 2018,
        color: "Red",
      });
    };
    const changeColor = () => {
      this.setState((prevVehicles) => {
        return { ...prevVehicles, color: "Green" };
      });
    };

    return (
      <>
        <h1>My Car</h1>
        <p>Brand: {this.state.brand}</p>
        <p>Model: {this.state.model}</p>
        <p>Year: {this.state.year}</p>
        <p>Color: {this.state.color}</p>
        <button onClick={changeAll}>Change All</button>
        <button onClick={changeColor}>ChangeColor</button>
      </>
    );
  }
}

export default MultipleClassStateManagement;
