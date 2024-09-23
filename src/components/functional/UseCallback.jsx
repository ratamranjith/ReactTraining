import { useState, useCallback } from "react";
import ListItem from "./ListItem";

const UseCallback = () => {
  const [value, setValue] = useState(0);

  const [theme, setTheme] = useState(false);

  const numbers = () => {
    return [value + 1, value + 2, value + 3];
  };

  const styleChange = {
    background: theme ? "lime" : "white",
    padding: 10,
    border: "1px solid black",
    color: theme ? "white" : "blue",
  };

  const changeTheme = useCallback(() => {
    setTheme(!theme);
  }, [theme]);

  return (
    <>
      <div style={styleChange}>
        <input
          type="text"
          onChange={(event) => {
            setValue(event.target.value);
          }}
        />
        <button onClick={changeTheme}>Click to Chanage</button>
        <p>Value is {value}</p>
        <ListItem numbers={numbers} />
      </div>
    </>
  );
};

export default UseCallback;
