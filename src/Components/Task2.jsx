import { useState } from "react";
import "./Task2.css";
function Task2() {
const [name, setName] = useState("");
return (
<div className="student-form">
    
<h1>Student Form</h1>
<input
type="text"
value={name}
onChange={(e) => setName(e.target.value)}
placeholder="Enter your name"
/>
<h2>Your Name: {name}</h2>
</div>
);
}
export default Task2;