import { useEffect, useState } from "react";
import "./../assets/scss/MainScreen.scss";
import Switch from "./Switch";
import RoundButton from "./RoundButton";

export default function MainScreen({ show, config, solvePuzzle, solved, solvedTrigger }) {
  const [switches, setSwitches] = useState([]);

  useEffect(() => {
    if (config.switches && config.switches.length > 0) {
      setSwitches(config.switches.map((s) => s));
    }
  }, [config.switches]);
  const click = () => {
    solvePuzzle(switches);
  };

  return (
    <div
      id="MainScreen"
      className={"screen_wrapper" + (show ? "" : " screen_hidden")}
      style={{ backgroundImage: `url(/src/assets/images/panel.png)` }}
    >
      <div className="frame">
        <div className="switches">
          {switches.map((s, index) => (
            <Switch key={index} solved={solved} onClick={click} solvedTrigger={solvedTrigger} switchData={s} />
          ))}
        </div>
        <div className="button">
          <RoundButton />
        </div>
      </div>
    </div>
  );
}
