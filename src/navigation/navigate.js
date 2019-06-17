const {
  seekCurrentState,
  navigateAheadToState,
  navigateBehindToState
} = require("../graphNavUtils");

const { checkNavigationOrder } = require("./checkNavigationOrder");
const { navigationExceptionManager } = require("./navigationExceptionManager");

const navigate = (state, pos, wanted) => {
  try {
    checkNavigationOrder(state, pos, wanted);
    const { currentState, match } = seekCurrentState(state, pos, wanted);
    return match
      ? navigateBehindToState(currentState, wanted)
      : navigateAheadToState(currentState, wanted);
  } catch (error) {
    return navigationExceptionManager(error, pos);
  }
};

module.exports = {
  navigate
};
