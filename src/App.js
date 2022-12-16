const OutputView = require('./OutputView');
const InputView = require('./InputView');
const NumberGame = require('./NumberGame');
const { PRINT_ERROR_STRING } = require('./constants');

class App {
  #NumberGame;
  constructor() {
    this.handleMaxValue = this.handleMaxValue.bind(this);
    this.handleGuessing = this.handleGuessing.bind(this);
  }

  handleMaxValue(maxValue) {
    try {
      this.validateMaxValue(maxValue);
      this.#NumberGame = new NumberGame(maxValue);
      InputView.readGuessing(this.handleGuessing);
    } catch (error) {
      OutputView.printError(error);
      InputView.readMaxValue(this.handleMaxValue);
    }
  }

  handleGuessing(guessNumber) {}

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
