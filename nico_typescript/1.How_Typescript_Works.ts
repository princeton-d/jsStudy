const nico = {
  nickname: 'nick',
};
// nico.hello() -> '{ nickname: string; }' 형식에 'hello' 속성이 없습니다.

// [1, 2, 3, 4] + false -> '+' 연산자를 'number[]' 및 'boolean' 형식에 적용할 수 없습니다.

function divide(a, b) {
  return a / b;
}
// divide('hello'); -> 2개의 인수가 필요한데 1개를 가져왔습니다.

const player = {
  age: 12,
};
// player.age = false -> 'boolean' 형식은 'number' 형식에 할당할 수 없습니다.
