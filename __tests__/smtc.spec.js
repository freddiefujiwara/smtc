const Smtc = require('../src/smtc');

describe('Smtc', () => {
  it(' constructor() : can create new instance', () => {
    const s = new Smtc();
    expect(s).not.toBeNull();
    expect(s).toBeInstanceOf(Smtc);
  });
  it(' readFile(file) : can read all strings from file', () => {
    const s = new Smtc();
    expect(s.readFile).toBeInstanceOf(Function);
    expect(s.readFile('__tests__/testData.txt')).toBeInstanceOf(Smtc);
    expect(s.contents).not.toBe("");
    // no such file or directory
    const t = () => {
      const si = new Smtc();
      si.readFile('__tests__/testData.csv');
    };
    expect(t).toThrow(/no such file or directory/);
    s.contents = "syntax error;";
    // no such file or directory
    const t2 = () => {
      s.initialize();
    };
    expect(t2).toThrow(/Expected/);
  });
  it(' initialize() : can initialize from this.contents', () => {
    const s = new Smtc();
    s.readFile('__tests__/testData.txt');
    expect(s.initialize).toBeInstanceOf(Function);
    expect(s.initialize()).toBeInstanceOf(Smtc);
    expect(s.events).toStrictEqual([
      '[None]'                ,// 0
      'reserve'               ,// 1
      'approve'               ,// 2
      'cancel approval'       ,// 3
      'reject'                ,// 4
      'cancel of reservation' ,// 5
      'cancel'                ,// 6
      'car delivered'          // 7
    ]);
    expect(s.states).toStrictEqual([
      'initial',
      'Accepting reservations',
      'Reservation accepted',
      'Reserved',
      'final'
    ]);
    expect(s.transitions).toStrictEqual([
      [1,0,0,0,0,0,0,0],
      [0,2,0,0,0,0,0,0],
      [0,0,3,0,1,1,0,0],
      [0,0,0,2,0,0,1,4],
      [0,0,0,0,0,0,0,0]
    ]);
    expect(s.matrix).toStrictEqual([
      //init   //Acpt  //Rsv  //Rsd  //fin
      [ [   ], [0   ], [   ], [   ], [   ] ], //initial,
      [ [   ], [    ], [ 1 ], [   ], [   ] ], //Accepting reservations
      [ [   ], [4, 5], [   ], [ 2 ], [   ] ], //Reservation accepted
      [ [   ], [6   ], [ 3 ], [   ], [ 7 ] ], //Reserved
      [ [   ], [    ], [   ], [   ], [   ] ]  //final
    ]);
  });
  it(' oneStepCoverage() : can calculate 1 step coverage', () => {
    const s = new Smtc();
    s.readFile('__tests__/testData.txt')
      .initialize();
    expect(s.oneStepCoverage).toBeInstanceOf(Function);
    const oneStep = s.oneStepCoverage();
    expect(s.oneStepCoverage()).toStrictEqual([
      [[],[           ],[[0,1]            ],[     ],[     ]],
      [[],[[1,4],[1,5]],[                 ],[[1,2]],[     ]],
      [[],[[2,6]      ],[[4,1],[5,1],[2,3]],[     ],[[2,7]]],
      [[],[[3,4],[3,5]],[[6,1]            ],[[3,2]],[     ]],
      [[],[           ],[                 ],[     ],[     ]]
    ]);
  });
  it(' printOneStep(oneStepCoverage) : can print all paths', () => {
    const s = new Smtc();
    s.readFile('__tests__/testData.txt')
      .initialize();
    expect(s.printDiagram).toBeInstanceOf(Function);
    expect(s.printTransitions).toBeInstanceOf(Function);
    expect(s.printOneStep).toBeInstanceOf(Function);
    expect(s.printOneStepMatrix).toBeInstanceOf(Function);
    expect(s.printZeroStep).toBeInstanceOf(Function);
    expect(s.printZeroStepMatrix).toBeInstanceOf(Function);
  });
  it(' _clean() : can clean all parameters', () => {
    const s = new Smtc();
    expect(s.json).toBe("");
    expect(s.events.length).toBe(0);
    expect(s.states.length).toBe(0);
    expect(s.transitions.length).toBe(0);
    expect(s.matrix.length).toBe(0);
    s.readFile('__tests__/testData.txt')
      .initialize();
    s._clean();
    expect(s.json).toBe("");
    expect(s.events.length).toBe(0);
    expect(s.states.length).toBe(0);
    expect(s.transitions.length).toBe(0);
    expect(s.matrix.length).toBe(0);
  });
});
