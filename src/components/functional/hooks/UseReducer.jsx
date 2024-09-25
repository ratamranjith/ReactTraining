import { useReducer } from "react";
const reducer = (state, action) => {
  console.log(state);
  console.log(action.type);
};
const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, { name: "asdf", age: 25 });

  return (
    <div>
      <input
        type="text"
        onChange={() => {
          dispatch();
        }}
      />

      <p>{state}</p>
    </div>
  );
};

export default UseReducer;
