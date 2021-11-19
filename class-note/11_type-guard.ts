interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function introduce(): Developer | Person {
    return {name: 'Tony', age: 33, skill: 'Iron Making'};
}
var tony = introduce();
// console.log(tony.skill);

// if((tony as Developer).skill) {
//     console.log((tony as Developer).skill);
// } else if ((tony as Person).age) {
//     console.log((tony as Person).age);
// }

function isDeveloper(target: Developer | Person): target is Developer {
    return (target as Developer).skill !== undefined;
}

if(isDeveloper(tony)) {
    tony.skill
} else {
    tony.age
}