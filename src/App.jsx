import "./App.css";
// import ClassComponentExample from "./components/classComponentExample";
import FunctionalComponentExample from "./components/FunctionalComponentExample";
function App() {
  const products = {
    Apple: 50,
    Samsung: 45,
    OnePlus: 40,
    Google: 55,
    Xiaomi: 35,
  };
  return (
    <>
      {/* <ClassComponentExample productInfo={products} /> */}
      <FunctionalComponentExample productInfo={products} />
    </>
  );
}

export default App;
