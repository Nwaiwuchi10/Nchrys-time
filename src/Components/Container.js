import React from "react";
import VideoPlayer from "react-video-js-player";
import { FaChartLine, FaHandHolding, FaTools, FaUserAlt } from "react-icons/fa";
import "./Container.css";
const Container = () => {
  return (
    <div className="wrapper-grid">
      <div className="cont">
        <div className="col">
          Accounts
          <FaUserAlt className="icons" />
        </div>
        <div className="col">
          Loans
          <FaHandHolding className="icons" />
        </div>
        <div className="col">
          Investments
          <FaChartLine className="icons" />
        </div>
        <div className="col">
          Deals
          <FaTools className="icons" />
        </div>
      </div>
      <VideoPlayer
        src="./videos/djnchrys.mp4"
        className="video-vid"
        playbackRates={[0.5, 1, 3.85, 16]}
      />
    </div>
  );
};

export default Container;
