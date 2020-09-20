import React from "react";
import liveIcon from "./live.ico";

export default function ButtonAppBar() {
  return (
    <div className="nav">
      <span
        style={{
          width: "140px",
          display: "flex",
          flexWrap: "wrap",
          marginTop: "-40px",
        }}
        className="nav-item"
      >
        <span
          style={{ fontSize: "12px", marginBottom: "5px" }}
          className="smallText"
        >
          Upcoming
          <span style={{ color: "orange" }}>{" ( "}</span>
          <img
            style={{ width: "10px", height: "10px" }}
            src={liveIcon}
            alt="live-icon"
          />
          <span style={{ color: "orange" }}>{" )"}</span>
        </span>
        Live Consultation
      </span>
      <span className="nav-item">Buy Plans</span>
      <span className="nav-item">View Plans</span>
      <button className="login nav-item">Login</button>
    </div>
  );
}
