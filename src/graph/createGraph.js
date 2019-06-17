const { CrossPoint } = require("./crossPoint");
/*
 ** createGraph generates a double chained List of CrossPoint from list configuration
 */

const createGraph = list => {
  let newCrossPoint = null;
  let prevCrossPoint = null;
  let start = null;
  if (!list) return null;
  for (let index = 0; index < list.length; index++) {
    newCrossPoint = new CrossPoint(list[index]);
    if (index === 0) start = newCrossPoint;
    if (prevCrossPoint) {
      prevCrossPoint.next = newCrossPoint;
      newCrossPoint.prev = prevCrossPoint;
    }
    prevCrossPoint = newCrossPoint;
  }
  if (prevCrossPoint) {
    prevCrossPoint.next = null;
  }
  return start;
};

module.exports = {
  createGraph
};
