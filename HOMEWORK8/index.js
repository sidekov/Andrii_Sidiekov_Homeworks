// Practical task 8

// 1. Напишіть функцію, яка перевірятиме чи перший символ в рядку написаний в верхньому регістрі, чи ні. 
// 	Приклад роботи:
// upperCase('regexp');
// upperCase('RegExp');
// String's not starts with uppercase character 
// String's starts with uppercase character


          // function upperCase(word){
          //      if ( /[A-Z]/.test(word.charAt(0))){
          //           console.log("String's starts with uppercase character")
          //      } else {
          //           console.log("String's not starts with uppercase character")
          //      };
          // };
          // upperCase ('regexp');
          // upperCase ('RegExp');


// 2. Напишіть функцію, яка приймає рядкові дані і виконує перевірку на їх відповідність емейлу. 
// Валідними вважаються всі символи на різних позиціях.
// 	Приклад роботи:
// checkEmail("Qmail2@gmail.com");
// true

          // function checkEmail(email) {
          // check = /\S+@\S+\.\S+/;
          // console.log(check.test(email));
          // };
          // checkEmail("bla@gmail.com");

// 3. Напишіть регулярний вираз, який знаходитиме в тексті одну літеру d, за якою йде одна чи більше b, 
// за якими одна d. Запам’ятати знайдені b і наступну за ними d.  Враховувати верхній і нижній регістр.
// 	Приклад роботи:   
// Для стрінги "cdbBdbsbz" результат ["dbBd", "bB", "d"]


// let str = "cdbBdbsbz";
// console.log(str.match(/d(b+)(d)/gi));


          // let str = "cdbBdbsbz";
          // let regexp = /d(b+)(d)/gi;
          // let result = regexp.exec(str);
          // console.log(result);


// 4. Напишіть регулярний вираз, який в рядковому тексті 2 підстрічки буде міняти місцями.
// 	Приклад роботи:
// Вхідний рядок    "Java Script"
// Вихід    “Script, Java”


          // const str = 'Java Script';
          // const regExp = /(\w+)\s(\w+)/;
          // const result = str.replace(regExp, '$2, $1');
          // console.log(result);


// 5. Напишіть функцію, яка виконуватиме валідацію номера банківської карти (9999-9999-9999-9999).


          // function checkCard(str) {
          //      let regExp = /\d{4}-\d{4}-\d{4}-\d{4}/g;
          //      let x = regExp.test(str);
          //      if (x) {
          //           console.log('ok')
          //      } else {
          //           console.log('ne ok')
          //      };
          // }
          //      checkCard("9999-9999-9999-9999");


// 6. Напишіть функцію, яка приймає рядкові дані і виконує перевірку на їх відповідність емейлу.
// 	Вимоги:
// •  Цифри (0-9).
// •  Тільки латинські літери в великому (A-Z) і малому (a-z) регістрах.
// •  В тілі емейла допустимі лишеі символи “_” і “-”. Але вони не можуть бути 1-им символом емейлу.
//  •  Символ “-” не може повторюватися.

// checkEmail('my_mail@gmail.com');
// Email is correct!
// checkEmail('#my_mail@gmail.com');
// Email is not correct!
// checkEmail('my_ma--il@gmail.com');
// Email is not correct!


          // function checkEmail(str) {
          // let regExp = /^[^#_-]([A-Za-z0-9_.%+]\-?)+@[A-Z0-9-]+\.[A-Z]{2,4}/ig;
          // if (regExp.test(str)) {
          // console.log("Email is correct!");
          // } else {
          // console.log("Email is not correct!");
          // };
          // };


// 7. Напишіть функцію, яка перевіряє правильність логіна. Правильний логін - рядок від 2 до 10 символів, 
// що містить лише букви та числа, номер не може бути першим. Функція має приймати рядок і знаходити усі 
// числа в цьому рядку, включаючи числа з плаваючою комою (наприклад, 3.4).
// 	Приклад роботи:
// checkLogin('ee1.1ret3');
// true 
// 1.1, 3
// checkLogin('ee1*1ret3');
// false 
// 1, 1, 3


//  function checkLogin(data) {
//      let re = /^[a-zA-Z]{1}[a-zA-Z0-9\.]{1,9}$/;
//      let reqNumber = /[0-9\.]+/g;
//      let resultNumber = data.match(reqNumber);
//      let result = re.test(data);
//      console.log(`${data} is ${result} - ${resultNumber}`);
// };
// checkLogin('ee1.1ret3');
// checkLogin('ee1*1ret3');

