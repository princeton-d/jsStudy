// typescript 의 타입 추론
let a = 'hello';
a = 'bye';
// a = 1 -> 'number' 형식은 'string' 형식에 할당할 수 없습니다.

// let b: boolean = 'x' -> 'string' 형식은 'boolean' 형식에 할당할 수 없습니다.
let b: boolean = false; // boolean 타입을 할당해주면 아무런 문제가 없다.

let c = [1, 2, 3];
// c.push('1') -> 'string' 형식의 인수는 'number' 형식의 매개 변수에 할당될 수 없습니다.

let cc: number[] = [];
cc.push(1);
// cc.push('1') -> 'string' 형식의 인수는 'number' 형식의 매개 변수에 할당될 수 없습니다.
