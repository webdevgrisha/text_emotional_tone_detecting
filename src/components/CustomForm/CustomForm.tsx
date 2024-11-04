import { useState } from "react";
import "./CustomForm.css";
import { analyzeTone } from "../../services/firebase/functions";
import { AnalysisData } from "../../interfaces";
import emotionsConfing from "./initTexts";
import { toast } from "react-toastify";
import { HttpsCallableResult } from "firebase/functions";

interface CustomFormProps {
  setLoading: (value: boolean) => void;
  setAnalysisResult: (result: AnalysisData | null) => void;
}

function CustomForm({ setLoading, setAnalysisResult }: CustomFormProps) {
  const [text, setText] = useState<string>("");
  const handleCheak = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (text.trim() === "") {
      toast.error(`We can't analyse an empty string.`);
      return;
    }

    setLoading(true);
    setAnalysisResult(null);

    try {
      const result = (await analyzeTone({
        text: text,
      })) as HttpsCallableResult<AnalysisData>;

      setLoading(false);

      if ("error" in result.data) {
        toast.error((result.data as { error: string }).error);
        return;
      }

      setAnalysisResult(result.data);
      console.log("result: ", result);
    } catch (error) {
      console.error("Error calling analyzeTone:", error);
      toast.error("It was not possible to analyse the text.");
    } finally {
      setLoading(false);
    }
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
