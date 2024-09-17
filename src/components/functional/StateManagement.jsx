import { useState } from "react";

function StateManagement() {
  const [color, setColor] = useState("Blue");
  return (
    <>
      <span>{`Color will change to ${color}`}</span>
      <button
        className="w-2/12 rounded p-4 bg-cyan-600 text-white"
        onClick={() => {
          setColor("Orange");
        }}
      >
        Chnage
      </button>
    </>
  );
}

export default StateManagement;
