// Import the React and ReactDom libraries
import React from "react";
import ReactDOM from "react-dom";

//Create a React Component
const App = () => {
  const buttonText = { text: "click me !" };
  const labelText = "Enter name:";

  return (
    <div>
      <label className="label" htmlFor="name">
        {labelText}
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {buttonText.text}
      </button>
    </div>
  );
};

// Take the React component and show up on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
