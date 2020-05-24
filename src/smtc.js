/**
 * @classdesc
 * This is a Smtc class. It's a "S"tate "M"achine "T"est "C"ase generator inspired by https://note.com/yumotsuyo/n/nd3099b40dc1f
 * Overall flow is the following
 * - setContents(file)
 * - initialize()
 *  - _flattenStates()
 * - oneStepCoverage()
 * - printResult(testSets)
 * - printTransitions();
 * - printZeroStep();
 * - printZeroStepMatrix();
 * - printOneStep(oneStepCoverage);
 * - printOneStepMatrix(oneStepCoverage);
 *
 */
class Smtc {
  /**
   * @constructor
   * @param {state-machine-cat} smcat this is for webapp
   * @desc
   * this._clean()
   */
  constructor(smcat){
    this.smcat = smcat || require('state-machine-cat');
    this._clean();
  }
  /**
   * store content from arguments
   * @param {string} contents Target Contents
   * @returns {Smtc} this This object
   * @desc
   * fill this.contents from outside of this instance
   */
  setContents(contents){
    this.contents = contents;
    return this;
  }
  /**
   * initialize all parameters
   * @public
   * @returns {Smtc} this This object
   * @desc
   * In this method, it aims to fill the following parameters
   * - this.states
   * - this.events
   * - this.transitions
   * - this.matrix
   */
  initialize(){
    this._clean();
    this.json = this.smcat.render(this.contents,{outputType: "json"});
    this.states = this._flattenStates(this.json.states).map((s) => s.name);
    this.json.transitions.forEach((t)=> {
      this.events.push(t.event || "[None]");
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
      const event = t.event || "[None]";
      this.transitions[this.states.indexOf(t.from)][this.events.indexOf(event)]
        = this.states.indexOf(t.to);
      this.matrix[this.states.indexOf(t.from)][this.states.indexOf(t.to)]
        .push(this.events.indexOf(event));
    });
    return this;
  }
  /**
   * calculate 1 step coverage
   * @public
   * @returns {Array} oneStepCoverage culculated coverage
   * @desc
   * oneStepCoverage = this.matrix x this.matrix
   */
  oneStepCoverage(){
    const oneStep = new Array();
    // this.matrix * this.matrix
    this.matrix.forEach((v,y) => {
      oneStep.push(new Array());
      v.forEach((h,x) => {
        oneStep[y].push(new Array());
        v.forEach((h2,x2) => {
          // push events if the path exists
          if(this.matrix[y][x2].length > 0 && this.matrix[x2][x].length > 0){
            const events = new Array();
            this.matrix[y][x2].forEach((e1)=>{
              this.matrix[x2][x].forEach((e2)=>{
                events.push([e1,e2]);
              });
            });
            events.forEach((e) => {
              oneStep[y][x].push(e);
            });
          }
        });
      });
    })
    return oneStep;
  }
  /**
   * print diagram
   * @public
   */
  printDiagram(){
    console.log(this.smcat.render(this.contents,{outputType: "svg"}));
  }
  /**
   * print transitions
   * @public
   */
  printTransitions(){
    console.log(`||${this.events.join("|")}|`);
    console.log(`|:--|${this.events.map(()=>":--").join("|")}|`);
    this.transitions.forEach((states,y) => {
      console.log(`|**${this.states[y]}**|${states.map((s) => s > 0 ? this.states[s] : "").join("|")}|`);
    });
  }
  /**
   * print zero step cases
   * @public
   */
  printZeroStep(){
    console.log(`|#|State#1|Event#1|State#2|`);
    console.log(`|:--|:--|:--|:--|`);
    let no = 0;
    this.states.forEach((from,y) => {
      this.states.forEach((to,x) => {
        if(this.matrix[y][x].length > 0){
          this.matrix[y][x].forEach((e) => {
            console.log(`|${no}|${from}|${this.events[e]}|${to}|`);
            no++;
          });
        }
      });
    });
  }
  /**
   * print zero step matrix
   * @public
   */
  printZeroStepMatrix(){
    console.log(`||${this.states.join("|")}|`);
    console.log(`|:--|${this.states.map(()=>":--").join("|")}|`);
    this.matrix.forEach((row,y)=>{
      console.log(`|**${this.states[y]}**|${row.map((r) => {
        return r.map((n) => this.events[n]).join(",");
      }).join("|")}|`);
    });
  }
  /**
   * print one step cases
   * @param {Array} oneStepCoverage one step coverage
   * @public
   */
  printOneStep(oneStepCoverage){
    console.log(`|#|State#1|Event#1|State#2|Event#2|State#3|`);
    console.log(`|:--|:--|:--|:--|:--|:--|`);
    let no = 0;
    this.states.forEach((from,y) => {
      this.states.forEach((to,x) => {
        if(oneStepCoverage[y][x].length > 0){
          oneStepCoverage[y][x].forEach((path) => {
            let middleState = 0;
            this.matrix[y].forEach((events,i) => {
              if(events.indexOf(path[0]) !== -1){
                middleState = i;
              }
            });
            console.log(`|${no}|${from}|${path.map((p)=>this.events[p]).join(`|${this.states[middleState]}|`)}|${to}|`);
            no++;
          });
        }
      });
    });
  }
  /**
   * print one step matrix
   * @param {Array} oneStepCoverage one step coverage
   * @public
   */
  printOneStepMatrix(oneStepCoverage){
    console.log(`||${this.states.join("|")}|`);
    console.log(`|:--|${this.states.map(()=>":--").join("|")}|`);
    oneStepCoverage.forEach((row,y)=>{
      console.log(`|**${this.states[y]}**|${row.map((r) => {
        if(r.length < 1) {
          return "";
        }
        return r.map((p) => p.map((n) => this.events[n]).join(" -> ")).join(",");
      }).join("|")}|`);
    });
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
  /**
   * flatten states
   * @public
   * @returns {Array} states flatten the state and fill in this.json.transitions as needed.
   * @desc
   * sometimes the states are nested, so we detect all nested and non-nested states.
   */
  _flattenStates(states){
    const ret = new Array();
    states.forEach((state) => {
      if(state.statemachine){
        if(state.statemachine.states){
          this._flattenStates(state.statemachine.states).forEach((s) => {
            ret.push(s);
          });
        }
        if(state.statemachine.transitions){
          state.statemachine.transitions.forEach((t)=> {
            this.json.transitions.push(t);
          });
        }
      }
      ret.push(state);
    });
    return ret;
  }
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined'){
  module.exports = Smtc;
} else {
  window.Smtc = Smtc;
}
