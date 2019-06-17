const { navigateAhead } = require("../graphNavUtils");

const { checkNavigationOrder } = require("./checkNavigationOrder");
const { navigationExceptionManager } = require("./navigationExceptionManager");

const resetTo = (state, wanted) => {
  try {
    checkNavigationOrder("to_change", wanted);
    return navigateAhead(state, wanted);
  } catch (error) {
    return navigationExceptionManager(error, pos);
  }
};

module.exports = {
  resetTo
};
