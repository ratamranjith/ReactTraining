import React from "react";

class ClassStateManagement extends React.Component {
  constructor() {
    super();
    this.state = { color: "red" };
  }

  render() {
    return (
      <>
        <p>Hellow vanakkam da mamu {this.state.color}</p>
        <button
          onClick={() => {
            this.setState({ color: "blue" });
          }}
        >
          Click to Change
        </button>
      </>
    );
  }
}

export default ClassStateManagement;
