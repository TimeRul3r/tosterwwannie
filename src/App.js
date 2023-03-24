import "./App.css";
import { Round, Profile2 } from "./components/molecules/Round";
import { useState } from "react";

const rounds = [
  // To jest objekt
  {
    // question = klucz
    // "Pytanie1" = wartość
    question: "Pytanie1",
    options: [
      // To jest objekt
      {
        text: "odpowiedź 1",
        isCorrect: false,
      },
      {
        text: "odpowiedź 2",
        isCorrect: true,
      },
    ],
  },
  {
    // question = klucz
    // "Pytanie1" = wartość
    question: "Pytanie2",
    options: [
      // To jest objekt
      {
        text: "odpowiedź 1",
        isCorrect: false,
      },
      {
        text: "odpowiedź 2",
        isCorrect: true,
      },
    ],
  },
  {
    // question = klucz
    // "Pytanie1" = wartość
    question: "Pytanie3",
    options: [
      // To jest objekt
      {
        text: "odpowiedź 1 ",
        isCorrect: false,
      },
      {
        text: "odpowiedź 2",
        isCorrect: true,
      },
    ],
  },
  //
];

function App() {
  const [currentRound, setCurrentRound] = useState(0);

  const handleChooseOption = (isCorrect) => {
    console.log("Wybrałem opcje ?", isCorrect);

    if (isCorrect && currentRound < rounds.length - 1)
      setCurrentRound((prev) => prev + 1);
  };

  return (
    <div>
      <Round round={rounds[currentRound]} chooseOption={handleChooseOption} />
    </div>
  );
}

export default App;
