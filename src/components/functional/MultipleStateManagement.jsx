import { useState } from "react";

const vehicle = {
  brand: "Toyota",
  model: "Camry",
  year: 2015,
  color: "Blue",
};

const MultipleStateManagement = () => {
  //   const [color, setColor] = useState("Orange");
  //   const [brand, setBrand] = useState("Honda");
  //   const [model, setModel] = useState("Hornet");
  //   const [year, setYear] = useState(2020);
  const [vehicles, setVehicles] = useState(vehicle);

  console.log("Current State", vehicles);

  const changeColor = () => {
    setVehicles((prevVehicles) => {
      return { ...prevVehicles, color: "Red" };
    });
  };

  return (
    <>
      <h1>Vehicle Details</h1>
      <p>Brand: {vehicles.brand}</p> <p>Color: {vehicles.color}</p>
      <p>Model: {vehicles.model}</p>
      <p>Year: {vehicles.year}</p>
      <button
        onClick={() => {
          setVehicles({
            brand: "Honda",
            model: "Hornet",
            year: 2025,
            color: "green",
          });
        }}
      >
        Change All
      </button>
      <button onClick={changeColor}>Change Color</button>
    </>
  );
};

export default MultipleStateManagement;
