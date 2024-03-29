/*
7.3 비교 연산자
  비교 연산자는 좌항과 우항의 피연산자를 비교한 다음 그 결과를 불리언 값으로 반환한다.

    7.3.1 동등/일치 비교 연산자
      동등 비교 연산자와 일치 비교 연산자는 좌항과 우항의 피연산자가 같은 값으로 평가되는지 비교해 불리언 값을 반환한다.
        비교 연산자: ==(동등 비교), ===(일치 비교), !=(부동등 비교), !==(불일치 비교)

      동등 비교(==) 연산자는 좌항과 우항의 피연산자를 비교할 때 먼저 암묵적  타입 변환을 통해 타입을 일치시킨 후 같은 값인지 비교한다.
        // 동등 비교
        5 == 5 // true
        // 타입은 다르지만 암묵적 타입 변환을 통해 타입을 일치시키면서 동등해진다.
        5 == '5' // true

      하지만 동등 비교는 편리할 수도 있지만 결과를 정확하게 예측하기 어렵고 실수를 할 수도 있다.
        // 동등 비교를 통해 원하지 않은 결과가 나올 수 있다.
        '0' == '' // false
        0 == '' // true
        0 == '0' // true
        false == 'false' // false
        false == '0' // true
        false == null // false
        flase == undefined // false
      
      일치 비교 연산자는 좌항과 우항의 피연산자가 타입도 같고 값도 같은 경우에 한하여 true 를 반환한다.
      암묵적 타입 변환을 하지 않고 값을 비교한다.
        // 일치비교
        5 === 5 // true
        //암묵적 타입 변환을 하지 않고 값을 비교한다.
        5 === '5' // false
        // 일치 비교 연산자에서 조심해야 할 것은 NaN 이다.
        NaN === NaN // false

      NaN 은 자신과 일치하지 않는 유일한 값이다. 따라서 숫자가 NaN 인지 조사하려면 Number.isNaN 을 사용한다.
        Number.isNaN(NaN) // true
        Number.isNaN(10) // flase
        Number.isNaN(1 + undefined) // true

      숫자 0도 주의해야 한다. 자바스크립트에는 양의 0과 음의 0이 있는데 이를 비교해보면 전부 true 를 반환한다.
        0 === -0 // true
        0 == -0 // true

      Object.is 메서드를 이용해서 비교할 수 있다.
        -0 === +0 // true
        Object.is(-0, +0) // false
        NaN === NaN // false
        Object.is(NaN, NaN) // true

      부동등 비교 연산자(!=) 와 불일치 비교 연산자(!==)는 각각 동등 비교(==) 연산자와 일치 비교(===) 연산자의 반대 개념이다.
        // 부동등 비교
        5 != 8 // true
        5 != 5 // false
        4 != '5' // false
        // 불일치 비교
        5 !== 8 // true
        5 !== 5 // false
        5 !== '5' // true
    
    7.3.2 대소 관계 비교 연산자
      대소 관계 비교 연산자는 피연산자의 크기를 비교하여 불리언 값을 반환한다.
        대소 비교 관계 연산자: >, <, >=, <=
        // 대소 관계 비교
        5 > 0 // true
        5 > 5 // false
        5 >= 5 // true
        5 <= 5 // true
*/