const {
  seekCurrentState,
  navigateAhead,
  navigateBehind
} = require("../graphNavUtils");

const { checkNavigationOrder } = require("./checkNavigationOrder");
const { navigationExceptionManager } = require("./navigationExceptionManager");

const navigate = (state, pos, wanted) => {
  try {
    checkNavigationOrder(pos, wanted);
    const { currentState, match } = seekCurrentState(state, pos, wanted);
    return match
      ? navigateBehind(currentState, wanted)
      : navigateAhead(currentState, wanted);
  } catch (error) {
    return navigationExceptionManager(error, pos);
  }
};

module.exports = {
  navigate
};
