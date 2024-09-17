import React from "react";
import PropTypes from "prop-types";

class ClassComponentExample extends React.Component {
  static propTypes = {
    productInfo: PropTypes.object.isRequired, // Consistent naming for productInfo prop
  };

  render() {
    const { productInfo } = this.props;
    console.log(productInfo || "Missing Data"); // Logging the data before rendering

    return (
      <>
        {Object.entries(productInfo).map(([name, value], index) => (
          <p key={index}>
            {index}: {name} {value}
          </p>
        ))}
      </>
    );
  }
}

export default ClassComponentExample;
