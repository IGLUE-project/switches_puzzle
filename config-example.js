//Copy this file to config.js and specify your own settings

export let ESCAPP_APP_SETTINGS = {
  //Settings that can be specified by the authors
  skin: "RETRO", //skin can be "STANDARD", "RETRO", or "FUTURISTIC".
  // backgroundImg: "NONE", //background can be "NONE" or a URL.
  //backgroundImg: "https://cdn.midjourney.com/d38f18f5-2b16-482b-9873-62fe85210126/0_2.png",
  actionWhenLoadingIfSolved: false,

  nSwitches: 6, //the number of switches.
  switchType: "LETTERS", //switchType can be "LETTERS", "NUMBERS", "SHAPES", "COLORED SHAPES", "COLORS" or "CUSTOM".
  
  //If switchType is CUSTOM, customSwitches should be specified.
  customSwitches: [
    {
      label: "👽"
    },
    {
      image: "/images/favicon.svg"
    },
    {
      label: "cable 2"
    },
    {
      label: "cable 3",
      color: "green" //light color
    },
    {
      label: "cable 4",
      color: "#c700b5"
    },
    {
      label: "cable 5",
      color: "#c700b5"
    },
  ],

  //Settings that will be automatically specified by the Escapp server
  locale: "es",

  escappClientSettings: {
    endpoint: "https://escapp.es/api/escapeRooms/id",
    linkedPuzzleIds: [5],
    rtc: false,
  },
};