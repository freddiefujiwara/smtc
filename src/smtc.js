/**
 * @classdesc
 * This is a smtc class. It's a state machine test case generator inspired by https://github.com/sylvainhalle/QICT
 * Overall flow is the following
 *
 */
class Smtc {
  /**
   * @constructor
   * @desc
   * this._clean()
   */
  constructor(){
    this.smcat = require("state-machine-cat");
    this._clean();
  }
  /**
   * store content from file
   * @param {string} file Target File
   * @returns {Smtc} this This object
   * @desc
   * When you want to output the state machine of the folloing Parameters and Parameter Values
   */
  readFile(file){
    const fs = require('fs');
    this.contents = fs.readFileSync(file, 'utf8').trim();
    return this;
  }
  /**
   * initialize all parameters
   * @public
   * @returns {Smtc} this This object
   * @desc
   * This method can be divided into a first half and a second half.
   */
  initialize(){
    this._clean();
    this.json = this.smcat.render(this.contents,{outputType: "json"});
    this.states = this.json.states.map((s) => s.name);
    this.json.transitions.forEach((t)=> {
      this.events.push(t.event || "<None>");
    });
    //initialize this.transitions
    this.states.forEach(() => {
      const row = new Array();
      this.events.forEach(() => {
        row.push(0);
      });
      this.transitions.push(row);
    })
    //initialize this.matrix
    this.states.forEach(() => {
      const row = new Array();
      this.states.forEach(() => {
        row.push(new Array());
      });
      this.matrix.push(row);
    })
    this.json.transitions.forEach((t)=> {
      const event = t.event || "<None>";
      this.transitions[this.states.indexOf(t.from)][this.events.indexOf(event)]
        = this.states.indexOf(t.to);
      this.matrix[this.states.indexOf(t.from)][this.states.indexOf(t.to)]
        .push(this.events.indexOf(event));
    });
    return this;
  }
  /**
   * print test sets to console
   * @param {Array} testSets Generated test sets
   * @public
   */
  printResult(testSets){
  }
  /**
   * PRIVATE:clean up all parameters
   */
  _clean(){
    this.json = "";
    this.states = new Array();
    this.events = new Array();
    this.transitions = new Array();
    this.matrix = new Array();
  }
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined'){
  module.exports = Smtc;
} else {
  window.Smtc = Smtc;
}