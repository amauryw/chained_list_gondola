const { createGraph } = require("./graph/createGraph");
const { printGraph } = require("./graph/printGraph");
const { navigate } = require("./navigation/navigate");

const RESET_WANTED = true;
const state = createGraph([
  { name: "0" },
  { name: "wanted" },
  { name: "1" },
  { name: "2" },
  { name: "pos" }
]);

printGraph(state);

navigate(state, "pos", "wanted");

// navigate(state, "pos", "wanted", RESET_WANTED);
