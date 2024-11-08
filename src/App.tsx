import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AnalysisResult, CustomForm, Loader } from "./components";
import { useState } from "react";
import { AnalysisData } from "./interfaces";

function App() {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [analysisResult, setAnalysisResult] = useState<null | AnalysisData>(
    null
  );
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
        <CustomForm
          setLoading={setLoading}
          setAnalysisResult={setAnalysisResult}
        />
        {isLoading ? <Loader /> : null}
        <AnalysisResult result={analysisResult} />
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
