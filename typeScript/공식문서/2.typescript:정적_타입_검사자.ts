// 프로그램을 실행시키지 않으면서 코드의 오류를 검출하는 것을 정적 검사라고 합니다.
// 어떤 것이 오류인지와 어떤 것이 연산 되는 값에 기인하지 않음을 정하는 것이 정적 타입 검사입니다.
// 정적 타입 검사자인 typescript 는 프로그램을 실행시키기 전에 값의 종류를 기반으로 프로그램의 오류를 찾습니다.
// 예를 들어, 1번 파일의 마지막 예시의 오류가 있는 이유는 obj 의 타입때문입니다. 다음은 typescript 에서 볼 수 있는 오류입니다.

// const obj = { width: 10, height: 15 };
// const area = obj.width * obj.heigth;
// 'heigth' 속성이 '{ width: number; height: number; }' 형식에 없습니다. 'height'을(를) 사용하시겠습니까?

// 타입이 있는 javascript 의 상위 집합
// 그렇다면 typescript 는 javascript 와 어떤 관계일까요?
// typescript 는 JS 의 구문이 허용되는, javascript 의 상위 집합 언어입니다.
