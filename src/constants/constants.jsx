export const DEFAULT_APP_SETTINGS = {
  skin: "STANDARD",
  actionWhenLoadingIfSolved: true,
  nSwitches: 6,
  switchType: "NONE",
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

export const THEMES = {
  STANDARD: "STANDARD",
  RETRO: "RETRO",
  FUTURISTIC: "FUTURISTIC",
};

export const SWITCHTYPE = {
  NONE: "NONE",
  LETTERS: "LETTERS",
  NUMBERS: "NUMBERS",
  SHAPES: "SHAPES",
  COLORED_SHAPES: "COLORED_SHAPES",
  COLORS: "COLORS",
  CUSTOM: "CUSTOM",
};
export const AREACOLOR = {
  NONE: "",
  RAINBOW: "RAINBOW",
  CUSTOM: "CUSTOM",
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
  [THEMES.STANDARD]: {
    backgroundImg: "images/basic_bg.png",
    containerImg: "images/basic_container.png",
    switchOnImg: "images/basic_switch_on.png",
    switchOffImg: "images/basic_switch_off.png",
    buttonImg: "images/basic_button.png",
    buttonSolvedImg: "images/basic_button_ok.png",
    switchUpAudio: "sounds/switch1.wav",
    switchDownAudio: "sounds/switch2.wav",
    failAudio: "sounds/fail-connection.wav",
    connectionAudio: "sounds/connection.wav",
    buttonAudio: "sounds/button.wav",
  },
  [THEMES.RETRO]: {
    backgroundImg: "images/retro_bg.png",
    containerImg: "images/retro_container.png",
    switchOnImg: "images/retro_switch_on.png",
    switchOffImg: "images/retro_switch_off.png",
    buttonImg: "images/retro_button.png",
    buttonSolvedImg: "images/retro_button_ok.png",
    torchOffImg: "images/torch_off.png",
    torchOnImg: "images/torch_on.gif",
    switchUpAudio: "sounds/switch1.wav",
    switchDownAudio: "sounds/switch2.wav",
    failAudio: "",
    connectionAudio: "sounds/solution_ok_retro.wav",
    buttonAudio: "sounds/button-stone.wav",
    torchAudio: "sounds/torch.wav",
  },
  [THEMES.FUTURISTIC]: {
    backgroundImg: "images/futuristic_bg_.png",
    containerImg: "images/futuristic_container_2.png",
    switchOnImg: "images/futuristic_switch_on.png",
    switchOffImg: "images/futuristic_switch_off.png",
    buttonImg: "images/futuristic_button.png",
    buttonSolvedImg: "images/futuristic_button.png",
    switchUpAudio: "sounds/switch1.wav",
    switchDownAudio: "sounds/switch2.wav",
    failAudio: "sounds/fail-connection.wav",
    connectionAudio: "sounds/connection.wav",
    buttonAudio: "sounds/button.wav",
  },
};

export const ESCAPP_CLIENT_SETTINGS = {
  imagesPath: "./images/",
};
