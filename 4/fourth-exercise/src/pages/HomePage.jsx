//4de
import { useState } from "react";
import "./HomePage.css";

export function HomePage() {
    const [state, setState] = useState(false);
  return (
    <div className="container">
      <h3>Hello, welcome to my website</h3>
      <input placeholder="Email" className="email" />
      <div className="hide">
        <input placeholder="Password" type={state?"password":"text"} className="password" />
        <button onClick={()=>setState(!state)}>{state?'Show':'Hide'}</button>
      </div>
      <div className="buttons">
        <button class="login">Login</button>
        <button class="signup">Sign up</button>
      </div>
    </div>
  );
}
