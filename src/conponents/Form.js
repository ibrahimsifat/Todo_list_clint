import React from "react";
const handleProduct = (e) => {
  e.preventDefault();
  alert("hello");
};
const form = () => {
  return (
    <div>
      <form action="http://localhost:5000/todo" method="post">
        <input type="text" name="title" id="" />
        <input type="text" name="title" id="" />
        <input type="text" name="title" id="" />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default form;
