'use strict';
//
// const a ='30';
// if (a >'25'){
//     console.log('first');
// }else{
//     console.log('second');
// }
// const b=10;
// if (b!==9){
//     console.log('Верно')
// }else{
//     console.log('Не Верно')
// }
//
//
//
// const userName = prompt('Введите ваше имя!')
//
// if (userName === 'Daniel'){
//     console.log('Здравствуйте Даниэль')
// }else if (userName === 'princess'){
//     console.log('инетересное имя)')
// }
// else {
//     console.log('Кто вы такой?')
// }
//
//
//
// const weeksArray =['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
//
// weeksArray [0] = 'Monday';
// weeksArray [1] = 'Tuesday';
// weeksArray [2] = 'Wednesday';
// weeksArray [3] = 'Thursday';
// weeksArray [4] = 'Friday';
// weeksArray [5] = 'Saturday';
// weeksArray [6] = 'Sunday';
//
// console.log( weeksArray[2]);
// console.log(weeksArray[5]);
//
//
// const userFilm = prompt('Какой ваш любимый фильм?',''),
//     userMusic = prompt('Какая ваша любимая музыка?',''),
//     userHobby = prompt('Какое ваше любимое хобби?','');
//
//
// const userInfo ={
//     film:userFilm,
//     music:userMusic,
//     hobby:userHobby
// };
//
//
// console.log();
// console.log(userInfo);

const Questions =prompt()
switch (Questions){
    case 'Какой ваш любимый фильм?': console.log('Legend')
        break;
    case 'Какая ваша любимая музыка?': console.log('La La Life')
        break;
    case 'Какое ваше любимое хобби?': console.log('Sport')
        break;
    default:
        console.log('Default')
}