import React, { useState, useContext } from 'react';
import globalContext from '../context/global/globalContext';
import todoContext from '../context/todos/todoContext';
import Confetti from './Confetti';

function TodoItem(props) {
  const { todo, updateTodoBtn, updateTodo } = props;
  const [status, setStatus] = useState(todo.status);

  const [confetti, setConfetti] = useState(false);

  const gcontext = useContext(globalContext);
  const { showAlert } = gcontext;

  const context = useContext(todoContext);
  const { deleteTodo, statusTodo } = context;

  return (
    <>
      {confetti && <Confetti></Confetti>}
      <div className="row todoitem glassBox">
        <div className="col-1">
          <input
            className="form-check-input"
            type="checkbox"
            id="checkbox"
            checked={status === 'complete' ? true : false}
            onChange={() => {
              setStatus(status === 'complete' ? 'pending' : 'complete');
              statusTodo(
                todo._id,
                status === 'complete' ? 'pending' : 'complete'
              );
              if (status === 'pending') {
                setConfetti(true);
                setTimeout(() => {
                  setConfetti(false);
                }, 2000);
              }
            }}
            aria-label="..."
            style={{ height: '25px', width: '25px', display: 'inline-block' }}
          />
        </div>
        <div className="col-9 align-middle">
          <p style={{ margin: 'auto' }}>
            {status === 'complete' ? <del>{todo.todo}</del> : todo.todo}
          </p>
        </div>
        <div className="col-1">
          <i
            className="fa-solid fa-trash-can fa-lg"
            type="button"
            onClick={() => {
              deleteTodo(todo._id);
              showAlert('Deleted Successfully', 'success');
            }}
          ></i>
        </div>
        <div className="col-1">
          <i
            className="fa-solid fa-pen-to-square mx-2"
            type="button"
            data-bs-toggle="modal"
            data-bs-target={`#${updateTodoBtn}`}
            onClick={() => {
              updateTodo(todo);
            }}
          ></i>
        </div>
      </div>
    </>
  );
}

export default TodoItem;
