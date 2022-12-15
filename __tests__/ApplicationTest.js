const MissionUtils = require("@woowacourse/mission-utils");
const App = require("../src/App");
const AnswerMaker = require("../src/AnswerMaker");

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((_, callback) => {
      callback(input);
    });
  }, MissionUtils.Console.readLine);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

const getOutput = (logSpy) => {
  return [...logSpy.mock.calls].join("");
};

const runException = (inputs) => {
  mockQuestions(inputs);
  const logSpy = getLogSpy();
  const app = new App();

  app.play();

  expectLogContains(getOutput(logSpy), ["[ERROR]"]);
};

const expectLogContains = (received, logs) => {
  logs.forEach((log) => {
    expect(received).toEqual(expect.stringContaining(log));
  });
};

const expectPrintOrder = (received, upside, downside) => {
  const upsideIndex = received.indexOf(upside);
  const downsideIndex = received.indexOf(downside);

  expect(upsideIndex).toBeLessThan(downsideIndex);
};

describe("숫자 추측 테스트", () => {
  test("기능 테스트", () => {
    const logSpy = getLogSpy();
    AnswerMaker.makeAnswer = jest.fn();
    AnswerMaker.makeAnswer.mockReturnValueOnce(30);

    mockQuestions(["100", "20", "40", "30"]);

    const app = new App();
    app.play();

    const log = getOutput(logSpy);
    expectLogContains(log, [
      "최종 게임 결과",
      "[ 0020 | 0040 | 0030 ]",
      "[ Down |  Up  |  Ok  ]",
      "게임 성공 여부: 성공",
      "총 시도한 횟수: 1",
    ]);
    expectPrintOrder(log, "[ 0020 | 0040 | 0030 ]", "[ Down |  Up  |  Ok  ]");
  });

  test("예외 테스트", () => {
    runException(["a"]);
  });
});
