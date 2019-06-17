const { navigateAhead } = require("../graphNavUtils");

const { checkNavigationOrder } = require("./checkNavigationOrder");
const { navigationExceptionManager } = require("./navigationExceptionManager");

const resetTo = (state, wanted) => {
  try {
    checkNavigationOrder(pos, wanted);
    return navigateAhead(state, wanted);
  } catch (error) {
    return navigationExceptionManager(error, pos);
  }
};

module.exports = {
  resetTo
};
