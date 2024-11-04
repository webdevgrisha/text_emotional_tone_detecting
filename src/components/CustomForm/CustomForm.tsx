import { useState } from "react";
import "./CustomForm.css";
import { analyzeTone } from "../../services/firebase/functions";
import { AnalysisData } from "../../interfaces";
import emotionsConfing from "./initTexts";

interface CustomFormProps {
  setLoading: (value: boolean) => void;
  setAnalysisResult: (result: AnalysisData | null) => void;
}

function CustomForm({ setLoading, setAnalysisResult }: CustomFormProps) {
  const [text, setText] = useState<string>("");
  const handleCheak = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setAnalysisResult(null);

    const result = await analyzeTone({ text: text });

    setLoading(false);
    setAnalysisResult(result.data as unknown as AnalysisData);
    console.log("result: ", result);
  };

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setText(value);
  };

  const handleInitTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const text = emotionsConfing[value].text;

    setText(text || "");
  };

  return (
    <form className="custom-form" onSubmit={handleCheak}>
      <textarea
        placeholder="Enter text for Tone Detection"
        value={text}
        onChange={handleTextAreaChange}
      ></textarea>
      <div className="default-options">
        {Object.entries(emotionsConfing).map(([emotionName, { color }]) => {
          return (
            <div className="option" key={emotionName}>
              <input
                type="radio"
                name="init-text"
                value={emotionName}
                onChange={handleInitTextChange}
              />
              <label style={{ color: color }}>{emotionName}</label>
            </div>
          );
        })}
      </div>
      <button>Cheak</button>
    </form>
  );
}

export default CustomForm;
