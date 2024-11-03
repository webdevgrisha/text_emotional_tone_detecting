import { useState } from "react";
import "./CustomForm.css";
import { analyzeTone } from "../../services/firebase/functions";
import { AnalysisData } from "../../interfaces";

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

  return (
    <form className="custom-form" onSubmit={handleCheak}>
      <textarea
        placeholder="Enter text for Tone Detection"
        value={text}
        onChange={handleTextAreaChange}
      ></textarea>
      <button>Cheak</button>
    </form>
  );
}

export default CustomForm;
