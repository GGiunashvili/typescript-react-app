import { useState } from "react";
import todoData from "../todo.json";

export default function Todo() {
  const [todos, setTodos] = useState(todoData);
  const [inputText, setInputText] = useState<string>("ramew");
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all"); // ფილტრის state

  function inputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputText(e.target.value);
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(inputText);
  }

  // ფილტრავს აქტიურ (შეუსრულებელ) ტასკებს
  const activeTodos = todos.filter((todo) => !todo.completed);

  // ფილტრავს შესრულებულ ტასკებს
  const completedTodos = todos.filter((todo) => todo.completed);

  // განსაზღვრავს, რომელი ტასკები უნდა გამოჩნდეს
  const displayedTodos =
    filter === "all"
      ? todos
      : filter === "active"
      ? activeTodos
      : completedTodos;

  // ფუნქცია checkbox-ის ინდივიდუალური ცვლილებისათვის
  function inputOnChange(e: React.ChangeEvent<HTMLInputElement>, id: number) {
    const checked = e.target.checked;
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: checked };
      }
      return todo;
    });
    setTodos(updatedTodos); // განვაახლებთ todos-ის state
    console.log(`Checkbox with id ${id} status:`, checked);
  }

  // ფუნქცია შესრულებული ტასკების წასაშლელად
  function clearCompleted() {
    const activeTodos = todos.filter((todo) => !todo.completed);
    setTodos(activeTodos); // განვაახლებთ todos, რომ შესრულებული ტასკები წავშალოთ
  }

  return (
    <>
      <div className="p-10">
        {/* ტექსტური ველის და სუბმით ფუნქცია */}
        <form onSubmit={onSubmit} className="flex">
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900"
            type="text"
            value={inputText}
            onChange={inputChange}
          />
          <button type="submit">submit</button>
        </form>

        {/* ტასკების გამოჩენა ფილტრის მიხედვით */}
        <div className="bg-purple-300">
          {displayedTodos.map((todo) => (
            <div
              key={todo.id}
              className="flex items-center justify-between bg-red-300 my-10"
            >
              <input
                className="w-10 h-10 text-blue-600 bg-gray-100 border-gray-300"
                type="checkbox"
                checked={todo.completed} // ინდივიდუალური checkbox-ის მდგომარეობა
                onChange={(e) => inputOnChange(e, todo.id)} // id-ის გადაცემა
              />
              <label>{todo.task}</label>
              <div>X</div>
            </div>
          ))}
        </div>

        <div className="flex items-start justify-center gap-5 mt-10">
          <p>items left {activeTodos.length}</p>

          {/* "active", "completed" და "all" */}
          <p
            onClick={() => setFilter("all")}
            style={{
              cursor: "pointer",
              color: filter === "all" ? "blue" : "black",
            }}
          >
            all {todos.length}
          </p>
          <p
            onClick={() => setFilter("active")}
            style={{
              cursor: "pointer",
              color: filter === "active" ? "blue" : "black",
            }}
          >
            active {activeTodos.length}
          </p>
          <p
            onClick={() => setFilter("completed")}
            style={{
              cursor: "pointer",
              color: filter === "completed" ? "blue" : "black",
            }}
          >
            completed {completedTodos.length}
          </p>

          {/* clear completed ღილაკი */}
          <p
            onClick={clearCompleted}
            style={{ cursor: "pointer", color: "red" }}
          >
            clear completed
          </p>
        </div>
      </div>
    </>
  );
}
