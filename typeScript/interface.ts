let user: object;

user = {
  name: 'webSteak',
  age: 30,
};

// console.log(user.name);
// 아무런 문제가 없어보이는 코드이지만 'object' 형식에 'name' 속성이 없습니다. 라는 오류가 출력된다. interface 를 사용해야한다.

type Score = 'A' | 'B' | 'C' | 'F';

interface User {
  name: string;
  age: number;
  gender?: string;
  readonly birthYear: number;
  [grade: number]: Score;
}

let webSteak: User = {
  name: 'webSteak',
  age: 30,
  birthYear: 1995,
  1: 'A',
  2: 'B',
  3: 'F',
};

console.log(webSteak.name); // 정상적으로 webSteak 가 출력된다.

// 이후에 추가로 성별을 추가하려고 한다면 'User" 형식에 'gender' 속성이 없습니다. 라는 오류가 생긴다.
webSteak.gender = 'male';
// User interface 에 gender 를 추가해도 webSteak 에는 gender 가 없기 때문에 오류가 생긴다. 이것을 방지하기 위해서 있어도 되고 없어도 되는 옵셔널 프로퍼티로 추가해준다(뒤에 ? 붙이기)
// gender 를 gender? 로 수정하니 오류가 사라지는 것을 알 수 있다.

// readonly 를 붙여주면 값을 읽을 수는 있지만 수정은 할 수 없다.
// webSteak.birthYear = 1000; // 읽기 전용 속성이므로 'birthYear'에 할당할 수 없습니다. 라는 오류메시지 출력

// interface 로 함수도 정의해줄 수 있다.

// num1 과 num2 를 더한 값을 반환해주는 interface 를 만들어보자.
interface Add {
  (num1: number, num2: number): number;
}

const add: Add = function (x, y) {
  return x + y;
};
console.log(add(10, 15));

// 나이를 받아서 성인인지 아닌지 boolean 값으로 반환해주는 interface 를 만들어보자.
interface isAdult {
  (age: number): boolean;
}

const aa: isAdult = (age) => {
  return age > 19;
};

// interface 로 클레스도 정의해줄 수 있다.
interface Car {
  color: string;
  wheels: number;
  start(): void;
}

interface Toy {
  name: string;
}

class Bmw implements Car {
  color;
  wheels = 4;
  constructor(c: string) {
    this.color = c;
  }
  start(): void {
    console.log('go...');
  }
}

const bb = new Bmw('green');
console.log(bb);
bb.start();

interface ToyCar extends Car, Toy {
  price: number;
}

class CC implements ToyCar {
  price;
  color;
  wheels;
  name;
  constructor(p: number, c: string, w: number, n: string) {
    this.price = p;
    this.color = c;
    this.wheels = w;
    this.name = n;
  }
  start(): void {
    console.log('go');
  }
}

const cc = new CC(10000, 'white', 4, 'hi');
console.log(cc);
