import { useState } from "react";
import { ChatInput } from "./components/ChatInput";
import ChatMessages from "./components/ChatMessages";
import "./App.css";

function App() {
  const [chatMessages, setChatMessages] = useState([
    // [chatMessages, setChatMessages] is shortcut from below block 1st statement.
    { message: "Hello bot", sender: "user", id: "id1" },
    { message: "Hello user", sender: "bot", id: "id2" },
    { message: "Tell me todays date", sender: "user", id: "id3" },
    { message: "Today is 10th January", sender: "bot", id: "id4" },
  ]);
  return (
    <div className="app-container">
      <ChatMessages chatMessages={chatMessages} />
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  );
}

export default App;
