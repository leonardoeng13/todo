/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';

const Todo = ({
  text, todo, todos, setTodos,
}) => {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };
  const completeHandler = () => {
    setTodos(todos.map((item) => {
      if (item.id === todo.id) {
        return {
          ...item, completed: !item.completed,
        };
      }
      return item;
    }));
  };
  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>{ text }</li>
      <button type="button" onClick={completeHandler} className="complete-btn"><i className="fas fa-check" /></button>
      <button type="button" onClick={deleteHandler} className="trash-btn"><i className="fas fa-trash" /></button>
    </div>
  );
};

export default Todo;
