import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { FeedbackForm } from "./components/FeedbackForm";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div className="App">
      <FeedbackForm></FeedbackForm>
    </div>
  );
}

export default App;
