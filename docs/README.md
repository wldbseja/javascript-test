## 숫자 맞추기 게임

- App :

1. 숫자 맞추기 게임 문구 출력

- OutputView - 게임 시작 문구 출력 함수 호출
- "숫자 맞추기 게임을 시작합니다."

2. 최대값 입력 문구 출력

- InputView.readMaxValue 함수 호출,최대값 받기
- "정답 숫자의 최대값을 입력해주세요.(10 이상 1,000 이하)"
- 에러 확인
  - 범위 10 - 1000 + 숫자 확인
- NumberGame 클래스로 최대값 보내기

3. 추측 숫자 입력 문구 출력

   - InputView.readGuessing 함수 호출, 추측 숫자 받기
   - NumberGame.guess 함수에 추측 숫자 주고 ,
   - 정답 숫자와 추측 숫자를 비교 해서 표시 되는 패턴 값 위 , 아래
     - 정답 숫자 > 추측 숫자 = Up
     - 정답 숫자 < 추측 숫자 = Down
     - 정답 숫자 === 추측 숫자 = Ok
   - OutputView.printGuessing()에 패턴 값 위 + 아래,추측 숫자,최대값 보내기
     - 패턴 값 위 + 아래,추측 숫자,최대값 이용하여 추측 상태 출력

4. 게임 성공,실패 여부

- 정답 숫자 === 추측 숫자 같으면 "성공" : 5번 까지

  - OutputView.printResult() 에 결과 값 보내서 최종 게임 결과 문구 출력

- 정답 숫자 !== 추측 숫자 다르면 : 5번 까지 "실패"

  - InputView.readGameCommand 함수 호출 , 재시작 여부 값 받기

  - 재시작 여부 값 : R이면
  - NumberGame.retry() 호출
    - 패턴 값 위, 아래 초기화
    - 게임 총 시도한 횟수 += 1
    - 추측 숫자 초기화
  - InputView.readGuessing 함수 호출, 추측 숫자 받기
  - 재시작 여부 값 : Q면
  - OutputView.printResult() 에 결과 값 보내서 최종 게임 결과 문구 출력

- NumberGame :

1. App 에서 보낸 최대값 받기
   - 최대값 받아서 AnswerMaker.makeAnswer 함수에 보내고 , 리턴된 값 : 정답 숫자 받기
     - 정답 숫자는 1부터 입력받은 최대값 사이의 숫자를 생성
