let user: object;

user = {
  name: 'webSteak',
  age: 30,
};

// console.log(user.name);
// 아무런 문제가 없어보이는 코드이지만 'object' 형식에 'name' 속성이 없습니다. 라는 오류가 출력된다. interface 를 사용해야한다.

interface User {
  name: string;
  age: number;
  gender?: string;
  readonly birthYear: number;
}

let webSteak: User = {
  name: 'webSteak',
  age: 30,
  birthYear: 1995,
};

console.log(webSteak.name); // 정상적으로 webSteak 가 출력된다.

// 이후에 추가로 성별을 추가하려고 한다면 'User" 형식에 'gender' 속성이 없습니다. 라는 오류가 생긴다.
webSteak.gender = 'male';
// User interface 에 gender 를 추가해도 webSteak 에는 gender 가 없기 때문에 오류가 생긴다. 이것을 방지하기 위해서 있어도 되고 없어도 되는 옵셔널 프로퍼티로 추가해준다(뒤에 ? 붙이기)
// gender 를 gender? 로 수정하니 오류가 사라지는 것을 알 수 있다.

// readonly 를 붙여주면 값을 읽을 수는 있지만 수정은 할 수 없다.
// webSteak.birthYear = 1000; // 읽기 전용 속성이므로 'birthYear'에 할당할 수 없습니다. 라는 오류메시지 출력
