import "./App.css";
import { Round, Profile2 } from "./components/molecules/Round";
import { useState } from "react";

const rounds = [
  {
    question: "Pytanie1",
    options: [{
      text: "odpowiedź",
      isCorrect: false
    }, 
    {
        text: "odpowiedź",
        isCorrect: true
      }
    ]
  }
];



function App() {
  const [isopen, setisopen] = useState(true)



  return (
    <div>
      {rounds.map((round)=>{
        return <Round name = {user.name} isopen={isopen} setisopen={setisopen} />
      })} 
    </div>
  );
}

export default App;
