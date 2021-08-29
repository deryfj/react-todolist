import React from "react";

import Todo from "./Todo";

const Todos = () => {
  const todos = [
    {
      text: "Belajar cuyy"
    },

    {
      text: "Belajar ciy"
    },

    {
      text: "Belajar kuyy"
    },

    {
      text: "Belajar kuy"
    },

    {
      text: "Belajar yok"
    },

    {
      text: "Belajar boyy"
    },

    {
      text: "Belajar bey"
    },

    {
      text: "Belajar duyy"
    },

    {
      text: "Belajar niyy"
    }
  ];

  return (
    <section className="todos">
      {todos.map((todo) => {
        return <Todo text={todo.text} />;
      })}
    </section>
  );
};

export default Todos;
