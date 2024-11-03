import { useState } from "react";
import "./CustomForm.css";

function CustomForm() {
  const [text, setText] = useState<string>("");

  const handleCheak = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
