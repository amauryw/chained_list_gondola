/*
 ** printGraph is utils to display a chained List on STDOUT
 */

const { get } = require("lodash");

const printGraph = chainedList => {
  let i = 0;
  let chainedListView = chainedList;
  while (chainedListView !== null) {
    console.log(
      `${i} : |${get(chainedListView, "prev.name") || null}| <- |${
        chainedListView.name
      }| -> |${get(chainedListView, "next.name") || null}|`
    );
    chainedListView = chainedListView.next;
    i++;
  }
};

module.exports = {
  printGraph
};
