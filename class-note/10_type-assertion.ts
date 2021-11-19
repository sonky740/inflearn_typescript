// 타입 단언 - 타입스크립트보다 개발자가 더 잘 알고 있으니 명시하면 넘어감.
var a;
var b = a as string;

// DOM API 조작
var div = document.querySelector('div');
if(div) {
    div.innerText = '';
}