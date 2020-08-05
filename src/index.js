const tmi = require("tmi.js");

const options = {
  identity: {
    username: "marekipa",
    password: "oauth:txaelr19rjhwms2hbf0sszsdmlgyip",
  },
  //   channel name
  channles: ["marekipa"],
};

tmi.client(options);
