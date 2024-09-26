type TQuestionProps = {
  score: number;
  currentQuestionIndex: number;
  quizdataLength: number;
  question: string;
  options: string[];
  onSelectOption: (selectedOption: string) => void;
};

const Questions: React.FC<TQuestionProps> = ({
  score,
  currentQuestionIndex,
  quizdataLength,
  question,
  options,
  onSelectOption,
}) => {
  return (
    <>
      <h1>{`${currentQuestionIndex}) ${question}`}</h1>
      <h2>{`${score} question ${quizdataLength}`}</h2>
      <ul>
        {options.map((option, index) => (
          <li key={index}>
            <button onClick={() => onSelectOption(option)}>{option}</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Questions;
