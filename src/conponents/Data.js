import axios from "axios";
import { useEffect, useState } from "react";
import TodoList from "./TodoList";

const Data = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const getTodos = async () => {
      const response = await axios.get("http://localhost:5000/todo");
      let data = await response.json();
      setTodos(data);
    };
    getTodos();
  }, []);
  // async function getTodos() {
  //   try {

  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
  // async function getTodos() {
  //   const response = await fetch("http://localhost:5000/todo");
  //   const result = await response.json();
  //   setTodos(result);
  // }

  return (
    <div>
      {todos.map((todo) => (
        <TodoList todo={todo} key={todo._id} />
      ))}
    </div>
  );
};
//
// const DisplaySingleProduct = ({ product }) => {
//   const { title, description } = product;
//   return (
//     <div>
//       <h3>{title}</h3>
//       <p>{description}</p>
//     </div>
//   );
// };
export default Data;
