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

  useEffect(() => {
    if (config.switches && config.switches.length > 0) {
      setSwitches(config.switches.map((s) => s));
    }
  }, [config.switches]);

  useEffect(() => {
    if (!audioSwitchDown) return;
    if (!solved) {
      audioSwitchDown.play();
      audioFail.play();
      setControls(false);
      setSwitches((prevSwitches) =>
        prevSwitches.map((s) => ({
          ...s,
          pressed: false,
        })),
      );
      setTimeout(() => {
        setControls(true);
      }, 1500);
    } else {
      audioSuccess.play();
      setControls(false);
    }
  }, [solvedTrigger]);

  const click = () => {
    if (controls) solvePuzzle(switches);
  };

  const setSwitch = (index, value) => {
    if (controls) {
      if (value) audioSwitchUp.play();
      else audioSwitchDown.play();
      const newSwitches = [...switches];
      newSwitches[index].pressed = value;
      setSwitches(newSwitches);
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
    <div
      id="MainScreen"
      className={"screen_wrapper" + (show ? "" : " screen_hidden")}
      style={{ backgroundImage: `url(${config.theme.backgroundImg})` }}
    >
      <div
        className={(solved ? "solved" : "") + " frame"}
        style={{ width: size.width * 0.85, height: size.height * 0.8 }}
      >
        <div className="switches" style={{ gap: size.width * 0.01 }}>
          {switches.map((s, index) => (
            <Switch key={index} id={index} switchData={s} theme={config.theme} setSwitch={setSwitch} size={size} />
          ))}
        </div>
        <div className="button">
          <RoundButton theme={config.theme} onClick={click} />
        </div>
      </div>
      <audio id="audio_switch1" src="sounds/switch1.wav" autostart="false" preload="auto" />
      <audio id="audio_switch2" src="sounds/switch2.wav" autostart="false" preload="auto" />
      <audio id="audio_connection" src="sounds/connection.wav" autostart="false" preload="auto" />
      <audio id="audio_fail-connection" src="sounds/fail-connection.wav" autostart="false" preload="auto" />
    </div>
  );
}
