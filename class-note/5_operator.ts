// 유니온 타입: |

var seho: string | number | boolean;
function logMessage(value: string | number) {
  if (typeof value === "number") {
    value.toLocaleString();
  }
  if (typeof value === "string") {
    value.toString();
  }
  throw new TypeError("value must be string or number");
}

logMessage("hello");
logMessage(100);

interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

// Developer 와 Person의 모든 속성이 아닌 공통 속성만 가능.
function askSomeone(someone: Developer | Person) {
  someone.name;
  // someone.skill; // error
  // someone.age; // error
}
askSomeone({name: '디벨로퍼', skill: '웹 개발'});
askSomeone({name: '캡틴', age: 100});

// intersection
function askSomeone2(someone: Developer & Person) {
  someone.name;
  someone.skill;
  someone.age;
}
askSomeone2({name: '디벨로퍼', skill: '웹 개발', age: 100});

var seho: string | number | boolean;
var capt: string & number & boolean; // = never
