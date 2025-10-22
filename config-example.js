//Copy this file to config.js and specify your own settings

export let ESCAPP_APP_SETTINGS = {
  //Settings that can be specified by the authors
  skin: "STANDARD", //skin can be "STANDARD", "RETRO", or "FUTURISTIC".
  // backgroundImg: "NONE", //background can be "NONE" or a URL.
  actionWhenLoadingIfSolved: false,

  nSwitches: 6, //the number of switches.
  switchType: "NONE", //switchType can be "NONE", "LETTERS", "NUMBERS", "SHAPES", "COLORED_SHAPES", "COLORS" or "CUSTOM".
  
  //If switchType is CUSTOM, customSwitches should be specified.
  // customSwitches: [
  //   {
  //     label: "👽"
  //   },
  //   {
  //     image: "/images/favicon.svg"
  //   },
  //   {
  //     label: "cable 2"
  //   },
  //   {
  //     label: "cable 3",
  //     color: "green" //light color
  //   },
  //   {
  //     label: "cable 4",
  //     color: "#c700b5"
  //   },
  //   {
  //     label: "cable 5",
  //     color: "#c700b5"
  //   },
  // ],

  //Settings that will be automatically specified by the Escapp server
  locale: "es",

  escappClientSettings: {
    endpoint: "https://escapp.es/api/escapeRooms/id",
    linkedPuzzleIds: [1],
    rtc: false,
  },
};