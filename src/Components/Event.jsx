import { useState } from "react";
import "./Event.css";
function Event() {
  const [message, setMessage] = useState("Hello");

  function changeMessage() {
    setMessage(message === "Hello" ? "Welcome to React" : "Hello");
  }

  return (
    <div className="event-container">
      <h1>{message}</h1>

      <button onClick={changeMessage}>
        Change Message
      </button>
    </div>
  );
}

export default Event;