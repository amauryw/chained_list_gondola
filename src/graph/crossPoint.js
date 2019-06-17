/*
 ** a CrossPoint instancd represent the specific state of your program
 */

class CrossPoint {
  constructor(definition) {
    this.name = definition.name;
    this.next = null; // insert address of next sceen
    this.prev = null; // insert address of prev sceen
    this.content = "1"; // insert ReactComponent here
    this.number = 0; // number in graph
    this.goBackFunc = () => definition.goBackFunc(definition.name);
    this.goAheadFunc = () => definition.goAheadFunc(definition.name);
  }
}

module.exports = {
  CrossPoint
};
