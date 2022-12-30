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

const returnObj = (one, two) => ({ one, two })

console.log(returnObj('객', '체'))