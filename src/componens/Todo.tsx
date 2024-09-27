import { useState } from "react";

export default function Todo() {
  // todo მონაცემების ინიციალიზაცია პირდაპირ კომპონენტში
  const [todos, setTodos] = useState([
    { id: 1, task: "Research the capital of France", completed: false },
    {
      id: 2,
      task: "Read 'To Kill a Mockingbird' by Harper Lee",
      completed: true,
    },
    {
      id: 3,
      task: "Learn about the smallest planet in the solar system",
      completed: false,
    },
    {
      id: 4,
      task: "Understand the chemical symbol for water",
      completed: false,
    },
    { id: 5, task: "Find out when the Titanic sank", completed: false },
  ]);

  const [inputText, setInputText] = useState<string>("");
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");

  function inputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputText(e.target.value);
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (inputText.trim()) {
      const newTodo = {
        id: todos.length + 1, // ახალ ელემენტს უნიკალური id მივანიჭოთ
        task: inputText,
        completed: false,
      };
      setTodos([...todos, newTodo]); // დავამატოთ ახალი ტასკი
      setInputText(""); // ტექსტური ველის გასუფთავება
    }
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

  function inputOnChange(e: React.ChangeEvent<HTMLInputElement>, id: number) {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: e.target.checked };
      }
      return todo;
    });
    setTodos(updatedTodos); // განვაახლებთ todos state-ს
  }

  function deleteTodo(id: number) {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos); // წავშალოთ todo
  }

  function clearCompleted() {
    const activeTodos = todos.filter((todo) => !todo.completed);
    setTodos(activeTodos); // წავშალოთ შესრულებული ტასკები
  }

  return (
    <>
      <div className="p-10">
        <form onSubmit={onSubmit} className="flex">
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900"
            type="text"
            value={inputText}
            onChange={inputChange}
          />
          <button type="submit">Add Todo</button>
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
                checked={todo.completed}
                onChange={(e) => inputOnChange(e, todo.id)}
              />
              <label>{todo.task}</label>
              <div
                onClick={() => deleteTodo(todo.id)}
                style={{ cursor: "pointer", color: "red" }}
              >
                X
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-start justify-center gap-5 mt-10">
          {/* "active", "completed" და "all" */}
          <p>items left {activeTodos.length}</p>
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
            }}
          >
            active {activeTodos.length}
          </p>
          <p
            onClick={() => setFilter("completed")}
            style={{
              cursor: "pointer",
            }}
          >
            completed {completedTodos.length}
          </p>

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
