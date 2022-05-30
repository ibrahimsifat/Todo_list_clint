import cookies from "js-cookies";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Display from "./conponents/Display";
import Login from "./conponents/Login";
import Register from "./conponents/Register";
const secure = window.location.protocol === "http";
function App() {
  console.log(cookies.getItem());

  return (
    <div>
      {cookies.user && <p>{cookies.ibtodo}</p>}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Display />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>

      <ToastContainer autoClose={1000} />
    </div>
  );
}

export default App;
