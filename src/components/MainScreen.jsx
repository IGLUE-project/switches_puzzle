import { useEffect, useRef, useState } from "react";
import "./../assets/scss/MainScreen.scss";
import RoundButton from "./RoundButton";
import Switch from "./Switch";

export default function MainScreen({ config, solvePuzzle, solved, solvedTrigger, loadedSolution, setSolved }) {
  const [switches, setSwitches] = useState([]);
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [controls, setControls] = useState(true);

  const audioSwitchUp = useRef(null);
  const audioSwitchDown = useRef(null);
  const audioFail = useRef(null);
  const audioSuccess = useRef(null);
  const audioButton = useRef(null);

  useEffect(() => {
    if (config.switches && config.switches.length > 0) {
      setSwitches(config.switches.map((s) => s));
    }
  }, [config.switches]);

  useEffect(() => {
    if (switches.length > 0 && !solved && loadedSolution) {
      const _result = loadedSolution.split(",");

      setSwitches((prev) =>
        prev.map((s, i) => {
          const state = _result[i];
          if (state === "on") return { ...s, pressed: true };
          if (state === "off") return { ...s, pressed: false };
          return s;
        }),
      );

      setControls(false);
      setSolved(true);
    }
  }, [loadedSolution, switches]);

  useEffect(() => {
    if (loadedSolution) return;
    if (!solved) {
      audioSwitchDown.current?.play();
      audioFail.current?.play();
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
      audioSuccess.current?.play();
      setControls(false);
    }
  }, [solvedTrigger]);

  const click = () => {
    if (controls) {
      audioButton.current?.play();
      setTimeout(() => {
        solvePuzzle(switches);
      }, 500);
    }
  };

  const setSwitch = (index, value) => {
    if (controls) {
      if (value) {
        audioSwitchUp.current?.play();
      } else audioSwitchDown.current?.play();
      setSwitches((prev) => prev.map((s, i) => (i === index ? { ...s, pressed: value } : s)));
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
      <div
        className={(solved ? "solved" : "") + " frame"}
        style={{ width: size.width * 0.85, height: size.height * 0.8 }}
      >
        <div className="switches" style={{ gap: size.width * 0.01 }}>
          {switches.map((s, index) => (
            <Switch key={index} id={index} switchData={s} theme={config} setSwitch={setSwitch} size={size} />
          ))}
        </div>
        <div className="button">
          <RoundButton theme={config} onClick={click} />
        </div>
      </div>
      <audio ref={audioSwitchUp} id="audio_switch1" src={config.switchUpAudio} preload="auto" />
      <audio ref={audioSwitchDown} id="audio_switch2" src={config.switchDownAudio} preload="auto" />
      <audio ref={audioSuccess} id="audio_connection" src={config.connectionAudio} preload="auto" />
      <audio ref={audioFail} id="audio_fail-connection" src={config.failAudio} preload="auto" />
      <audio ref={audioButton} id="audio_button" src={config.buttonAudio} preload="auto" />
    </div>
  );
}
