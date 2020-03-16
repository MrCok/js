// var result;
// var age = 20;
// result = age < 18 ? 'ребенок' : age > 45 ? 'пожилой человек' : 'молодой человек';
// console.log(result);

var myNum = 10;
var myStr = 'string';
var myBool = true;
var myArr = [1, 2, 3, 4, 5];
var myObj = new Object();
myObj.first = 'First Name';
myObj.last = 'Last Name';

console.log(myNum);
console.log(myStr);
console.log(myBool);
console.log(myArr);
console.log(myObj);

var decimal2 = myNum.toFixed(2);
console.log(decimal2);
var i = 5;
console.log(i++);
console.log(++i);
console.log(i--);
console.log(--i);

var myTest = 20;
myTest += 50;
console.log(myTest);
myTest -= 40;
console.log(myTest);
myTest *= 15;
console.log(myTest);
myTest /= myNum;
console.log(myTest);
myTest %= 2;
console.log(myTest);

var myPi = Math.PI;
console.log(myPi);
var myRound = Math.round(89.279);
console.log(myRound);
var myRandom = Math.random() * 7;
console.log(myRandom);
var myPow = Math.pow(3, 5);
console.log(myPow);

var strObj = {str: 'Мама мыла раму, рама мыла маму'}
strObj.length = strObj.str.length;
console.log(strObj);

var isRamaPos = strObj.str.indexOf('рама');
console.log(isRamaPos);

var strReplace = strObj.str.replace('мыла', 'моет');
strReplace = strReplace.replace('рама', 'Рама');
strReplace = strReplace.replace('мыла', 'держит');
console.log(strReplace);

console.log('Верхний регистр'.toUpperCase());
console.log('Нижний регистр'.toLowerCase());



