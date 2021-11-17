// function logText<T>(text: T): T {
//   console.log(text);
//   return text;
// }

// logText<string>("하이");
// logText<number>(10);


function logText(text: string | number) {
  console.log(text);
  return text;
}

const a = logText('a');
logText(10);

// 제네릭의 장점좌 타입 추론에서의 이점