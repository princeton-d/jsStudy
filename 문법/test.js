/**
 * 값에 의한 전달
 * score 에 80을 할당하고, copy에 score 를 할당하면 모두 80이라는 값을 출력한다.
 * 여기서 score 의 값을 100으로 재할당을 한다면 copy 의 값은 어떻게 될까?
 * 정답은 100이 아니라 80이 출력된다.
 * copy 에 score 를 할당할 때 score 에 있는 80이라는 원시타입 값을 평가한 다음에 그 평가한 값을 전달하기 때문이다. score 자체를 전달하는게 아니라 score 에 평가된 값을 원시타입으로 전달하기 때문이다!
 * 즉 score 를 전달했다면 score 가 바뀌면 copy 도 변경이 되겠지만 그것이 아니라 score 를 평가한 원시타입을 전달했기 때문에 score 가 바뀌어도 copy 에는 변경이 일어나지 않는 것이다.
 */
function 값에_의한_전달() {
  var score = 80;
  var copy = score;

  console.log(score);
  console.log(copy);

  score = 100;
  console.log(score);
  console.log(copy);
}

/**
 * str 의 타입을 typeof 로 보니 string 즉 원시타입인 것을 것을 확인할 수 있다.
 * 이상한 부분이 있다. 분명 str 은 원시 타입인 string 타입인데 어떻게 객체에서 사용할 수 있는 메서드들을 사용할 수 있을까?
 * string 타입은 프로퍼티나 메서드를 사용할 때 일시적으로 객체를 하나 만들어준다. 그래서 객체에서 사용하는 프로퍼티나 메서드를 사용할 수 있게 되고, 사용이 끝나면 이 객체도 사라지게 된다.
 * 원시타입은 최대한 가벼운 상태를 유지하고 있다가 객체의 프로퍼티나 메서드가 필요할때 객체로 래핑해줘서 사용해주면 작업이 훨씬 수월해지고 편해질 여지가 있으니 필요할때만 객체로 만들어서 사용해주고 삭제한다면 가벼운 원시타입과 작업의 편의성을 다 같이 챙길 수 있어서 이렇게 작동한다고 볼 수 있다.
 */
function string이_객체인_이유() {
  const str = "string??";
  console.log(typeof (str));
  console.log(str[0], str.toUpperCase(), str.length);
  const strObj = new String(str)
  console.log(strObj)
}

function 깊은_복사와_얕은_복사() {
  const obj1 = { x: { y: 1 } };
  const obj2 = { ...obj1 }
  console.log(obj1)
  console.log(obj2)
}

/**
 * 아래와 같은 함수를 만들어서 실행해보면 add is not defined 라는 오류가 발생한다.
 * 우리가 평소에 사용하는 function add(x, y) { console.log(x + y) } 라는 함수를 add(x, y) 이렇게 호출할 수 있는 이유는 저 add 자체가 식별자가 되는 것이 아니라, 자바스크립트엔진이 암묵적으로 add 라는 식별자를 만들어주기 때문에 사용할 수 있는것이었다.
 */
function 함수_이름은_함수_식별자가_아니다() {
  const realAdd = function add(x, y) {
    console.log(x + y);
  };
  add(1, 2);
}

/** 화살표 함수를 사용해서 한 줄에 객체를 리턴하길 원한다면 소괄호로 감싸주세요~ */
function 객체를_리턴하는_함수() {
  const returnObj = (one, two) => ({ one, two })
  console.log(returnObj('객', '체'))
}

/**
 * func2 함수 내부에 func1 함수가 있다.
 * func2 함수 내부에 있는 func1 함수는 func2 함수 내부에서 선언한 지역레벨 스코프를 가지는 함수이기 때문에 전역 스코프에 있는 func1 함수에 영향을 받지 않고 지역레벨에서 사용이 된다.
 */
function 전역_로컬_스코프_함수() {
  function func1(props) {
    console.log(props + '글로벌 스코프')
  }

  function func2(props) {
    function func1(props) {
      console.log(props + '로컬 스코프')
    }
    func1(props)
  }
  func1('func1 호출: ')
  func2('func2 호출: ')
}

/**
 * 함수가 아닌 코드블럭 내부에 있는 var 는 지역레벨 스코프라고 생각하는 것과 달리 전역레벨까지 영향을 미친다.
 * let 과 const 는 함수를 포함한 코드블럭 내부에서도 지역레벨 스코프처럼 작동하지만 var 는 작동하지 않으니 알고는 있되 되도록이면 사용하지 않는 것이 오류를 최소화할 수 있는 방법일 것이다.
 */
function var_의_함정() {
  var a = 10
  const b = 10

  if (true) {
    var a = 100
    const b = 100
  }
  console.log(a)
  console.log(b)
}

/**
 * 자신이 호출되는 시점에서 상위 스코프가 결정되는 것이 아니라 자신이 선언되는 시점에서 스코프가 결정된다.
 * 아래 예제는 steak 함수가 web 함수 내부에서 호출되었기 때문에 '난 지역이에요~'가 출력될 수도 있다고 생각할 수 있지만, 상위스코프는 호출한 시점이 아니라 선언한 시점에서 결정되기 때문에 다른 함수의 몸체 내부에서 호출이 되었다고 해도 선언될 시점의 상위스코프를 그대로 유지한다.
 */
function 상위_스코프_결정_방식() {
  const x = '난 전역이에요~'

  function web() {
    const x = '난 지역이에요~'
    steak()
  }

  function steak() {
    console.log(x)
  }

  web()
  steak()
}

function 클래스는_함수인가() {
  class Test {
    constructor(one, two) {
      this.one = one;
      this.two = two;
    }
  }

  const test = new Test(1, 2)
  console.log(typeof (test))

  function Tests(one, two) {
    this.one = one;
    this.two = two;
  }

  const test2 = new Tests(1, 2)
  console.log(typeof (test2))
}

/**
 * 우리가 타입 변환을 위해 자주 사용했던 Number(), String(), Boolean() 타입은 new 생성자를 사용함으로 원시타입이 아닌 객체로 생성할 수 있다.
 */
function new_가_있고_없고의_차이() {
  const num1 = Number('123')
  const num2 = new Number('123')

  console.log(`num1: ${num1}, ${typeof (num1)}`)
  console.log(`num2: ${num2}, ${typeof (num2)}`)
  console.log(num2)

  const str1 = String(123)
  const str2 = new String(123)

  console.log(`str1: ${str1}, ${typeof (str1)}`)
  console.log(`str2: ${str2}, ${typeof (str2)}`)
  console.log(str2)

  const boolean1 = Boolean('false?')
  const boolean2 = new Boolean('false?')

  console.log(`boolean1: ${boolean1}, ${typeof (boolean1)}`)
  console.log(`boolean2: ${boolean2}, ${typeof (boolean2)}`)
  console.log(boolean2)
}

/**
 * 모든 객체는 프로토타입을 가지고 있다.
 */
function 프로토타입() {
  const prototype = {}
  console.dir(prototype)
  console.log(prototype.__proto__) // es6 현재 표준이긴 하지만 권장하지 않는 방법이고 없어질 예정이라고 함.
  console.log(Object.getPrototypeOf(prototype)) // 프로토타입에 점근하려면 이 방법을 사용하는게 좋을거같다.
  prototype.name = 'kim'
  console.log(prototype) // 콘솔로 그냥 객체에 접근해서는 name 의 정보를 다 볼 수 없네
  console.log(Object.getOwnPropertyDescriptor(prototype, 'name')) // name 의 프로토타입을 볼 수 있음
}

function getter_메서드() {
  const person = {
    firstName: 'kim',
    lastName: 'donghyun',
    get fullName() { // 객채의 getter 메서드는 매개 변수를 사용할 수 없다.
      console.log(`${this.firstName} ${this.lastName}이다 이자식아!!`)
      return `${this.firstName} ${this.lastName}이다 이자식아`
    },
    get fullName2() {
      console.log(`이번엔 ${this.lastName} ${this.firstName}이다 이자식아~~`)
    }
  }
  person.fullName
  person.fullName2
}

function setter_메서드() {
  const person = {
    firstName: 'kim',
    lastName: 'donghyun',
    set fullName(x) { // 객체의 setter 매서드는 매개 변수를 하나만 사용할 수 있다
      this.firstName = `${x}아니야~`
      this.lastName = `${x}아니라고~~`
    }
  }
  person.fullName = '안녕' // 객체에서 평범하게 할당한것처럼 보이지만
  console.log(person.firstName, person.lastName) // 결과는 다르다ㅇㅂㅇ
}

/**
 * 코드의 호출 순서 three -> two -> one
 * 호출 스택에 one two three 순으로 쌓이지만 실행 순서는 반대로 실행된다.
 */
function 호출_스택() {
  function one() {
    two();
    console.log('one');
  };

  function two() {
    three();
    console.log('two');
  };

  function three() {
    console.log('three');
  };

  one()
};