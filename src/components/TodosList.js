import React from "react";
// import swal from "sweetalert";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TodosList = ({ todos, setTodos, setEditTodo }) => {
  const notify_delete = () => {
    toast.success("Detele todo success", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };
  // handleComplete: kiểm tra trạng thái đã được của todos
  const handleComplete = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  const handleEdit = ({ id }) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo);
  };

  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <div>
      {todos.map((todo, index) => (
        <li className="list-item" key={todo.id}>
          <input
            type="text"
            value={todo.title}
            disabled
            className={`list ${todo.completed ? "complete" : ""}`}
            onChange={(event) => event.preventDefault()}
          />
          <div>
            <button
              className="button-complete task-button"
              onClick={() => handleComplete(todo)}
            >
              <i className="fa fa-check-circle"></i>
            </button>
            <button
              className="button-edit task-button"
              onClick={() => handleEdit(todo)}
            >
              <i className="fa fa-edit"></i>
            </button>
            <button
              className="button-delete task-button"
              onClick={() => handleDelete(todo)}
            >
              <i className="fa fa-trash" onClick={notify_delete}></i>
            </button>
            <ToastContainer />
          </div>
        </li>
      ))}
    </div>
  );
};

export default TodosList;
