import React from "react";
import { modal } from "react-modal-dom";
import CloseIcon from "./CloseIcon";
const handleOpenModal = (title, description, id) => {
  modal.open(<MyModal title={title} description={description} />);
};
export default function EditModal({ id, title, description }) {
  return (
    <div>
      <button
        type="button"
        onClick={() => handleOpenModal(id, title, description)}
        className="flex items-center px-4 py-1 font-medium tracking-wide
        text-black capitalize rounded-md bg-yellow-100 hover:bg-yellow-300
        hover:fill-current focus:outline-none transition duration-300 transform
        active:scale-95 ease-in-out mx-2">
        <svg
          viewBox="0 0 20 20"
          enableBackground="new 0 0 20 20"
          className="w-4 h-4 inline-block mr-1">
          <path
            fill="#000000"
            d="M17.561,2.439c-1.442-1.443-2.525-1.227-2.525-1.227L8.984,7.264L2.21,14.037L1.2,18.799l4.763-1.01
                                      l6.774-6.771l6.052-6.052C18.788,4.966,19.005,3.883,17.561,2.439z M5.68,17.217l-1.624,0.35c-0.156-0.293-0.345-0.586-0.69-0.932
                                      c-0.346-0.346-0.639-0.533-0.932-0.691l0.35-1.623l0.47-0.469c0,0,0.883,0.018,1.881,1.016c0.997,0.996,1.016,1.881,1.016,1.881
                                      L5.68,17.217z"
          />
        </svg>
        <span> Edit</span>
      </button>
    </div>
  );
}
const MyModal = ({ title, description, id }) => {
  return (
    <div className="modal sm:w-8/12 w-11/12 bg-white duration-700 delay-300	  relative">
      <button
        className="absolute top- right-0"
        type="button"
        onClick={modal.close}>
        <CloseIcon />
      </button>
      <div className="flex mx-auto my-10  flex-col items-center justify-center ">
        <form className="text-center w-10/12">
          <h1 className="text-xl mt-2 text-center font-semibold text-gray-600">
            Edit your Todo
          </h1>
          <div className="mt-6 flex flex-col  justify-center">
            <input
              value={title}
              type="text"
              // onChange={(e) => setTitle(e.target.value)}
              placeholder="title"
              className="cursor-pointer bg-gray-100  mb-3 rounded-md pl-2 outline-none py-2 border-2"
            />
            <input
              value={description}
              type="text"
              // onChange={(e) => setDescription(e.target.value)}
              placeholder="description"
              className="cursor-pointer bg-gray-100  mb-3 rounded-md pl-2 outline-none py-2 border-2"
            />
          </div>
          <button
            type="submit"
            // onClick={handleSubmit}
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
            <span class="pl-2 mx-1">Update</span>
          </button>
        </form>
      </div>
    </div>
  );
};
