import { useState } from "react";

// ქულების ტიპი
type Scores = {
  [key: string]: number;
};

export default function App() {
  const [scores, setScores] = useState<Scores>({ Taylor: 0, Sarah: 0 });
  const [isPlayerA, setIsPlayerA] = useState<boolean>(true);

  // ამჟამინდელი მოთამაშის სახელი
  const currentPerson = isPlayerA ? "Taylor" : "Sarah";

  // ქულის განახლების ფუნქცია
  const updateScore = (person: string, newScore: number) => {
    setScores((prevScores) => ({
      ...prevScores,
      [person]: newScore,
    }));
  };

  return (
    <div>
      <Counter
        person={currentPerson}
        score={scores[currentPerson]}
        updateScore={updateScore}
      />
      <button
        onClick={() => {
          setIsPlayerA(!isPlayerA);
        }}
      >
        Next player!
      </button>
    </div>
  );
}

type CounterProps = {
  person: string;
  score: number;
  updateScore: (person: string, newScore: number) => void;
};

function Counter({ person, score, updateScore }: CounterProps) {
  const [hover, setHover] = useState<boolean>(false);

  let className = "counter";
  if (hover) {
    className += " hover";
  }

  return (
    <div
      className={className}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <h1>
        {person}'s score: {score}
      </h1>
      <button
        onClick={() => {
          updateScore(person, score + 1); // ქულის განახლება
        }}
      >
        Add one
      </button>
    </div>
  );
}
