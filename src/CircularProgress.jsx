import './App.css'
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";

export default function CircularProgress({ value, maxValue, text, footerText }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <div style={{ display: "flex", width: "100px", height: "100px" }}>
        <div style={{ width: "100%" }}>
          <CircularProgressbar
            value={value}
            maxValue={maxValue}
            styles={
              buildStyles({
                strokeLinecap: "round",
                trailColor: "#e6e6e6",
                pathColor: "#007f5f",
                pathTransitionDuration: 0.25,
              })
            }
          />
        </div>
        <div style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          marginLeft: "-100%"
        }}>
          <p style={{ fontSize: "18px" }}>
            {text}
          </p>
        </div>
      </div>
      <div>
        <p style={{ fontSize: "16px", margin: "0px" }}>
          {footerText}
        </p>
      </div>
    </div>
  );
}
