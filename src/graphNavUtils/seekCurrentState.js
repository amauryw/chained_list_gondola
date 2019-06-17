const seekCurrentState = (state, pos, wanted) => {
  let chainedListView = state;
  let match = false;
  while (chainedListView !== null) {
    if (chainedListView.name === wanted) {
      match = true;
    }
    if (chainedListView.name === pos) {
      return { currentState: chainedListView, match };
    }
    chainedListView = chainedListView.next;
  }
  throw new Error("CURRENT_STATE_NOT_FOUND");
};

module.exports = {
  seekCurrentState
};
