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
  });
  it(' _clean() : can clean all parameters', () => {
    const s = new Smtc();
    expect(s.json).toBe("");
    s.readFile('__tests__/testData.txt')
      .initialize();
    s._clean();
    expect(s.json).toBe("");
  });
});
