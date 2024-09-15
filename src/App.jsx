import "./App.css";
import ClassComponentExample from "./components/classComponentExample";
import FunctionalComponentExample from "./components/FunctionalComponentExample";
function App() {
  const products = {
    Apple: 50,
    Samsung: 45,
    OnePlus: 40,
    Google: 55,
    Xiaomi: 35,
  };

  const ChangeMe = () => {
    console.log("Button clicked");
  };

  return (
    <>
      <div>
        <input type="text" placeholder="component: class | functional" />
        <button type="submit" onClick={ChangeMe}>
          Submit
        </button>
      </div>
      {/*Conditional Rendering */}
      {products.Apple >= 20 && products.OnePlus < 60 ? (
        <>
          <ClassComponentExample productInfo={products} />
          <FunctionalComponentExample productInfo={products} />
        </>
      ) : (
        <p>Eppadi work aagum</p>
      )}
    </>
  );
}

export default App;
