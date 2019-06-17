navigateBehind = state => {
  if (!state.prev) throw new Error("NAVIGATION_BEHIND_FAILED");
  state.goBackFunc();
  return state.prev;
};

const navigateBehindToState = (state, wantedStateName) => {
  let currentState = state;
  while ((currentState = navigateBehind(currentState))) {
    if (currentState.name === wantedStateName) return currentState;
  }
  throw new Error("NO_WAY_BEHIND_FOUND");
};

module.exports = {
  navigateBehind,
  navigateBehindToState
};
