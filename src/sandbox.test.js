const { createGraph } = require("./graph/createGraph");
const { printGraph } = require("./graph/printGraph");
const { navigate } = require("./navigation/navigate");
const { resetTo } = require("./navigation/resetTo");

goBackLog = value => {
  console.log(`exec back from ${value}`);
};

goAheadsLog = value => {
  console.log(`exec ahead from ${value}`);
};

const state = createGraph([
  { name: "0", goBackFunc: goBackLog, goAheadFunc: goAheadsLog },
  { name: "wanted", goBackFunc: goBackLog, goAheadFunc: goAheadsLog },
  { name: "1", goBackFunc: goBackLog, goAheadFunc: goAheadsLog },
  { name: "2", goBackFunc: goBackLog, goAheadFunc: goAheadsLog },
  { name: "pos", goBackFunc: goBackLog, goAheadFunc: goAheadsLog }
]);

printGraph(state);

navigate(state, "pos", "wanted");

resetTo(state, "wanted");
