import React, { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    { done: false, text: "Taste JavaScript" },
    { done: false, text: "Code furiously" },
    { done: false, text: "Promote Mavo" },
    { done: false, text: "Give talks" },
    { done: false, text: "Write tutorials" },
    { done: false, text: "Have a life!" },
  ]);

  // Tikleme işlemi:
  const handleToggle = (index) => {
    setTodos((todos) =>
      todos.map((todo, i) =>
        i === index ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  return (
    <div className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <form>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            autoFocus
          />
        </form>
      </header>

      <section className="main">
        <input id="toggle-all" className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>

        <ul className="todo-list">
          {todos.map((todo, i) => (
            <li key={i} className={todo.done ? "completed" : ""}>
              <div className="view">
                <input
                  className="toggle"
                  type="checkbox"
                  checked={todo.done}
                  onChange={() => handleToggle(i)}
                />
                <label>{todo.text}</label>
                <button className="destroy"></button>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <footer className="footer">
        <span className="todo-count">
          {todos.filter((todo) => !todo.done).length} items left
        </span>
        <ul className="filters">
          <li>
            <a className="selected" href="#">
              All
            </a>
          </li>
          <li>
            <a href="#">Active</a>
          </li>
          <li>
            <a href="#">Completed</a>
          </li>
        </ul>
        <button className="clear-completed">Clear completed</button>
      </footer>

      <footer className="info">
        <p>Click to edit a todo</p>
        <p>
          Created by <a href="https://d12n.me/">Dmitry Sharabin</a> with{" "}
          <a href="https://mavo.io">Mavo</a>
        </p>
        <p>
          Part of <a href="http://todomvc.com">TodoMVC</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
