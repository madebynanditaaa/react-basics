//4abc
import "./4a.css";
import { useState } from "react";

export function ButtonOn() {
  const [isButtonOn, setIsButtonOn] = useState(false);

  return (
    <button
      className={isButtonOn ? "on" : "off"}
      onClick={() => setIsButtonOn(!isButtonOn)}
    >
      {isButtonOn ? "ON" : "OFF"}
    </button>
  );
}
