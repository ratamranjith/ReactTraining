import "../assets/css/externalStyle.css";

const InlineStyleComponent = () => {
  return (
    <div>
      <p style={{ color: "green", backgroundColor: "teal" }}>
        Inline Stlye Component
      </p>

      <p>
        <span>External Style Component</span>
      </p>
    </div>
  );
};

export default InlineStyleComponent;
