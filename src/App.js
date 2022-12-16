const OutputView = require('./OutputView');
const InputView = require('./InputView');

class App {
  constructor() {
    this.handleMaxValue = this.handleMaxValue.bind(this);
  }

  handleMaxValue(maxValue) {}

  play() {
    OutputView.printGameStart();
    InputView.readMaxValue(this.handleMaxValue);
  }
}

module.exports = App;
