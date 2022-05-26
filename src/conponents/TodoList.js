import EditModal from "./util/EditModal";

const TodoList = ({ todo, handleDelete }) => {
  const { title, _id, description } = todo;
  return (
    <div className="flex mt-6 w-full bg-white p-6 rounded-md text-gray-500 shadow-lg">
      {/* <p className="">{title}</p> */}
      <p className="w-full">{title}</p>

      <EditModal id={_id} title={title} description={description} />

      <button
        onClick={() => handleDelete(_id)}
        type="button"
        class="flex items-center px-2 py-1 font-medium tracking-wide text-black capitalize rounded-md bg-red-100 hover:bg-red-200  hover:fill-current hover:text-red-400  focus:outline-none  transition duration-300 transform active:scale-95 ease-in-out">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px">
          <path d="M0 0h24v24H0V0z" fill="none"></path>
          <path d="M8 9h8v10H8z" opacity=".3"></path>
          <path d="M15.5 4l-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9z"></path>
        </svg>
        <span class="mx-1">Delete</span>
      </button>
    </div>
  );
};
export default TodoList;
