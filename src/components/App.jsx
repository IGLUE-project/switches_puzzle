import React, { useEffect, useState } from "react";
import "./../assets/scss/app.scss";
import "./../assets/scss/modal.scss";

import { GLOBAL_CONFIG } from "../config/config.js";
import * as I18n from "../vendors/I18n.js";
import * as LocalStorage from "../vendors/Storage.js";

import { ICONS, KEYPAD_SCREEN, SWITCHTYPE, THEME_ASSETS, THEMES } from "../constants/constants.jsx";
import MainScreen from "./MainScreen.jsx";

let escapp;
const initialConfig = {
  config: {
    nSwitches: 6,
    switchType: SWITCHTYPE.CUSTOM,
    theme: THEMES.FUTURISTIC,
  },
  customSwitches: [
    {
      color: "#3abf19",
      label: "👽",
      image: "",
      ico: "",
    },
    {
      color: "#c70000",
      label: "switch 2",
      image: "/src/assets/react.svg",
    },
    {
      color: "#0021c7",
      label: "cable 2",
      image: "",
      colorIco: "#fff",
    },
    {
      color: "#c700b5",
      label: "cable 3",
      image: "",
      ico: "circle",
      colorIco: "#fff",
    },
    {
      color: "#c700b5",
      label: "cable 3",
      image: "",
      ico: "star",
      colorIco: "red",
    },
    {
      color: "#c700b5",
      label: "cable 3",
      image: "",
      ico: "square",
      colorIco: "yellow",
    },
  ],
};

export default function App() {
  const [loading, setLoading] = useState(true);
  const [screen, setScreen] = useState(KEYPAD_SCREEN);
  const [prevScreen, setPrevScreen] = useState(KEYPAD_SCREEN);
  const [fail, setFail] = useState(false);
  const [solved, setSolved] = useState(false);
  const [solvedTrigger, setSolvedTrigger] = useState(0);
  const [config, setConfig] = useState();

  useEffect(() => {
    console.log("useEffect, lets load everything");

    I18n.init(GLOBAL_CONFIG);
    LocalStorage.init(GLOBAL_CONFIG.localStorageKey);

    escapp = new ESCAPP(GLOBAL_CONFIG.escapp);
    escapp.validate((success, er_state) => {
      console.log("ESCAPP validation", success, er_state);
      try {
        if (success) {
          //ha ido bien, restauramos el estado recibido
        }
      } catch (e) {
        console.error(e);
      }
    });

    loadConfig(initialConfig);

    setLoading(false);
  }, []);

  const solvePuzzle = (solution) => {
    const solutionStr = solution
      .map((s) => {
        if (s.pressed) return "on";
        else return "off";
      })
      .join(",");
    console.log(solutionStr);
    escapp.submitPuzzle(GLOBAL_CONFIG.escapp.puzzleId, solutionStr, {}, (success) => {
      setSolved(success);
      setSolvedTrigger((prev) => prev + 1);

      if (!success) {
        setFail(true);
        setTimeout(() => {
          setFail(false);
        }, 1500);
      }
    });
  };

  function onOpenScreen(newscreen_name) {
    console.log("Opening screen", newscreen_name);
    setPrevScreen(screen);
    setScreen(newscreen_name);
  }

  function loadConfig({ config, customSwitches }) {
    let configuration = {
      theme: {
        name: config.theme,
        ...(THEME_ASSETS[config.theme] || {}),
      },
      switches: [],
    };

    switch (config.switchType) {
      case SWITCHTYPE.NUMBERS:
        configuration.switches = (_, i) => ({ label: i + 1 });
        break;
      case SWITCHTYPE.COLORS:
        configuration.switches = (_, i) => ({ areaColor: `hsla(${(i * 360) / config.nSwitches}, 100%, 50%, 0.20)` });
        break;
      case SWITCHTYPE.SHAPES:
        configuration.switches = (_, i) => ({ ico: ICONS[i % ICONS.length] || "" });
        break;
      case SWITCHTYPE.COLORED_SHAPES:
        configuration.switches = (_, i) => ({
          ico: ICONS[i % ICONS.length] || "",
          colorIco: `hsla(${(i * 360) / config.nSwitches}, 100%, 50%, 0.20)`,
        });
        break;
      case SWITCHTYPE.CUSTOM:
        configuration.switches = customSwitches;
        break;
      default:
        configuration.switches = (_, i) => ({ label: String.fromCharCode(65 + (i % 26)) });
    }
    if (config.switchType !== SWITCHTYPE.CUSTOM) {
      configuration.switches = Array.from({ length: config.nSwitches }, configuration.switches);
    }

    configuration.switches = configuration.switches.map((s) => {
      s.pressed = false;
      return s;
    });

    console.log(configuration);
    setConfig(configuration);
  }

  return (
    <div id="firstnode">
      <div className={`main-background ${fail ? "fail" : ""}`}>
        {config && (
          <MainScreen
            show={screen === KEYPAD_SCREEN}
            config={config}
            solvePuzzle={solvePuzzle}
            solved={solved}
            solvedTrigger={solvedTrigger}
          />
        )}
        {/* <ControlPanel show={screen === CONTROL_PANEL_SCREEN} onOpenScreen={onOpenScreen} /> */}
      </div>
    </div>
  );
}
