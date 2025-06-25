export const THEMES = {
  BASIC: "BASIC",
  FUTURISTIC: "FUTURISTIC",
  STANDARD: "STANDARD",
  RETRO: "RETRO",
};

export const SWITCHTYPE = {
  LETTERS: "LETTERS",
  NUMBERS: "NUMBERS",
  SHAPES: "SHAPES",
  COLORED_SHAPES: "COLORED SHAPES",
  COLORS: "COLORS",
  CUSTOM: "CUSTOM",
};
export const AREACOLOR = {
  NONE: "",
  RAINBOW: "RAINBOW",
  CUSTOM: "CUSTOM",
};

export const ESCAPP_CLIENT_SETTINGS = {
  imagesPath: "./images/",
};

export const ALLOWED_ACTIONS = ["NONE", "LOAD_SOLUTION"];

export const ICONS = ["circle", "triangle", "square", "pentagon", "star", "hexagon"];

export const THEME_ASSETS = {
  [THEMES.RETRO]: {
    backgroundImg: "/src/assets/images/ancient_bg.png",
    switchOnImg: "/src/assets/images/ancient_switch_on.png",
    switchOffImg: "/src/assets/images/ancient_switch_off.png",
    buttonImg: "/src/assets/images/ancient_button.png",
    switchUpAudio: "sounds/switch1.wav",
    switchDownAudio: "sounds/switch2.wav",
    failAudio: "sounds/fail-connection.wav",
    connectionAudio: "sounds/connection.wav",
    buttonAudio: "sounds/button-stone.wav",
  },
  [THEMES.BASIC]: {
    backgroundImg: "/src/assets/images/basic_bg.png",
    switchOnImg: "/src/assets/images/basic_switch_on.png",
    switchOffImg: "/src/assets/images/basic_switch_off.png",
    buttonImg: "/src/assets/images/basic_button.png",
    switchUpAudio: "sounds/switch1.wav",
    switchDownAudio: "sounds/switch2.wav",
    failAudio: "sounds/fail-connection.wav",
    connectionAudio: "sounds/connection.wav",
    buttonAudio: "sounds/button.wav",
  },
  [THEMES.STANDARD]: {
    backgroundImg: "/src/assets/images/basic_bg.png",
    switchOnImg: "/src/assets/images/basic_switch_on.png",
    switchOffImg: "/src/assets/images/basic_switch_off.png",
    buttonImg: "/src/assets/images/basic_button.png",
    switchUpAudio: "sounds/switch1.wav",
    switchDownAudio: "sounds/switch2.wav",
    failAudio: "sounds/fail-connection.wav",
    connectionAudio: "sounds/connection.wav",
    buttonAudio: "sounds/button.wav",
  },
  [THEMES.FUTURISTIC]: {
    backgroundImg: "/src/assets/images/futuristic_bg.png",
    switchOnImg: "/src/assets/images/futuristic_switch_on.png",
    switchOffImg: "/src/assets/images/futuristic_switch_off.png",
    buttonImg: "/src/assets/images/futuristic_button.png",
    switchUpAudio: "sounds/switch1.wav",
    switchDownAudio: "sounds/switch2.wav",
    failAudio: "sounds/fail-connection.wav",
    connectionAudio: "sounds/connection.wav",
    buttonAudio: "sounds/button.wav",
  },
};
export const DEFAULT_APP_SETTINGS = {
  skin: "STANDARD",
  actionAfterSolve: "NONE",
  message: undefined,

  switchType: SWITCHTYPE.COLORED_SHAPES,
  nSwitches: 6,
  customSwitches: [],

  backgroundImg: "",
  switchOnImg: "/src/assets/images/basic_switch_on.png",
  switchOffImg: "/src/assets/images/basic_switch_off.png",
  buttonImg: "/src/assets/images/basic_button.png",
  switchUpAudio: "sounds/switch1.wav",
  switchDownAudio: "sounds/switch2.wav",
  failAudio: "sounds/fail-connection.wav",
  connectionAudio: "sounds/connection.wav",
  buttonAudio: "sounds/button.wav",
};
