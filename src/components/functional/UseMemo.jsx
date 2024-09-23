import { useState, useMemo } from "react";

const UseMemo = () => {
  const [value, setValue] = useState(1);
  const [theme, setTheme] = useState(false);

  const valueDisplay = useMemo(() => {
    return `Value Changed now`;
  }, [value]);

  const styleColor = useMemo(() => {
    return {
      background: theme ? "blue" : "white",
      color: theme ? "white" : "blue",
    };
  }, [theme]);

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <div style={styleColor}>
        <p>
          Changed Value: {value} and styleColor: {valueDisplay}{" "}
        </p>
        <input type="text" onChange={(e) => setValue(e.target.value)} />
        <button onClick={() => setTheme((theme) => !theme)}>
          Change Theme
        </button>
      </div>
    </>
  );
};

export default UseMemo;
