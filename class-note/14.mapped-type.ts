type Heroes = "Hulk" | "Capt" | "Thor";
type HeroesAges = { [K in Heroes]: number };

const ages: HeroesAges = {
    Hulk: 33,
    Capt: 100,
    Thor: 1000
}

// for in 반복문 코드
// var arr = ['a', 'b', 'c'];
// for (var key in arr) {
//     return arr[key];
// }
