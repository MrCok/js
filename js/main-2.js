let userObj = {
    firstName: 'Jhon',
    age: 25,
    lastName: 'Job',
    fullName() {
        return userObj.firstName + ' ' + userObj.lastName;
      }
};

console.log(userObj.fullName());
// №3


function defUpperStr(str) {
    return (str || 'another text').toUpperCase();
  }
  console.log(defUpperStr('My text'));
  console.log(defUpperStr());

// №4
function evenFn(n) {
    let arr = [];
    for (let i = 1; i <= n; i++) if (i % 2 === 0) arr.push(i);
    return arr;
  }
  console.log(evenFn(10)); 
  console.log(evenFn(15)); 
  console.log(evenFn(20));
// №5

function weekFn(cond) {
    let str = '';
  
    switch (cond) {
      case 1:
        str = 'Понедельник';
        break;
      case 2:
        str = 'Вторник';
        break;
      case 3:
        str = 'Среда';
        break;
      case 4:
        str = 'Четверг';
        break;
      case 5:
        str = 'Пятница';
        break;
      case 6:
        str = 'Суббота';
        break;
      case 7:
        str = 'Воскресенье';
        break;
      default:
        str = null;
    }
  
    return str;
  }
  
  console.log(weekFn(1));
  console.log(weekFn(5));
  console.log(weekFn(100));

//   №6

