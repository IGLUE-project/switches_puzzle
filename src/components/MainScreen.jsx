import { useEffect, useState } from "react";
import "./../assets/scss/MainScreen.scss";
import Switch from "./Switch";
import RoundButton from "./RoundButton";

export default function MainScreen({ show, config, solvePuzzle, solved, solvedTrigger }) {
  const [switches, setSwitches] = useState([]);
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [controls, setControls] = useState(true);

  const audioSwitchUp = document.getElementById("audio_switch1");
  const audioSwitchDown = document.getElementById("audio_switch2");
  const audioFail = document.getElementById("audio_fail-connection");
  const audioSuccess = document.getElementById("audio_connection");
  const audioButton = document.getElementById("audio_button");

  useEffect(() => {
    if (config.switches && config.switches.length > 0) {
      setSwitches(config.switches.map((s) => s));
    }
  }, [config.switches]);

  useEffect(() => {
    if (!solved) {
      if (audioSwitchDown) audioSwitchDown.play();
      if (audioFail) audioFail.play();
      setControls(false);
      setSwitches((prevSwitches) =>
        prevSwitches.map((s) => ({
          ...s,
          pressed: false,
        }))
      );
      setTimeout(() => {
        setControls(true);
      }, 1500);
    } else {
      if (audioSuccess) audioSuccess.play();
      setControls(false);
      if (typeof solvedTrigger === "string") {
        const _result = solvedTrigger.split(",");
        _result.map((r, index) => {
          if (r === "on") setSwitch(index, true);
          if (r === "off") setSwitch(index, false);
        });
      }
    }
  }, [solvedTrigger, switches]);

  const click = () => {
    if (controls) {
      audioButton.play();
      setTimeout(() => {
        solvePuzzle(switches);
      }, 500);
    }
  };

  const setSwitch = (index, value) => {
    if (controls) {
      if (value) {
        if (audioSwitchUp) audioSwitchUp.play();
      } else if (audioSwitchDown) audioSwitchDown.play();
      const newSwitches = [...switches];
      if (newSwitches.length > 0) {
        newSwitches[index].pressed = value;
        setSwitches(newSwitches);
      }
    }
  };

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      const aspectRatio = 16 / 9;
      let width = windowWidth * 0.9;
      let height = width / aspectRatio;

      if (height > windowHeight * 0.9) {
        height = windowHeight * 0.9;
        width = height * aspectRatio;
      }

      setSize({ width, height });
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div id="MainScreen" className={"screen_wrapper"} style={{ backgroundImage: `url(${config.backgroundImg})` }}>
      <div className={(solved ? "solved" : "") + " frame"} style={{ width: size.width * 0.85, height: size.height * 0.8 }}>
        <div className="switches" style={{ gap: size.width * 0.01 }}>
          {switches.map((s, index) => (
            <Switch key={index} id={index} switchData={s} theme={config} setSwitch={setSwitch} size={size} />
          ))}
        </div>
        <div className="button">
          <RoundButton theme={config} onClick={click} />
        </div>
      </div>
      <audio id="audio_switch1" src={config.switchUpAudio} autostart="false" preload="auto" />
      <audio id="audio_switch2" src={config.switchDownAudio} autostart="false" preload="auto" />
      <audio id="audio_connection" src={config.connectionAudio} autostart="false" preload="auto" />
      <audio id="audio_fail-connection" src={config.failAudio} autostart="false" preload="auto" />
      <audio id="audio_button" src={config.buttonAudio} autostart="false" preload="auto" />
    </div>
  );
}
