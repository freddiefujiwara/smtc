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
  }
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined'){
  module.exports = Smtc;
} else {
  window.Smtc = Smtc;
}
