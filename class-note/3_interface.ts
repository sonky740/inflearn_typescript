interface User {
  age: number;
  name: string;
}

// 변수에 활용한 인터페이스
var seho: User = {
  age: 33,
  name: "세호",
};

// 함수에 인터페이스 활용
function getUser(user: User) {
  console.log(user);
}
const capt = {
  name: "캡틴",
  age: 100,
};
getUser(capt);

// 함수의 스펙(구조)에 인터페이스를 활용
interface SumFunction {
  (a: number, b: number): number;
}

var sum: SumFunction;

sum = function (a, b) {
  return a + b;
};

// 인덱싱
interface StringArray {
  [index: number]: string;
}

var arr: StringArray = ["a", "b"];
// arr[0] = 10; // 오류

// 딕셔너리 패턴
interface StringRegexDictionary {
  [key: string]: RegExp;
}

var obj: StringRegexDictionary = {
  // sth: /abc/,
  cssFile: /\.css$/,
  jsFile: /\.js$/,
};

// obj['cssFile'] = 'a' // 오류

Object.keys(obj).forEach(function (value) {});

// 인터페이스 확장
interface Person {
    name: string;
    age: number;
}

interface Developer extends Person{
    language: string;
}

var captain: Developer = {
    name: '캡틴',
    age: 100,
    language: 'ts',
}
