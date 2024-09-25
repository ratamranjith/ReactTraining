import { useReducer } from "react";

const ACTION = {
  ADD: "ADD",
  REMOVE: "REMOVE",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION.ADD:
      return { ...state, count: state.count + 1 };
    default:
      return state;
  }
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, { count: 2 });

  const increment = () => {
    dispatch({ type: ACTION.ADD });
  };

  return (
    <>
      <p>{state.count}</p>
      <button onClick={increment} className="bg-primary">
        +
      </button>
    </>
  );
};

export default UseReducer;
