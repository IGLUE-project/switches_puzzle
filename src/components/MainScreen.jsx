import { useEffect, useState } from "react";
import "./../assets/scss/MainScreen.scss";
import Switch from "./Switch";
import FixWiringGame from "./Wires";

export default function MainScreen({ show, config, solvePuzzle, solved, solvedTrigger }) {
  const [switches, setSwitches] = useState([]);

  useEffect(() => {
    if (config.switches && config.switches.length > 0) {
      setSwitches(config.switches.map(() => false));
    }
  }, [config.switches]);
  const click = () => {
    solvePuzzle(switches);
  };

  return (
    <div id="MainScreen" className={"screen_wrapper" + (show ? "" : " screen_hidden")}>
      <div className="frame">
        <div className="wires">
          {switches.map((_, index) => (
            <Switch key={index} solved={solved} onClick={click} solvedTrigger={solvedTrigger} />
          ))}
        </div>
        <img className="panelopen" src="/src/assets/images/panel_electrico_abierto.png" alt="panel electrico abierto" />
      </div>
    </div>
  );
}
