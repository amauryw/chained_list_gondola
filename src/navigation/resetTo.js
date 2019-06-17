const { navigateAheadToState } = require("../graphNavUtils");

const { checkNavigationOrder } = require("./checkNavigationOrder");
const { navigationExceptionManager } = require("./navigationExceptionManager");

const resetTo = (state, wanted) => {
  try {
    checkNavigationOrder(state, "to_change", wanted);
    return navigateAheadToState(state, wanted);
  } catch (error) {
    return navigationExceptionManager(error, "default");
  }
};

module.exports = {
  resetTo
};
