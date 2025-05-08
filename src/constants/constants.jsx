export const PAINTING_SCREEN = "painting";
export const SAFE_CLOSED_SCREEN = "safe_closed";
export const SAFE_OPEN_SCREEN = "safe_open";
export const CONTROL_PANEL_SCREEN = "control_panel";
export const KEYPAD_SCREEN = "keypad";

export const THEMES = {
  BASIC: "basic",
  FUTURISTIC: "futuristic",
  CONTEMPORARY: "contemporary",
  ANCIENT: "ancient",
};
export const SWITCHTYPE = {
  LETTERS: "letters",
  NUMBERS: "numbers",
  SHAPES: "shapes",
  COLORED_SHAPES: "colored shapes",
  COLORS: "colors",
  CUSTOM: "custom",
};
export const AREACOLOR = {
  NONE: "",
  RAINBOW: "rainbow",
  CUSTOM: "custom",
};
export const ICONS = ["circle", "triangle", "square", "pentagon", "star", "hexagon"];

export const THEME_ASSETS = {
  [THEMES.ANCIENT]: {
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
    buttonAudio: "sounds/button-stone.wav",
  },
  [THEMES.CONTEMPORARY]: {
    backgroundImg: "/src/assets/images/basic_bg.png",
    switchOnImg: "/src/assets/images/basic_switch_on.png",
    switchOffImg: "/src/assets/images/basic_switch_off.png",
    buttonImg: "/src/assets/images/basic_button.png",
    switchUpAudio: "sounds/switch1.wav",
    switchDownAudio: "sounds/switch2.wav",
    failAudio: "sounds/fail-connection.wav",
    connectionAudio: "sounds/connection.wav",
    buttonAudio: "sounds/button-stone.wav",
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
    buttonAudio: "sounds/button-stone.wav",
  },
};
