import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Display from "./conponents/Display";
import Login from "./conponents/Login";
import Register from "./conponents/Register";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/todo" element={<Display />} />
        </Routes>
      </BrowserRouter>

      <ToastContainer autoClose={1000} />
    </div>
  );
}

export default App;
