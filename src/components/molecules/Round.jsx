import { Question } from "../atoms/Question";
import { Option } from "../atoms/Option";
import { useState } from "react";

// Component
export const Round = ({round, chooseOption}) => { 
    console.log(round)


    return (
      <div>
        <h1>{round.question}</h1>
        {/* Question to jest Component */}
        {round.options.map(option => {

          return <Question option={option} chooseOption={chooseOption}  />
        })}
        
      </div>
    );
}

  
