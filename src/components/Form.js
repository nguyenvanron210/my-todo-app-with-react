import React, { useEffect } from "react";
// add link framework fake id
import { v4 as uuidv4 } from "uuid";
// add link framework Material UI
import TextField from "@mui/material/TextField";
// add link framework Toast
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {
  // Ngăn chặn trùng lặp
  const customId = "custom-id-yes";

  const notify = () => {
    if (!setTodos.id) {
      toast.success("Update todo success", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        toastId: customId,
      });
    } else {
      toast.success("Add todo success", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        toastId: customId,
      });
    }
  };

  // Sử dụng todos.map để duyệt qua từng công việc trong danh sách todos.
  // Kiểm tra điều kiện todo.id === id: Nếu ID của công việc hiện tại trùng với ID được cung cấp, thì tạo ra một đối tượng mới với các thuộc tính title, id, completed được cập nhật theo tham số. Ngược lại, giữ nguyên công việc hiện tại.
  // Gán mảng newTodo chứa các công việc đã được cập nhật hoặc giữ nguyên cho biến todos bằng setTodos.
  // Xóa bỏ thông tin công việc đang được chỉnh sửa bằng setEditTodo("").
  const updateTodo = (title, id, completed) => {
    const newTodo = todos.map((todo) =>
      todo.id === id ? { title, id, completed } : todo
    );
    setTodos(newTodo);
    setEditTodo("");
  };

  // useEffect: Hook trong React để thực hiện các tác dụng phụ sau khi render component.
  // Dependency array: Mảng này xác định các biến mà useEffect phụ thuộc vào. Khi một trong các biến này thay đổi, useEffect sẽ được gọi lại. [setInput, editTodo]
  // Logic bên trong useEffect:
  // Kiểm tra điều kiện editTodo:
  // Nếu editTodo có giá trị (nghĩa là đang chỉnh sửa một công việc), thì gán giá trị title của editTodo cho biến input bằng hàm setInput.
  // Nếu editTodo không có giá trị (không đang chỉnh sửa công việc), thì gán giá trị rỗng cho biến input bằng hàm setInput.
  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.title);
    } else {
      setInput("");
    }
  }, [setInput, editTodo]);

  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (!editTodo) {
      setTodos([...todos, { id: uuidv4(), title: input, complete: false }]);
      setInput("");
    } else {
      updateTodo(input, editTodo.id, editTodo.completed);
    }
  };

  return (
    <form className="form_w395" onSubmit={onFormSubmit}>
      {/* Animation Input || Material UI */}
      <TextField
        id="filled-basic"
        label="Enter a todo ..."
        variant="filled"
        type="text"
        className="task-input"
        value={input}
        required
        onChange={onInputChange}
      />

      <button className="button-add" type="submit" onClick={notify}>
        {/* Nếu update: OK || Bình thường: Add */}
        <h4>{editTodo ? "OK" : "Add"} </h4>
      </button>
      <ToastContainer />
    </form>
  );
};

export default Form;
