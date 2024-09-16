// import ClassComponentExample from "./components/classComponentExample";
// import FunctionalComponentExample from "./components/FunctionalComponentExample";
// import ListInComponents from "./components/ListInComponents";
// import ListProductCompanies from "./components/ListProductCompanies";
// import InlineStyleComponent from "./components/InlineStyleComponent";
// import StyleForParticularComponent from "./components/StyleForParticularComponent";
import StateManagement from "./components/functional/StateManagement";
import ClassStateManagement from "./components/class/ClassStateManagement";
// import "./App.css";
import FavoriteProduct from "./components/FavoriteProduct";
import MultipleStateManagement from "./components/functional/MultipleStateManagement";
function App() {
  const products = {
    Apple: 50,
    Samsung: 45,
    OnePlus: 40,
    Google: 55,
    Xiaomi: 35,
  };

  // const ChangeMe = () => {
  //   console.log("Button clicked");
  // };

  return (
    <>
      {/*Conditional Rendering */}
      {products ? (
        <>
          <FavoriteProduct />
          <StateManagement />
          <ClassStateManagement />
          <MultipleStateManagement />
          {/* <div>
            <InlineStyleComponent />
          </div>
          <div>
            <StyleForParticularComponent />
          </div>
          <div>
            <ClassComponentExample productInfo={products} />
          </div>
          <div>
            <FunctionalComponentExample productInfo={products} />
          </div>
          <div>
            <ListInComponents />
          </div>

          <ListProductCompanies />

          <div>
            <input type="text" placeholder="component: class | functional" />
            <button
              type="submit"
              className="w-64 bg-teal-500 rounded-xl text-white py-4 px-4"
              onClick={ChangeMe}
            >
              Submit
            </button>
          </div> */}
        </>
      ) : (
        <p>Eppadi work aagum</p>
      )}
    </>
  );
}

export default App;
