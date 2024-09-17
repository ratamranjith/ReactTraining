import { useState } from "react";

const ArrayInStateManagement = () => {
  const [list, setList] = useState([]);
  const [count, setCount] = useState(1);

  const addItem = () => {
    let ListValue = `item-${count}`;
    setList((previousList) => {
      return [...previousList, ListValue];
    });

    setCount((previousCount) => {
      return previousCount + 1;
    });
  };

  return (
    <div>
      <button onClick={addItem}>AddList</button>
      <ul>
        {list.map((el, index) => {
          return <li key={index}>{el}</li>;
        })}
      </ul>
    </div>
  );
};

export default ArrayInStateManagement;
