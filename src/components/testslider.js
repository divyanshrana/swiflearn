import React, { useEffect, useState } from "react";
import "./slider.css";
import youtube from "./youtube.webp";
export default function TestSlider() {
  const [current, setCurrent] = useState("4");

  useEffect(() => {
    document.getElementById(current).focus();
  }, [current]);

  function left() {
    if (parseInt(current) > 1) {
      let str = (parseInt(current) - 1).toString();
      setCurrent(str);
    } else {
      document.getElementById(current).focus();
    }
  }
  function right() {
    if (parseInt(current) < 5) {
      setCurrent((parseInt(current) + 1).toString());
    } else {
      document.getElementById(current).focus();
    }
  }
  function set(e) {
    if (e.target.type === "submit") {
      return;
    }
    let refId = e.target.closest("div").id.toString();
    setCurrent(refId);
  }
  return (
    <div
      onClick={(e) => {
        set(e);
      }}
      className="cards"
    >
      <button
        className="navigate nav-left"
        onClick={() => {
          left();
        }}
      >
        {"<"}
      </button>
      <div tabIndex="1" className="card" id="1">
        <img className="yt-img" src={youtube} alt="yt-logo" />
        <p>This is some content</p>
      </div>
      <div tabIndex="2" className="card" id="2">
        <img className="yt-img" src={youtube} alt="yt-logo" />
        <p>This is some content</p>
      </div>
      <div tabIndex="3" className="card" id="3">
        <img className="yt-img" src={youtube} alt="yt-logo" />
        <p>
          See what<span style={{ color: "orange" }}> Leena Barua </span>
          thinks
          <br />
          about our plans
        </p>
      </div>
      <div tabIndex="4" className="card" id="4">
        <img className="yt-img" src={youtube} alt="yt-logo" />
        <p>This is some content</p>
      </div>
      <div tabIndex="5" className="card" id="5">
        <img className="yt-img" src={youtube} alt="yt-logo" />
        <p>This is some content</p>
      </div>
      <button
        className="navigate nav-right"
        onClick={() => {
          right();
        }}
      >
        {">"}
      </button>
    </div>
  );
}
