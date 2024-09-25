type TQuestionProps = {
  question: string;
  options: string[];
  onSelectOption: (selectedOption: string) => void;
};

const Questions: React.FC<TQuestionProps> = ({
  question,
  options,
  onSelectOption,
}) => {
  return (
    <>
      <h1>{question}</h1>
      <ul>
        {options.map((option) => (
          <li key="option">
            <button onClick={() => onSelectOption(option)}>{option}</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Questions;
