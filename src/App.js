import "./App.css";
import { Round, Profile2 } from "./components/molecules/Round";
import { useState } from "react";

const rounds = [
  {
    id: 0,
    question: "Jak się dostać do 2 elementu w tablicy ?",
    options: [
    {
      text: "array[2]",
      isCorrect: false,

    }, 
    {
        text: "array[1]",
        isCorrect: true
      }
    ]
  },
  {
    id: 1,
    question: "Pytanie2",
    options: [
    {
      text: "odpowiedź 1",
      isCorrect: false,

    }, 
    {
        text: "odpowiedź 2",
        isCorrect: true
      }
    ]
  },
  {
    id: 2,
    question: "Pytanie3",
    options: [
    {
      text: "odpowiedź 1 ",
      isCorrect: false,

    }, 
    {
        text: "odpowiedź 2",
        isCorrect: true
      }
    ]
  },
  {
    id: 3,
    question: "Pytanie4",
    options: [
    {
      text: "odpowiedź 4 ",
      isCorrect: false,
    }, 
    {
        text: "odpowiedź 5",
        isCorrect: true
      }
    ]
  },
];



function App() {
  const [currentRound, setCurrentRound] = useState(0)
  const [userMove, setUserMove] = useState(undefined)
  const [gameStatus, setGameStatus] = useState("STARTED")
 
  const handleChooseOption = (option) => {
    setUserMove({
      roundId: currentRound,
      option
    })



    setTimeout(() => {
      if(option.isCorrect && currentRound < rounds.length -1){
        setCurrentRound((prev) => prev + 1);
        
        return;
      }
  
      setGameStatus("FINISHED")
      
    }, 2000)
  }

  return (
    <div>
      {gameStatus !== "FINISHED" && <Round move={userMove} round={rounds[currentRound]} chooseOption={handleChooseOption}  />}
      {gameStatus === "FINISHED" && <div>Gra jest skończona</div>}

      {/* pokazywanie odpowiedzi przez 5s a po sekunach zmieni nam się dopiero runda */}
      {/* reset gry */}
      
    </div>
  );
}

export default App;
