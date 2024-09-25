import { useState } from "react";

const UseState = () => {
  const [value, setValue] = useState(0);

  // Generate random value based on given name
  const generateRandomValue = () => {
    const randomIndex = Math.floor(Math.random() * 999);

    console.log();

    setValue(randomIndex);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Enter the name"
        onChange={(e) => setValue(e.target.value)}
      />
      <button className="bg-primary rounded-lg" onClick={generateRandomValue}>
        Generate{" "}
      </button>
      <p>value is{value}</p>
    </>
  );
};

export default UseState;
