import PropTypes from "prop-types";

const FunctionalComponentExample = ({ productInfo }) => {
  return (
    <>
      {Object.entries(productInfo).map(([product, price], index) => (
        <p key={index}>
          {product}: {price}
        </p>
      ))}
    </>
  );
};

// Define prop types for the component
FunctionalComponentExample.propTypes = {
  productInfo: PropTypes.object.isRequired, // Expecting productInfo to be an object and required
};

export default FunctionalComponentExample;
