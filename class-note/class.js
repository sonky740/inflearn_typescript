// 이전
function Person(name, age) {
  this.name = name;
  this.age = age;
}
var capt = new Person('캡틴', 100);

// 위, 아래 완전 동일한 함수

// ES2015 (ES6)
class Person {
  // 클래스 로직
  constructor(name, age) {
    console.log('생성 되었습니다.');
    this.name = name;
    this.age = age;
  }
}

var seho = new Person('세호', 30); // 생성 되었습니다.
console.log(seho);