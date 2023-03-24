import { Option } from "./Option";

export const Question = ({ option, chooseOption }) => {
  return (
    <button onClick={() => chooseOption(option.isCorrect)}>
      {option.text}
    </button>
  );
};
