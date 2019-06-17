const navigateBehind = (state, wanted) => {
  let chainedListView = state;
  if (chainedListView.name === wanted) return chainedListView;
  chainedListView = chainedListView.prev;
  while (chainedListView !== null) {
    console.log(`nav exec to ${chainedListView.name}`);
    if (chainedListView.name === wanted) return chainedListView;
    chainedListView = chainedListView.prev;
  }
  throw new Error("NO_WAY_BEHIND_FOUND");
};

module.exports = {
  navigateBehind
};
