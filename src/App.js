import React from "react";
import BubbleComponent from "./components/BubbleComponent";
import WebInterface from "./components/WebInterface";

const App = () => {
  return (
    <div className="app">
      <WebInterface />
      <BubbleComponent />
    </div>
  );
};

export default App;
