import axios from "axios";
import React, { useEffect, useState } from "react";
import { modal } from "react-modal-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TodoList from "./TodoList";
import DeleteModal from "./util/DeleteModal";

export default function Display() {
  const notify = (massage) => toast.success(massage);
  const notifyErr = (massage) => toast.error(massage);
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  useEffect(() => {
    async function getTodos() {
      const response = await fetch("http://localhost:5000/todo");
      const result = await response.json();
      setTodos(result);
    }
    getTodos();
  }, []);

  let handleSubmit = async (e) => {
    e.preventDefault();
    console.log(title, description);
    try {
      axios
        .post("http://localhost:5000/todo", {
          title: title,
          description: description,
        })
        .then(function (response) {
          if (response.status) {
            notify("Todo Added Successfully");
            setTimeout(() => {
              window.location.reload();
            }, 1000);
          }
        });
    } catch (err) {
      notifyErr("Did not add todo");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  };
  const handleDelete = async (id) => {
    console.log(id);
    const handleOpenModal = () => {
      modal.open(<DeleteModal id={id} />);
    };
    handleOpenModal();
  };
  return (
    <div>
      <div className="bg-slate-100 h-screen ">
        <nav className="w-full bg-yellow-400 py-4">
          <h1 className="text-center text-2xl font-bold">TODO LIST</h1>
        </nav>
        <div className="flex mx-auto   flex-col pt-28 items-center justify-center sm:w-10/12 w-11/12">
          <div>
            <form className="bg-white rounded-md py-10 px-12 shadow-lg text-center w-full">
              <h1 className="text-xl mt-2 text-center font-semibold text-gray-600">
                Create a Todo List
              </h1>
              <div className="mt-6 flex flex-col  justify-center">
                <input
                  type="text"
                  required
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="title"
                  className="cursor-pointer bg-gray-100  mb-3 rounded-md pl-2 outline-none py-2 border-2"
                />
                <input
                  required
                  type="text"
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="description"
                  className="cursor-pointer bg-gray-100  mb-3 rounded-md pl-2 outline-none py-2 border-2"
                />
              </div>
              <button
                type="submit"
                onClick={handleSubmit}
                class="flex items-center mx-auto px-5 py-2.5 font-medium tracking-wide text-white capitalize   bg-yellow-500 rounded-md hover:bg-yellow-600  focus:outline-none focus:bg-gray-900  transition duration-300 transform active:scale-95 ease-in-out">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  fill="#FFFFFF">
                  <path d="M0 0h24v24H0V0z" fill="none"></path>
                  <path
                    d="M5 5v14h14V7.83L16.17 5H5zm7 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-8H6V6h9v4z"
                    opacity=".3"></path>
                  <path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm2 16H5V5h11.17L19 7.83V19zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zM6 6h9v4H6z"></path>
                </svg>
                <span class="pl-2 mx-1">Save</span>
              </button>
            </form>
            {todos.map((todo) => (
              <TodoList
                todo={todo}
                handleDelete={handleDelete}
                key={todo._id}
              />
            ))}
          </div>
          <p className="absolute bottom-14 right-14 bg-yellow-400 py-2 px-4 rounded-full text-lg font-bold">
            ?
          </p>
        </div>
      </div>
    </div>
  );
}
