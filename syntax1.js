/*
javascript 데이터 타입:
  Number
  String
  Boolean
  Array
  Object
*/
//Number
console.log(1+1);
console.log(4-1);
//String
//'1', "1"과 같이 표현
console.log('1'+'1')  //결합 연산자
var str = '가나다라마바사 아자차카 타파하 abcd efg hijk lmnop qrs tuv wxyz';
console.log(str.length);


//Variable 변수
a=1;   //대입 연산자
console.log(a);
a=2;
console.log(a);

//Template literal
//줄바꿈
// 아래는 에러
// var str = '가나다라마바사
// 아자차카 타파하 abcd efg hijk lmnop qrs tuv wxyz';
var str = '가나다라마바사 \
아자차카 타파하 abcd efg hijk lmnop qrs tuv wxyz';  //출력은 줄바꿈이 되지 않고 출력됨
console.log(str)

//개행문자를 넣어주면됨
var str = '가나다라마바사 \n\
\n아자차카 타파하 abcd efg hijk lmnop qrs tuv wxyz';

console.log(str)
// 이게 불편하니까 템플릿 리터럴을 사용
// `` ->템플릿의 시작과 끝을 담당.
var name = '1234';
var str =  `가나다라마바사 ${name}


아자차카 타파하 abcd efg hijk lmnop qrs tuv wxyz`; //템플릿쓰면 줄바꿈도 그대로 적용
//즉 템플릿 리터럴을 쓰면 복잡한 기호 없이 내가 원하는대로 출력이 가능
console.log(str);
