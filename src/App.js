const OutputView = require('./OutputView');
const InputView = require('./InputView');
const { PRINT_ERROR_STRING } = require('./constants');

class App {
  constructor() {
    this.handleMaxValue = this.handleMaxValue.bind(this);
  }

  handleMaxValue(maxValue) {
    try {
      this.validateMaxValue(maxValue);
    } catch (error) {
      OutputView.printError(error);
      InputView.readMaxValue(this.handleMaxValue);
    }
  }

  validateMaxValue(maxValue) {
    if (!(maxValue >= 10 && maxValue <= 1000)) {
      throw Error(PRINT_ERROR_STRING.ERROR_NUMBER_RANGE);
    }
  }

  play() {
    OutputView.printGameStart();
    InputView.readMaxValue(this.handleMaxValue);
  }
}

module.exports = App;
