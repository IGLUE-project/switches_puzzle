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

export const ICONS = [
  "Circle",
  "Triangle",
  "Square",
  "Pentagon",
  "Star",
  "Hexagon",
  "Clubs",
  "Diamonds",
  "Hearts",
  "Spades",
  "Moon",
  "Puzzle",
  "Sun",
  "Rhombus",
];
export const COLORS = [
  "Red",
  "Green",
  "Blue",
  "Yellow",
  "Orange",
  "Pink",
  "Cyan",
  "Purple",
  "Brown",
  "Black",
  "Gray",
  "White",
  "Turquoise",
  "Lime",
];

export const THEME_ASSETS = {
  [THEMES.RETRO]: {
    backgroundImg: "images/ancient_bg.png",
    switchOnImg: "images/ancient_switch_on.png",
    switchOffImg: "images/ancient_switch_off.png",
    buttonImg: "images/ancient_button.png",
    switchUpAudio: "sounds/switch1.wav",
    switchDownAudio: "sounds/switch2.wav",
    failAudio: "",
    connectionAudio: "sounds/connection.wav",
    buttonAudio: "sounds/button-stone.wav",
  },
  [THEMES.BASIC]: {
    backgroundImg: "images/basic_bg.png",
    switchOnImg: "images/basic_switch_on.png",
    switchOffImg: "images/basic_switch_off.png",
    buttonImg: "images/basic_button.png",
    switchUpAudio: "sounds/switch1.wav",
    switchDownAudio: "sounds/switch2.wav",
    failAudio: "sounds/fail-connection.wav",
    connectionAudio: "sounds/connection.wav",
    buttonAudio: "sounds/button.wav",
  },
  [THEMES.STANDARD]: {
    backgroundImg: "images/basic_bg.png",
    switchOnImg: "images/basic_switch_on.png",
    switchOffImg: "images/basic_switch_off.png",
    buttonImg: "images/basic_button.png",
    switchUpAudio: "sounds/switch1.wav",
    switchDownAudio: "sounds/switch2.wav",
    failAudio: "sounds/fail-connection.wav",
    connectionAudio: "sounds/connection.wav",
    buttonAudio: "sounds/button.wav",
  },
  [THEMES.FUTURISTIC]: {
    backgroundImg: "images/futuristic_bg.png",
    switchOnImg: "images/futuristic_switch_on.png",
    switchOffImg: "images/futuristic_switch_off.png",
    buttonImg: "images/futuristic_button.png",
    switchUpAudio: "sounds/switch1.wav",
    switchDownAudio: "sounds/switch2.wav",
    failAudio: "sounds/fail-connection.wav",
    connectionAudio: "sounds/connection.wav",
    buttonAudio: "sounds/button.wav",
  },
};
export const DEFAULT_APP_SETTINGS = {
  skin: "STANDARD",
  actionWhenLoadingIfSolved: true,
  message: undefined,

  switchType: SWITCHTYPE.COLORED_SHAPES,
  nSwitches: 6,
  customSwitches: [],

  backgroundImg: "",
  switchOnImg: "images/basic_switch_on.png",
  switchOffImg: "images/basic_switch_off.png",
  buttonImg: "images/basic_button.png",
  switchUpAudio: "sounds/switch1.wav",
  switchDownAudio: "sounds/switch2.wav",
  failAudio: "sounds/fail-connection.wav",
  connectionAudio: "sounds/connection.wav",
  buttonAudio: "sounds/button.wav",
};
