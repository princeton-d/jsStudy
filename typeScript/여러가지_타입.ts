// 타입추론 = 타입을 지정하지 않아도 알아서 해당 타입을 인식함
let meet: string = 'steak';
meet = 'porkSteak'; // 정상적으로 string 타입으로 인식
// meet = 1 숫자열은 문자열에 할당할 수 없으므로 오류 출력

// 다양한 타입
let age: number = 30; // number
let car: string = 'bmw'; // string
let isAdult: boolean = true; // true false가 할당되는 boolean
let a1: number[] = [1, 2, 3]; // 숫자열이 담긴 배열
let a2: Array<number> = [1, 2, 3]; // 숫자열이 담긴 배열
let week1: string[] = ['mon', 'tue', 'wed']; // 문자열이 담긴 배열
let week2: Array<string> = ['mon', 'tue', 'wed']; // 문자열이 담긴 배열

// 튜플(tuple)
let b: [string, number];
b = ['b', 1]; // 입력가능
// b = [1, 'b'] // 입력 불가능
b[0].toLowerCase(); // 0번째 배열은 문자열이기때문에 toLowerCase 사용 가능
// b[1].toLowerCase(); 1번째 배열은 숫자열이기 때문에 toLowerCase 매서드가 없다고 나오기 때문에 사용 불가능

// 보이드(void)와 네버(never)
const sayHello = (): void => {
  console.log('hello');
};
// 보이드는 함수를 입력했을 때 아무것도 반환하지 않는다면 보이드를 사용해주면 됨

const showError = (): never => {
  throw new Error('error');
};
const infinityLoop = (): never => {
  while (true) {
    // do something
  }
};
// 네버는 함수에 항상 에러가 출력되거나 끝나지 않는 함수가 있을때 사용해줄 수 있음

// enum
enum Os {
  window = 3,
  ios = 10,
  Android,
}
// 특정 값만 강제하고싶을 때, 공통점이 있을 때 라고 하는데 이해가 좀 더 필요할 것 같다

// null, undefined
let c: null = null;
let d: undefined = undefined;
