import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addtodo,
  removetodo,
  updatetodo,
  complitedtodo,
} from "../features/todo/todoslice";

export default function Frontpage() {
  const todos = useSelector((state) => state.todos);
  const [update, setUpdate] = useState();
  const [check, setCheck] = useState({ con: false, id: "" });
  console.log(todos);

  const [updatedValue, setUpdatedValue] = useState();
  const [input, setInput] = useState();
  const dispatch = useDispatch();
  function addTodoHandler() {
    dispatch(addtodo(input));
    setInput("");
  }

  return (
    <div className="container">
      <div className="row justify-content-center px-3 px-md-0">
        <h1 className="text-uppercase text-center ">to do app </h1>
        <div className="row d-sm-flex-flex justify-content-center gap-2 mt-5 ">
          <input
            className="col-8 col-md-3 rounded"
            value={input}
            type="text"
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className="col-8 col-md-1 rounded text-uppercase btn btn-outline-success"
            onClick={addTodoHandler}
          >
            add
          </button>
        </div>
        <p className=" fs-3 text-uppercase text-center mt-3 fw-bolder">list</p>
        {todos.map((todo) => (
          <div
            className="row rounded px-4 py-2 justify-content-between shadow align-items-center mt-2 "
            style={{ background: "#2A3439", display:`${todo.id === null ? "none" : ""}`}}
            key={todo.id}
          >
            <input
              className="col-1"
              type="radio"
              onChange={() => {
                dispatch(complitedtodo({ id: todo.id, text: todo.text }));
              }}
            />

            <h5 className="col-3 text-white">{todo.text} </h5>

            <div className="col-8 row d-flex  justify-content-end gap-4">
              <div className="col-6  row d-flex gap-1 justify-content-end ">
                <button
                  style={{ fontSize: "12px" }}
                  className="btn btn-outline-danger col-12 col-md-5 shadow "
                  onClick={() => setUpdate(todo.id)}
                >
                  update
                </button>
                <button
                  className="btn btn-outline-danger col-12 col-md-3 shadow "
                  onClick={() => dispatch(removetodo(todo.id))}
                >
                  X
                </button>
              </div>
              {update === todo.id ? (
                <div className="col-6 row gap-2 justify-content-end">
                  <input
                    className="col-12 col-md-5  "
                    type="text"
                    value={updatedValue}
                    onChange={(e) => setUpdatedValue(e.target.value)}
                  />
                  <button
                    style={{ fontSize: "12px" }}
                    className="col-12 col-md-3 text-center btn btn-primary "
                    onClick={() => {
                      dispatch(updatetodo({ id: todo.id, text: updatedValue }));
                      setUpdate(false);
                      setUpdatedValue("");
                    }}
                  >
                    save
                  </button>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
