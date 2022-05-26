import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Display from "./conponents/Display";
function App() {
  return (
    <div>
      <Display />
      {/* customization toast container*/}
      <ToastContainer autoClose={1000} />
    </div>
  );
}

export default App;
