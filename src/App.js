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
      text: "odpowiedź",
      isCorrect: false,

    }, 
    {
        text: "odpowiedź",
        isCorrect: true
      }
    ]
  }
  // 
];




function App() {
  const [isopen, setisopen] = useState(true)

  return (
    <div>
      {rounds.map((round)=>{
        return <Round round = {round} />
      })} 
    </div>
  );
}

export default App;
