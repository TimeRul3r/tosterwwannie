import { Option } from "./Option";

export const Question = ({ move, roundId, option, chooseOption }) => {
  console.log(move);
  console.log(roundId);

  const isMoveCorrect = () => {
    if (!move) return "";

    if (move?.roundId === roundId && move?.option.isCorrect) {
      return "prawda";
    }

    return "fałsz";
  };

  return (
    <Option
      text={`${option.text} - ${
        move?.option.text === option.text ? isMoveCorrect() : undefined
      }`}
      isCorrect={move?.option.text === option.text ? true : false}
    />
    // <button onClick={() => chooseOption(option)}>
    //    {option.text}

    //    {move?.option.text === option.text ?  isMoveCorrect() : undefined}
    // </button>
  );
};
