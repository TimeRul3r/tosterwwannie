import { Question } from "../atoms/Question";
import { Option } from "../atoms/Option";
import { useState } from "react";

// Component
export const Round = ({ move, round, chooseOption}) => { 

    return (
      <div>
        <h1>{round.question}</h1>
        {/* Question to jest Component */}
        {round.options.map(option => {

          return <Question move={move} roundId={round.id} option={option} chooseOption={chooseOption}  />
        })}
        
      </div>
    );
}

  
