// import Quiz from "./componens/Quiz";
// import MyQuiz from "./componens/MyQuiz";
// import Todo from "./componens/Todo";
import State from "./componens/State";
import { useState } from "react";
import { sculptureList } from "./componens/Data";

function App() {
  const [index, setIndex] = useState(0); // Correct use of useState with parentheses
  function handleClick() {
    setIndex((index + 1) % sculptureList.length);
  }
  return (
    <>
      {/* <MyQuiz /> */}
      {/* <Todo /> */}
      {/* <Form /> */}
      <State index={index} handleClick={handleClick} />
      <State index={index} handleClick={handleClick} />
    </>
  );
}

export default App;
