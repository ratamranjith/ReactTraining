import { useState } from "react";

const MultipleStateManagement = () => {
  const [color, setColor] = useState("Orange");
  const [brand, setBrand] = useState("Honda");
  const [model, setModel] = useState("Hornet");
  const [year, setYear] = useState(2020);

  return (
    <div>
      <h1>Vehicle Details</h1>
      <p>Brand: {brand}</p>{" "}
      <button
        onClick={() => {
          setBrand("Toyota");
        }}
      >
        Change
      </button>
      <p>Color: {color}</p>
      <button
        onClick={() => {
          setColor("Red");
        }}
      >
        Change
      </button>
      <p>Model: {model}</p>
      <button
        onClick={() => {
          setModel("HondaZ");
        }}
      >
        Change
      </button>
      <p>Year: {year}</p>
      <button
        onClick={() => {
          setYear(2025);
        }}
      >
        Change
      </button>
    </div>
  );
};

export default MultipleStateManagement;
