import React from "react";
import "./App.css";
import ButtonAppBar from "./components/navbar.js";
import Footer from "./components/footer.js";
import TestSlider from "./components/testslider.js";

function App() {
  return (
    <div className="App">
      <ButtonAppBar className="nav" />
      <div className="area">
        <div className="padd">
          <span className="title">Concept Videos</span>
          <br />
          <span className="smallText">Select a number</span>
        </div>
        <div className="center">
          <TestSlider />
        </div>
        <div className="padd">
          <span className="title">Live Classes</span>
          <br />
          <span className="smallText">Select a number</span>
        </div>
        <div className="center">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
