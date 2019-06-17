const checkNavigationOrder = (state, pos, wanted) => {
  if (!state || pos === wanted || !pos || !wanted) {
    throw new Error("NAVIGATION_ORDER_INVALID");
  }
};

module.exports = {
  checkNavigationOrder
};
