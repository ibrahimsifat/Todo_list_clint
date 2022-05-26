import axios from "axios";
import React from "react";
import { modal } from "react-modal-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const handleDelete = ({ id }) => {
  const notify = (massage) => toast.success(massage);
  const notifyErr = (massage) => toast.error(massage);
  try {
    axios
      .delete(`http://localhost:5000/todo/${id}`)
      .then(function (response) {
        if (response.status) {
          notify("Todo deleted Successfully");
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  } catch (err) {
    notifyErr("Did not delete todo");
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }
};
export default function DeleteModal(id) {
  return (
    <div class="flex items-center justify-center fixed left-0 bottom-0 w-full h-full bg-gray-300 bg-opacity-30">
      <div class="bg-white rounded-lg w-1/2">
        <div class="flex flex-col items-start p-4">
          <div class="flex items-center w-full" onClick={modal.close}>
            <div class="text-gray-900 font-medium text-lg">Delete Todo</div>
            <svg
              class="ml-auto fill-current text-gray-700 w-6 h-6 cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 18 18">
              <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z" />
            </svg>
          </div>
          <hr />
          <div class="">Are you want to delete todo? </div>
          <hr />
          <div class="ml-auto">
            <button
              onClick={() => handleDelete(id)}
              class="bg-red-400 md:mr-4 mr-2 hover:bg-red-500 text-white font-bold py-2 px-4 rounded">
              Delete
            </button>
            <button
              onClick={modal.close}
              class="bg-transparent hover:bg-yellow-500  font-semibold hover:text-white py-2 px-4 border border-yellow-500 hover:border-transparent rounded">
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
