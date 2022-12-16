const App = require('../src/App');

describe('APP 기능 테스트', () => {
  test('validateMaxValue', () => {
    const app = new App();

    expect(() => app.validateMaxValue(9)).toThrow();
    expect(() => app.validateMaxValue(1001)).toThrow();

    expect(() => app.validateMaxValue(10)).not.toThrow();
    expect(() => app.validateMaxValue(1000)).not.toThrow();
  });
});
