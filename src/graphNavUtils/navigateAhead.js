const navigateAhead = (state, wanted) => {
  let chainedListView = state;
  if (chainedListView.name === wanted) return chainedListView;
  chainedListView = chainedListView.next;
  while (chainedListView !== null) {
    console.log(`nav exec to ${chainedListView.name}`);
    if (chainedListView.name === wanted) {
      return chainedListView;
    }
    chainedListView = chainedListView.next;
  }
  throw new Error("NO_WAY_AHEAD_FOUND");
};

module.exports = {
  navigateAhead
};
