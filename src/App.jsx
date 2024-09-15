// import ClassComponentExample from "./components/classComponentExample";
// import FunctionalComponentExample from "./components/FunctionalComponentExample";
import ListInComponents from "./components/ListInComponents";
import ListProductCompanies from "./components/ListProductCompanies";
import "./App.css";
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
        <button
          type="submit"
          className="w-64 bg-teal-500 rounded-xl text-white py-4 px-4"
          onClick={ChangeMe}
        >
          Submit
        </button>
      </div>
      {/*Conditional Rendering */}
      {products ? (
        <>
          {/* <ClassComponentExample productInfo={products} />
          <FunctionalComponentExample productInfo={products} /> */}
          <ListInComponents />
          <ListProductCompanies />
        </>
      ) : (
        <p>Eppadi work aagum</p>
      )}
    </>
  );
}

export default App;
