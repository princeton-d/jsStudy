const numbers: readonly number[] = [1, 2, 3, 4];
// numbers.push(1); -> 'readonly number[]' 형식에 'push' 속성이 없습니다. 즉 읽기전용이라서 추가를 해줄 수 없음

const player: [string, number, boolean] = ['webSteak', 2, true];

let a4: undefined = undefined;
let b4: null = null;
const c4: any[] = [1, 2, 3, 4];
const d4: any = true;
// console.log(c4 + d4); -> 1,2,3,4true any 는 우리를 보호해주지 않는다.
