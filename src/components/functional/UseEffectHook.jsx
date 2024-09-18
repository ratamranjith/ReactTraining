import { useState, useEffect } from "react";

// const UseEffectHook = () => {
//   const [status, setStatus] = useState("Landed");

//   useEffect(() => {
//     console.log("Spaceship is launching...");
//     setStatus("In Space"); // Simulate a spaceship launching

//     // Optional cleanup function when component unmounts
//     return () => {
//       console.log("Spaceship has been removed.");
//     };
//   }, []); // Empty array means run only once (on mount)

//   return <div>Spaceship Status: {status}</div>;
// };

// export default UseEffectHook;
// import { useState, useEffect } from "react";

// const UseEffectHook = () => {
//   const [galaxy, setGalaxy] = useState("Milky Way");
//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     setMessage(`Exploring the ${galaxy} galaxy...`);
//     console.log(message);

//     // Cleanup function (optional)
//     return () => {
//       console.log(`Leaving the ${galaxy} galaxy.`);
//     };
//   }, [galaxy]); // Effect runs whenever `galaxy` changes

//   return (
//     <div>
//       <h1>{message}</h1>
//       <button onClick={() => setGalaxy("Andromeda")}>Go to Andromeda</button>
//       <button onClick={() => setGalaxy("Whirlpool")}>Go to Whirlpool</button>
//     </div>
//   );
// };

// export default UseEffectHook;

// const UseEffectHook = () => {
//   const [species, setSpecies] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Fetch alien species from a fake API
//     fetch("https://api.sampleapis.com/coffee/hot")
//       .then((response) => response.json())
//       .then((data) => {
//         setSpecies(data);
//         setLoading(false);
//       })
//       .catch((error) => console.error(error));
//   }, []); // Run only once (on mount)

//   return (
//     <div>
//       {loading ? (
//         <p>Loading alien species...</p>
//       ) : (
//         <ul>
//           {species.map((coffee) => (
//             <li key={coffee.id}>{coffee.title}</li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default UseEffectHook;

// const UseEffectHook = () => {
//   const [blackHoleData, setBlackHoleData] = useState(null);

//   useEffect(() => {
//     const blackHoleListener = (event) => {
//       setBlackHoleData(event.detail);
//     };

//     window.addEventListener("blackHoleDetected", blackHoleListener);

//     // Cleanup the event listener when the component unmounts
//     return () => {
//       window.removeEventListener("blackHoleDetected", blackHoleListener);
//     };
//   }, []); // Runs only once (on mount) and cleans up on unmount

//   return (
//     <div>
//       {blackHoleData ? (
//         <p>Black hole detected at coordinates: {blackHoleData.coordinates}</p>
//       ) : (
//         <p>No black hole detected yet.</p>
//       )}
//     </div>
//   );
// };

// export default UseEffectHook;
const UseEffectHook = () => {
  const [count, setCount] = useState(1);

  // If needed continuously means only use this hook
  useEffect(() => {
    if (count > 10) {
      setCount(1);
    }
    return console.log("Done");
  }, [count]);

  const loadMe = () => {
    setCount((previousCount) => {
      return previousCount + 1;
    });
  };

  return (
    <div>
      <p>Loading: {count}</p>
      <button onClick={loadMe}>Load Me</button>
    </div>
  );
};

export default UseEffectHook;
