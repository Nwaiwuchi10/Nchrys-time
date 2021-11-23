import React from "react";
import "./Clock.css";

const Clock = () => {
  function Clock() {
    const hours = document.getElementById("hour");
    const minutes = document.getElementById("minutes");
    const seconds = document.getElementById("seconds");
    const h = new Date().getHours();
    const m = new Date().getMinutes();
    const s = new Date().getSeconds();

    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
  }
  const interval = setInterval(Clock, 1000);
  return (
    <div className="Clock-body">
      <div id="clock">
        <h2>THE TIME IS</h2>
        <div id="time">
          <div>
            <span id="hour">00</span>
            <span>Hours</span>
          </div>
          <div>
            <span id="minutes">00</span>
            <span>Minutes</span>
          </div>
          <div>
            <span id="seconds">00</span>
            <span>Seconds</span>
          </div>
        </div>
      </div>

      <div className="nchrys">
        <h2>@Nchrys </h2>
        <h2>@Nchrys </h2>
        <div className="h3">08136757488</div>
      </div>
    </div>
  );
};

export default Clock;
