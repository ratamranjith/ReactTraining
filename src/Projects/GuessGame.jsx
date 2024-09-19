import { useState } from "react";

const GuessGame = () => {
  const [guess, setGuess] = useState("");
  const [result, setResult] = useState("");
  const [secretKy] = useState(Math.floor(Math.random() * 10) + 1);

  const guessMe = (e) => {
    const userGuess = e.target.value; // Get the user's guess from the input value
    setGuess(userGuess); // Update the guess state
    console.log(secretKy);

    if (userGuess === "") {
      setResult("");
    } else if (parseInt(userGuess, 10) === secretKy) {
      setResult("Correct!");
    } else {
      setResult(`Incorrect: Try Again. The secret key is between 1 and 10.`);
    }
  };

  const guessedOne = (e) => {
    guessMe(e);
  };

  return (
    <div>
      <input
        type="number"
        placeholder="Enter the Number"
        value={guess}
        onChange={guessedOne}
      />
      <span>Your guess is {result}</span>
    </div>
  );
};

export default GuessGame;
