navigateAhead = state => {
  if (!state.next) throw new Error("NAVIGATION_AHEAD_FAILED");
  state.goAheadFunc();
  return state.next;
};

const navigateAheadToState = (state, wantedStateName) => {
  let currentState = state;
  while ((currentState = navigateAhead(currentState))) {
    if (currentState.name === wantedStateName) return currentState;
  }
  throw new Error("NO_WAY_AHEAD_FOUND");
};

module.exports = {
  navigateAhead,
  navigateAheadToState
};
