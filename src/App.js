import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import TodosList from "./components/TodosList";
import "./App.css";

const App = () => {
  // localStorage.getItem("todos"): Lấy dữ liệu từ localStorage với key là "todos". Nếu không có dữ liệu, sẽ trả về null.
  // JSON.parse(): Chuyển dữ liệu dạng chuỗi (string) thành dạng đối tượng JavaScript (object).
  // || []: Nếu dữ liệu lấy từ localStorage là null hoặc không tồn tại, thì gán giá trị mặc định là một mảng rỗng ([]) cho biến initialState.
  const initialState = JSON.parse(localStorage.getItem("todos")) || [];

  // input: Biến lưu trữ giá trị nhập vào của người dùng.
  const [input, setInput] = useState("");
  // todos: Biến lưu trữ danh sách các công việc (todo).
  const [todos, setTodos] = useState(initialState);
  // editTodo: Biến lưu trữ thông tin công việc đang được chỉnh sửa (nếu có).
  const [editTodo, setEditTodo] = useState(null);

  // Sử dụng useEffect để đồng bộ dữ liệu với localStorage:
  //   - useEffect: Hook trong React để thực hiện các tác dụng phụ sau khi render component.
  //   - localStorage.setItem("todos", JSON.stringify(todos)): Lưu trữ danh sách công việc (todos) vào localStorage với key là "todos" sau khi đã chuyển thành chuỗi (string) bằng JSON.stringify().
  //   - [todos]: Mảng phụ thuộc của useEffect, nghĩa là chỉ thực hiện hàm callback khi giá trị của biến todos thay đổi.
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="container">
      <div className="app-wrapper">
        {/* Add file Header from components/Header.js */}
        <div>
          <Header />
        </div>

        {/* Add file Form from components/Form.js */}
        <div>
          {/* component Form */}
          <Form
            // input: Một giá trị chuỗi (string) đại diện cho nội dung nhập vào của người dùng.
            // setInput: Một hàm để cập nhật giá trị của input.
            // todos: Một mảng chứa các công việc (todo).
            // setTodos: Một hàm để cập nhật mảng todos.
            // editTodo: Một đối tượng đại diện cho công việc đang được chỉnh sửa (nếu có).
            // setEditTodo: Một hàm để cập nhật giá trị của editTodo.
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
            editTodo={editTodo}
            setEditTodo={setEditTodo}
          />
        </div>

        {/* Add file TodosList from components/TodosList.js */}
        <div className="div_form_scroll">
          <TodosList
            // todos: Một mảng chứa các công việc (todo).
            // setTodos: Một hàm để cập nhật mảng todos.
            // setEditTodo: Một hàm để cập nhật giá trị của editTodo.
            todos={todos}
            setTodos={setTodos}
            setEditTodo={setEditTodo}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
