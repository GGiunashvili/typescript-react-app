import { useState } from "react";
import quizData from "../data.json";

export default function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [showScore, setShowScore] = useState<boolean>(false);

  function onSelectOption(selectedOption: string) {
    if (selectedOption === quizData[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < quizData.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setShowScore(true);
    }
  }

  return (
    <div>
      {showScore ? (
        <h1>
          Your Score: {score}/{quizData.length}
        </h1>
      ) : (
        <>
          <h1>{quizData[currentQuestionIndex]?.question}</h1>
          <ul>
            {quizData[currentQuestionIndex].options.map((option) => (
              <li key={option}>
                <button onClick={() => onSelectOption(option)}>{option}</button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
