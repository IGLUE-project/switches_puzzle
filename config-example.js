//Copy this file to config.js and specify your own settings

import { SWITCHTYPE, THEMES } from "./src/constants/constants";

export let ESCAPP_APP_SETTINGS = {
  skin: THEMES.BASIC, //skin can be "RETRO" or "FUTURISTIC" or "BASIC".
  actionWhenLoadingIfSolved: true,

  //message: "Custom message",

  //type: can be "LETTERS", "NUMBERS", "SHAPES", "COLORED SHAPES", "COLORS", "CUSTOM".
  switchType: SWITCHTYPE.CUSTOM,
  nSwitches: 6,
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

  //Settings that will be automatically specified by the Escapp server
  // solutionLength: 3,
  locale: "es",

  escappClientSettings: {
    endpoint: "https://escapp.es/api/escapeRooms/id",
    linkedPuzzleIds: [5],
    rtc: false,
  },
};
