// type은 확장이 불가, 가급적 interface로 선언

interface Person1 {
  name: string;
  age: number;
}

type Person2 = {
  name: string;
  age: number;
};

var seho: Person2 = {
  name: "세호",
  age: 30,
};

type MyString = string;
var str: MyString = "hello";

type Todo = {
  id: string;
  title: string;
  done: boolean;
};

function getTodo(todo: Todo) {}
