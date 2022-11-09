import React, { useState } from "react";

function TodoForm(props) {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    if (name.trim().length === 0) {
      e.preventDefault();
      setName("");
      alert("Try again.");
    } else {
      e.preventDefault();
      props.addTask(name);
      setName("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        value={name}
        onChange={handleChange}
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add todo
      </button>
    </form>
  );
}

export default TodoForm;
