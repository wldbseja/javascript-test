const MissionUtils = require("@woowacourse/mission-utils");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 정답 숫자의 최대값을 입력받는다.
   */
  readMaxValue() {},

  /**
   * 사용자가 추측할 숫자를 입력받는다.
   */
  readGuessing() {},

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
