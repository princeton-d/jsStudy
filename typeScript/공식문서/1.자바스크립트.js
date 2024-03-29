// 1. typescript 가 필요한 이유?

// javascript 의 동일 연산자(==)는 인수를 강제로 변환하여 얘기치 않은 동작을 유발한다.
const x = 'ㅁㄴㅇㄹ';

if ('' == 0) {
  console.log(`작동이 되는걸 보니 ('' == 0) 은 참이군요. 근데 왜죠? `);
}
if (1 < x < 3) {
  console.log(`지금 x 의 값은 ${x}인데 이 코드가 작동이 되는걸 보니 이것도 참이군요.`);
}

// javascript 는 또한 존재하지 않는 프로퍼티의 접근을 허용합니다.
const jsObj = { width: 10, height: 15 };
console.log(jsObj.width * jsObj.heigth)
// 위 코드는 NaN 을 반환합니다. 한참을 찾아야 뭐가 문제인지 알 수 있겠어요!

// 대부분의 프로그래밍 언어는 이런 종류의 오류들이 발생하면 오류를 표출해주고, 일부는 코드가 실행되기 전인 컴파일 중에 오류를 표출해줍니다.
// 작은 프로그램을 작성할 때에는, 이런 이상한 점들이 화를 돋구지만 관리는 가능합니다.
// 그러나 수백 또는 수천 줄의 어플리케이션들을 작성할 때에는, 이러한 부분들은 심각한 문제입니다.