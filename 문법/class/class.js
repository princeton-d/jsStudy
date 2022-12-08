// 인스턴스 = class로 만들어낸 함수!!

// 클래스 생성하기
class FoodFighter {
  /** constructor는 새롭게 생성되는 class에 상속시켜주는 인자?
   * 같은 것이다. constructor()의 괄호안에서 인자값을 받아오고
   * this.블라블라 를 통해서 상속시켜줄 수 있다. 생성자함수라고
   * 한다!!!!!*/
  name; //이건 없어도 상관없음
  nickname; // 이것도 없어도 무관함
  // field: 기본적인 키값을 입력해둘 수 있다.(이름과 닉네임은 인자를 받아서 할당해주지만 직업은 고정할 수 있음)
  job = 'foodFighter';
  constructor(name, nickname) {
    this.name = name;
    this.nickname = nickname;
  }
  selfIntroduction = () => {
    console.log(`안녕하세요. FoodFighter ${this.name}입니다.
사람들은 저를 ${this.nickname}으로 부르곤 하죠.`)
  }
  // static: 인스턴스에 포함되지 않고 클래스 레벨에서 호출할 수 있는 함수이다.
  static food(food) {
    console.log(`fighting food is ${food}`)
  }
}
// donghyun은 FoodFighter클래스의 인스턴스이다!
const donghyun = new FoodFighter('kimdonghyun', 'samgyeobsal(pork belly)admiral');
donghyun.selfIntroduction();
// 스테틱함수는 class에서 바로 호출이 가능하다. donghyun인스턴스에는 포함되어 있지 않다. (콘솔찍어도 안나옴)
FoodFighter.food('피자');