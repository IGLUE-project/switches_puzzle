import React, { useEffect, useState } from "react";
import "../assets/scss/Switch.scss";
import { iconMap } from "../icons/shapesIcons";

let audioSwitchUp, audioSwitchDown;

const Switch = ({ onClick, solved, solvedTrigger, switchData }) => {
  const [activo, setActivo] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    audioSwitchUp = document.getElementById("audio_switch1");
    audioSwitchDown = document.getElementById("audio_switch2");
  }, []);
  const togglePalanca = () => {
    if (!activo) audioSwitchUp.play();
    else audioSwitchDown.play();

    setActivo(!activo);
  };

  const getDataLabel = () => {
    if (switchData.image) return <img src={switchData.image} alt="Switch" />;

    if (switchData.ico) {
      const IconComponent = iconMap[switchData.ico.toLowerCase()];
      if (IconComponent) {
        return <IconComponent color={switchData.colorIco} height={32} width={32} />;
      }
    }
    if (switchData.label) return <div>{switchData.label}</div>;

    return null;
  };

  return (
    <div className="Switch" style={{ backgroundColor: switchData.color + "99" }}>
      <div className="led-box">
        <div className={solved ? "led-green" : activo ? (error ? "led-red" : "led-load") : "led-off"}></div>
      </div>
      <div className="switchContainer" onClick={togglePalanca}>
        <div className={`lever ${activo ? "active" : ""}`}></div>
        <div className="handle"></div>
      </div>
      <div className="data">{getDataLabel()}</div>

      <audio id="audio_connection" src="sounds/connection.wav" autostart="false" preload="auto" />
      <audio id="audio_fail-connection" src="sounds/fail-connection.wav" autostart="false" preload="auto" />
      <audio id="audio_switch1" src="sounds/switch1.wav" autostart="false" preload="auto" />
      <audio id="audio_switch2" src="sounds/switch2.wav" autostart="false" preload="auto" />
    </div>
  );
};

export default Switch;
