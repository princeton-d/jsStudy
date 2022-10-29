let a3: number[] = [1, 2];
let b3: string[] = ['i1', 'i2'];
let c3: boolean[] = [true];

type Player = { readonly name: string; age?: number };

/** age? 에 있는 물음표는 값이 있거나 없을 떄 사용하도록 한다. 이 코드는 결과적으로 name 은 반드시 존재하고 age 는 있을 수도 있고 없을 수도 있다. */
const player: { name: string; age?: number } = {
  name: 'nico',
};
const Nico: Player = {
  name: 'nico',
};
const Lynn: Player = {
  name: 'lynn',
  age: 12,
};
// if (player.age < 10) {} -> 개체가 'undefined'인 것 같습니다.
if (player.age && player.age < 10) {
}

function playerMaker(name: string): Player {
  return {
    name: name,
  };
}
const playerMakers = (name: string): Player => ({ name: name });

const nicco = playerMaker('nicco');
nicco.age = 12;
