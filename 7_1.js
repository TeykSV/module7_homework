const userIvanov = function(a) {
    a = {Имя: 'Иван',
    Фамилия: 'Иванов',
    Возраст: '25'}
  for (let key in a) {
    console.log(key+ ': ' + a[key]);
  }
    
   }
  userIvanov();
  
  //"Имя: Иван"
  //"Фамилия: Иванов"
  //"Возраст: 25"
  
 // Либо:
  
  const userIvanov = {
    Имя: 'Иван',
    Фамилия: 'Иванов',
    Возраст: '25'
   }
  const key1 = 'Имя';
  const key2 = 'Фамилия';
  const key3 = 'Возраст';
  console.log(`${key1}: ${userIvanov[key1]}, ${key2}: ${userIvanov[key2]}, ${key3}: ${userIvanov[key3]}`)
  
  //"Имя: Иван, Фамилия: Иванов, Возраст: 25"