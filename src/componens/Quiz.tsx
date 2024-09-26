import { useState } from "react";

import quizData from "../data.json";
import Question from "./Questions";

export default function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [showScore, setShowScore] = useState<boolean>(false);

  function onSelectOption(selectedOption: string) {
    if (selectedOption === quizData[currentQuestionIndex].correctAnswer) {
      // console.log(selectedOption); გამოაჩენს ყველა ჩამთვლილ შესაძლო პასუხს
      // console.log(selectedOption, quizData[currentQuestionIndex].correctAnswer); გამოაჩენს რაც აირჩია მომხარებელმა, და გამოაჩენს სწორ პასუხს
      // setCurrentQuestionIndex(currentQuestionIndex + 1); გადავა შემდეგ კითხვაზე სწორია თუ არა პასუხი ყველა შემთხვევაში
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
        <Question
          score={score}
          quizdataLength={quizData.length}
          currentQuestionIndex={currentQuestionIndex}
          question={quizData[currentQuestionIndex]?.question}
          options={quizData[currentQuestionIndex].options}
          onSelectOption={onSelectOption}
        />
      )}
    </div>
  );
}
