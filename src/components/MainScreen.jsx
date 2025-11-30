import { useEffect, useRef, useState } from "react";
import "./../assets/scss/MainScreen.scss";
import RoundButton from "./RoundButton";
import Switch from "./Switch";
import { THEMES } from "../constants/constants";

export default function MainScreen({ config, solvePuzzle, solved, solvedTrigger, loadedSolution, setSolved }) {
  const [switches, setSwitches] = useState([]);
  const [row1, setRow1] = useState([]);
  const [row2, setRow2] = useState([]);
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [controls, setControls] = useState(true);
  const [marginTop, setMarginTop] = useState("0vh");

  const audioSwitchUp = useRef(null);
  const audioSwitchDown = useRef(null);
  const audioFail = useRef(null);
  const audioSuccess = useRef(null);
  const audioButton = useRef(null);

  useEffect(() => {
    if (config.switches && config.switches.length > 0) {
      setSwitches(config.switches.map((s) => s));
      if (config.switches.length > 6) {
        setRow1(config.switches.slice(0, Math.ceil(config.switches.length / 2)));
        setRow2(config.switches.slice(Math.ceil(config.switches.length / 2), config.switches.length));
      }
    }
    // switch (config.skin) {
    //   case THEMES.STANDARD:
    //     setMarginTop("0vh");
    //     break;
    //   case THEMES.RETRO:
    //     setMarginTop("0vh");
    //     break;
    //   case THEMES.FUTURISTIC:
    //     setMarginTop("0vh");
    //     break;
    // }
  }, [config.switches]);

  useEffect(() => {
    if (switches.length > 0 && !solved && loadedSolution) {
      const _result = loadedSolution.split(";").map((x) => parseInt(x, 10) - 1);

      const updateRow = (prev, offset = 0) =>
        prev.map((s, i) => ({
          ...s,
          pressed: _result.includes(i + offset),
        }));

      setSwitches((prev) => updateRow(prev));
      setRow1((prev) => updateRow(prev));
      setRow2((prev) => updateRow(prev, row1.length));

      setControls(false);
      setSolved(true);
    }
  }, [loadedSolution, switches]);

  useEffect(() => {
    if (solvedTrigger < 1) return;
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
      setRow1((prevSwitches) =>
        prevSwitches.map((s) => ({
          ...s,
          pressed: false,
        })),
      );
      setRow2((prevSwitches) =>
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
      solvePuzzle(switches);
    }
  };

  const setSwitch = (index, value) => {
    if (controls) {
      if (value) {
        audioSwitchUp.current?.play();
      } else {
        audioSwitchDown.current?.play();
      }

      setSwitches((prev) => prev.map((s, i) => (i === index ? { ...s, pressed: value } : s)));
      if (switches.length > 6) {
        const mid = Math.ceil(switches.length / 2);

        if (index >= mid) {
          setRow2((prev) => prev.map((s, i) => (i + mid === index ? { ...s, pressed: value } : s)));
        } else {
          setRow1((prev) => prev.map((s, i) => (i === index ? { ...s, pressed: value } : s)));
        }
      }
    }
  };

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      let contentPercentage = 0.95;
      // switch (config.skin) {
      // case THEMES.STANDARD:
      // case THEMES.RETRO:
      //   contentPercentage = 0.95;
      //   break;
      // case THEMES.FUTURISTIC:
      //   contentPercentage = 0.95;
      //   break;
      // }

      const aspectRatio = 16 / 9;
      let width = windowWidth * contentPercentage;
      let height = width / aspectRatio;

      if (height > windowHeight * contentPercentage) {
        height = windowHeight * contentPercentage;
        width = height * aspectRatio;
      }

      setSize({ width, height });
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  let hasBackground = ((typeof config.backgroundImg === "string")&&(config.backgroundImg !== "NONE")&&(config.backgroundImg.trim()!==""));
  return (
    <div id="MainScreen" 
      className={"screen_wrapper"} 
      {...(hasBackground && {
        style: { backgroundImage: `url(${config.backgroundImg})` }
      })}
    >
      <div
        className={(solved ? "solved" : "") + " frame"}
        style={{
          width: size.width,
          height: size.height,
          marginTop: marginTop,
          backgroundImage: `url(${config.containerImg})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div className="switches">
          {row1.length > 0 && row2.length > 0 ? (
            <>
              <div className="row 1" style={{ gap: size.height * 0.013 + "px" }}>
                {row1.map((s, index) => (
                  <Switch key={index} id={index} switchData={s} theme={config} setSwitch={setSwitch} size={size} />
                ))}
              </div>
              <div className="row 2" style={{ gap: size.height * 0.013 + "px" }}>
                {row2.map((s, index) => (
                  <Switch
                    key={index + row1.length}
                    id={index + row1.length}
                    switchData={s}
                    theme={config}
                    setSwitch={setSwitch}
                    size={size}
                  />
                ))}
              </div>
            </>
          ) : (
            <div className="row" style={{ gap: size.height * 0.013 + "px" }}>
              {switches.map((s, index) => (
                <Switch key={index} id={index} switchData={s} theme={config} setSwitch={setSwitch} size={size} />
              ))}
            </div>
          )}
   
        </div>
        <div className="button">
          <RoundButton
            theme={config}
            onClick={click}
            solved={solved}
            solvedTrigger={solvedTrigger}
            controls={controls}
          />
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
