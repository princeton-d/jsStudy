let a: unknown;

// let b = a + 1 -> 개체가 '알 수 없는' 형식입니다.
// 지금 a 는 타입을 정확하게 알 수 없는 unknown 이기때문에 타입스크립트는 연산을 허용하지 않는다.

if (typeof a === 'number') {
  let b = a + 1;
}
// if 문 안에서 a 의 타입이 number 인 것을 확인했기 때문에 지금같은 경우에는 타입스크립트가 허용해준다.

// a.toUpperCase() -> 개체가 '알 수 없는' 형식입니다.
// 마찬가지로 허용하지 않는다.

if (typeof a === 'string') {
  a.toUpperCase();
}
// 타입을 확인한다면 사용할 수 있다.

function hello(): void {
  console.log('hello');
}
// void 는 함수가 아무것도 리턴하지 않을때 사용한다. 보통 void를 따로 지정해주지는 않는다. 자동적으로 명시함

// function hello2():never {
//   return 'x' -> 'string' 형식은 'never' 형식에 할당할 수 없습니다.
// }
// never 는 함수가 절대로 리턴을 하지 않아야 하는 상황에 사용한다.
function hello2(): never {
  throw new Error('error!');
} // return 을 사용하지 않고 에러를 발생시킬때 사용함.
