const AnswerMaker = require('./AnswerMaker');
const RandomNumberGenerator = require('./RandomNumberGenerator');

/**
 * 숫자 맞추기 게임을 관리하는 클래스
 */
class NumberGame {
  #number;
  constructor(maxValue) {
    this.#number = AnswerMaker.makeAnswer(
      maxValue,
      RandomNumberGenerator.generate
    );
  }
  /**
   * 사용자가 값을 추측할 때 사용하는 메서드
   * <p>
   * 추측을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  guess() {}

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = NumberGame;
