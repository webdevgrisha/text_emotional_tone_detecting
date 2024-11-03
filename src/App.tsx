import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CustomForm } from "./components";

function App() {
  return (
    <>
      <div className="app-container">
        <header>
          <h1>
            Detecting Emotional Tone of Text Using AI API (Visualization of
            survey data)
            <br /> Author: <b>Ryhor Roi</b>
          </h1>
        </header>
        
        <CustomForm />
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
