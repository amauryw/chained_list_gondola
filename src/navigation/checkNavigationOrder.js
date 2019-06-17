const checkNavigationOrder = (pos, wanted) => {
  if (pos === wanted || !pos || !wanted) {
    throw new Error("NAVIGATION_ORDER_INVALID");
  }
};

module.exports = {
  checkNavigationOrder
};
