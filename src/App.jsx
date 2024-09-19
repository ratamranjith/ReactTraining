// import FunctionalComponentExample from "./components/functional/FunctionalComponentExample";
// import ListInComponents from "./components/functional/ListInComponents";
// import ListProductCompanies from "./components/functional/ListProductCompanies";
// import InlineStyleComponent from "./components/functional/InlineStyleComponent";
// import StyleForParticularComponent from "./components/functional/StyleForParticularComponent";
// import StateManagement from "./components/functional/StateManagement";
// import FavoriteProduct from "./components/functional/FavoriteProduct";
// import MultipleStateManagement from "./components/functional/MultipleStateManagement";
// import ClassComponentExample from "./components/class/ClassComponentExample";
// import MultipleClassStateManagement from "./components/class/MultipleClassStateManagement";
// import ClassStateManagement from "./components/class/ClassStateManagement";
// import ArrayInStateManagement from "./components/functional/ArrayInStateManagement";
// import UseEffectHook from "./components/functional/UseEffectHook";
// import FormManagement from "./components/functional/FormManagement";
import "./App.css";
import GuessGame from "./Projects/GuessGame";
function App() {
  // const products = {
  //   Apple: 50,
  //   Samsung: 45,
  //   OnePlus: 40,
  //   Google: 55,
  //   Xiaomi: 35,
  // };

  // const ChangeMe = () => {
  //   console.log("Button clicked");
  // };

  return (
    <>
      <GuessGame />
      {/* <div className="bg-teal-200 w-full float-left h-fit">
        <FormManagement />
      </div> */}
      {/* <div className="bg-blue-800 w-full float-left h-fit">
        <UseEffectHook />
      </div>
      <div className="bg-blue-400 w-full float-left h-fit">
        <ArrayInStateManagement />
      </div>
      <div className="container float-left bg-teal-400 w-auto h-full">
        {products ? (
          <>
            <FavoriteProduct />
            <StateManagement />
            <ClassStateManagement />
            <MultipleStateManagement />
            <MultipleClassStateManagement />
            <div>
              <InlineStyleComponent />
            </div>
            <div>
              <StyleForParticularComponent />
            </div>

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
          </>
        ) : (
          <p>Eppadi work aagum</p>
        )}
      </div>
      <div className="container float-left bg-orange-200 w-auto h-full">
        <ListProductCompanies />
      </div>
      <div className="container float-left bg-blue-200 w-auto h-full">
        <div>
          <ListInComponents />
        </div>
      </div>
      <div className="container float-left bg-yellow-200 w-auto h-full">
        <div>
          <ClassComponentExample productInfo={products} />
        </div>
        <br />
        <div>
          <FunctionalComponentExample productInfo={products} />
        </div>
      </div> */}
    </>
  );
}

export default App;
