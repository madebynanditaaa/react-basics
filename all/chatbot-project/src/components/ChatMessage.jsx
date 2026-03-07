import RobotProfileImage from '../assests/bot.png';
import UserProfileImage from '../assests/user.png';
import './ChatMessage.css';

export function ChatMessage(props) {
  const { message, sender } = props;
  return (
    <div
      className={sender === "user" ? "chat-message-user" : "chat-message-bot"}
    >
      {sender === "bot" && (
        <img src={RobotProfileImage} className="chat-message-profile" />
      )}
      <div className="chat-message-text">{message}</div>
      {sender === "user" && (
        <img src={UserProfileImage} className="chat-message-profile" />
      )}
    </div>
  );
}