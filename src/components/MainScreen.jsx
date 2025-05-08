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

  useEffect(() => {
    if (config.switches && config.switches.length > 0) {
      setSwitches(config.switches.map((s) => s));
    }
  }, [config.switches]);
  const click = () => {
    solvePuzzle(switches);
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
      <div className="frame" style={{ width: size.width * 0.85, height: size.height * 0.8 }}>
        <div className="switches">
          {switches.map((s, index) => (
            <Switch
              key={index}
              solved={solved}
              onClick={click}
              solvedTrigger={solvedTrigger}
              switchData={s}
              theme={config.theme}
            />
          ))}
        </div>
        <div className="button">
          <RoundButton theme={config.theme} />
        </div>
      </div>
    </div>
  );
}
