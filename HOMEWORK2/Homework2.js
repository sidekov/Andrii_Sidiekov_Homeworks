// // 1. Є такий код:

// let x = 1;
// let y = 2;

// let res1 = // Допишіть код, необхідно використовувати змінні x і y
// console.log(res1); // "12"
// console.log(typeof res1); // "string"

// let res2 = // Допишіть код, необхідно використовувати змінні x і y
// console.log(res2); // "true2"
// console.log(typeof res2); // "string"

// let res3 = // Допишіть код, необхідно використовувати змінні x і y
// console.log(res3); // true
// console.log(typeof res3); // "boolean"

// let res4 = // Допишіть код, необхідно використовувати змінні x і y
// console.log(res4); // NaN
// console.log(typeof res4); // "number"

// Допишіть код, щоб в консолі браузера з'явилися рядки, які написані в коментарях, оперуючи при цьому змінними х і у.

                // let x = 1;
                // let y = 2;

                // let res1 = `${x}` + `${y}`; // Допишіть код, необхідно використовувати змінні x і y
                // console.log(res1); // "12"
                // console.log(typeof res1); // "string"
            //or
                // let res1 = String(x)+y;
                // console.log(res1); // "12"
                // console.log(typeof res1); // "string"

                
                // let res2 = "true" + y; // Допишіть код, необхідно використовувати змінні x і y
                // console.log(res2); // "true2"
                // console.log(typeof res2); // "string"


                // let res3 = x !== y; // Допишіть код, необхідно використовувати змінні x і y
                // console.log(res3); // true
                // console.log(typeof res3); // "boolean"

               
                // let res4 = x*"y";// Допишіть код, необхідно використовувати змінні x і y
                // console.log(res4); // NaN
                // console.log(typeof res4); // "number"


// 2. Користувач вводить число (використовуйте prompt ()). Необхідно перевірити чи є введене число
// 	a) парним додатним;
// 	b) кратним числу 7.
// Результат перевірки вивести в консоль.

                // let num = prompt ("Enter a number",);
                // let pair = num % 2;
                // let check_a = num > 0 && pair === 0;
                
                //     if (check_a === true) {
                //         console.log(`Число ${num} парне додатнє`);
                //     } 
                //     else {
                //         console.log(`Число ${num} НЕ парне додатнє`);
                //     };
                // let check_7 = num % 7;
                // let check_b = check_7 === 0;
                //     if (check_b === true) {
                //         console.log(`Число ${num} кратне числу 7`);
                //     } 
                //     else {
                //         console.log(`Число ${num} НЕ кратне числу 7`);
                //     };


// 3. Створіть порожній масив;
// 1) У перший елемент масиву запишіть будь-яке число;
// 2) У другий елемент масиву запишіть будь-який рядок;
// 3) У третій елемент масиву запишіть будь-яке логічне значення;
// 4) У четвертий елемент масиву запишіть значення null;
// 5) Виведіть на екран число елементів, яке зберігається в масиві;
// 6) Запитайте у користувача ввести будь-яке значення і запишіть це значення в п'ятий елемент масиву;
// 7) Виведіть на екран п'ятий елемент масиву.
// 8) Видаліть 1-ий елемент масиву і виведіть масив на екран.


                // const arr = new Array ();
                // arr[0] = 0;
                // arr[1] = "Hello";
                // arr[2] = true;
                // arr[3] = null;
                // alert (`Число елементів в масиві: ${arr.length}`);
                // let fifth = prompt("Введіть будь яке значення");
                // arr[5] = fifth;
                // alert (`Пʼятий елемент масиву є: ${arr[5]}`);
                // arr.shift();
                // alert (arr);


// 4. Напишіть програму, яка об’єднує всі наявні елементи масиву в стрічку і розділяє їх символом “*”.
// Початковий масив:
// let cities = ["Rome", "Lviv", "Warsaw"]; 
// Результат:
// "Rome*Lviv*Warsaw"

                //  let cities = ["Rome", "Lviv", "Warsaw"]; 
                //  console.log(`${cities[0]}*${cities[1]}*${cities[2]}`);     //нужно в ручную выводить каждый элемент массива?

//or

                // console.log(cities.join("*"));

// 5. Використовуючи функцію prompt() задайте користувачу питання про досягнення ним повнолітнього віку. Результат запишіть в змінну isAdult. В залежності від отриманого значення виведіть відповідне повідомлення про статус особи. Наприклад: при виконанні умови вік більше 18 вивести “Ви досягли повнолітнього віку”. Якщо вік менше 18 років вивести “Ви ще надто молоді”, 


                // let isAdult = prompt ("Ви досягли повнолітнього віку? Введіть будь ласка ваш вік");
                // if (isAdult >=18) {
                //     alert("Ви досягли повнолітнього віку");
                // }   else {
                //     alert("Ви ще надто молоді");
                // }

//or

                // let isAdult = prompt ("Ви досягли повнолітнього віку? Введіть будь ласка ваш вік");
                // result = (isAdult >=18) ? alert("Ви досягли повнолітнього віку") : alert("Ви ще надто молоді");

// 6. Користувач вводить три довжини сторін трикутника (використовуйте prompt () три рази для введення кожної сторони).
// Необхідно 
// 	a) визначити і вивести в консоль площу трикутника 
// 	b) перевірити чи цей трикутник є прямокутним і вивести в консоль результат перевірки.
// Здійснювати перевірку чи введені користувачем значення коректні, в іншому випадку вивести 'Incorrect data‘. Результат обчислення площі трикутника виводити в консоль з точністю 3 знаки після коми (наприклад:  8.42355465 =>  8.424).  


                // let side_a = prompt("Введіть довжину гіпотенузи а трикутника");
                // let side_b = prompt("Введіть довжину катета b трикутника");
                // let side_c = prompt("Введіть довжину катета c трикутника");

                // let correct_num = side_a > 0 && side_a != NaN &&
                //                   side_b > 0 && side_b != NaN &&
                //                   side_c > 0 && side_c != NaN;
                //     if (correct_num === false) {
                //         alert ("Incorrect data");
                // }   else {
                //         let p = (+side_a + +side_b + +side_c)/2;                        //змінюємо тип змінної на number і підсумовуємо
                //         let s = Math.sqrt (p*(p - side_a)*(p - side_b)*(p - side_c));   //квадратний корень
                //         console.log("Площа трикутника = " + s.toFixed(3));              //округляем до 3 знака   
                //     if ((side_a**2).toFixed(3) === (side_b**2 + side_c**2).toFixed(3)) {
                //         console.log ("Трикутний прямокутний");
                // }   else {
                //         console.log ("Трикутник НЕ прямокутний");
                // }
                // };



// 7. Написати умовну конструкцію, яка в залежності від часу доби виводитиме відповідне привітання. Потрібно отримати реальний час доби із системи. Зробити 2 способами через 2 різних умовних оператора.
// В діапазоні годин 23-5 – має виводитися привітання “Доброї ночі”
// В діапазоні годин 5-11 – має виводитися привітання “Доброго ранку”
// В діапазоні годин 11-17 – має виводитися привітання “Доброго дня”
// В діапазоні годин 17-23 – має виводитися привітання “Доброго вечора”.


                // Data = new Date();
                // Hour = Data.getHours();
                // Minutes = Data.getMinutes();
                // Seconds = Data.getSeconds();

                //     if (Hour >23 && Hour <5) {
                //         console.log("Доброї ночі. Поточний час: " + Hour + ":" + Minutes + ":" + Seconds);
                // } else if (Hour >5 && Hour <= 11) {
                //         console.log("Доброго ранку. Поточний час: " + Hour + ":" + Minutes + ":" + Seconds);
                // }   else if (Hour >11 && Hour <= 17) {
                //         console.log("Доброго дня. Поточний час: " + Hour + ":" + Minutes + ":" + Seconds);
                // }   else if (Hour >17 && Hour <= 23) {
                //         console.log("Доброго вечора, ми з України! Поточний час: " + Hour + ":" + Minutes + ":" + Seconds);
                // }   else;


   
                // Data = new Date();
                // Hour = Data.getHours();
                // Minutes = Data.getMinutes();
                // Seconds = Data.getSeconds();

                // const output = {
                //     Hour_night: `Доброї ночі! Поточний час: ${Hour}:${Minutes}:${Seconds}`,
                //     Hour_morningL: `Доброго ранку! Поточний час: ${Hour}:${Minutes}:${Seconds}`,
                //     Hour_afternoon: `Доброго дня! Поточний час: ${Hour}:${Minutes}:${Seconds}`,
                //     Hour_evening: `Доброго Вечора! Поточний час: ${Hour}:${Minutes}:${Seconds}`,
                // }
                // switch (Hour) {
                //     case 01:
                //         console.log(output.Hour_night); break;
                //     case 02:
                //         console.log(output.Hour_night); break;                        
                //     case 03:
                //         console.log(output.Hour_night); break;
                //     case 04:
                //         console.log(output.Hour_night); break;
                //     case 05:
                //         console.log(output.Hour_morning); break;
                //     case 06:
                //         console.log(output.Hour_morning); break;
                //     case 07:
                //         console.log(output.Hour_morning); break;
                //     case 08:
                //         console.log(output.Hour_morning); break;                        
                //     case 09:
                //         console.log(output.Hour_morning); break;
                //     case 10:
                //         console.log(output.Hour_morning); break;
                //     case 11:
                //         console.log(output.Hour_afternoon); break;
                //     case 12:
                //         console.log(output.Hour_afternoon); break;
                //     case 13:
                //         console.log(output.Hour_afternoon); break;
                //     case 14:
                //         console.log(output.Hour_afternoon); break;                        
                //     case 15:
                //         console.log(output.Hour_afternoon); break;
                //     case 16:
                //         console.log(output.Hour_afternoon); break;
                //     case 17:
                //         console.log(output.Hour_evening); break;
                //     case 18:
                //         console.log(output.Hour_evening); break;
                //     case 19:
                //         console.log(output.Hour_evening); break;
                //     case 20:
                //         console.log(output.Hour_evening); break;
                //     case 21:
                //         console.log(output.Hour_evening); break;
                //     case 22:
                //         console.log(output.Hour_evening); break;
                //     case 23:
                //         console.log(output.Hour_night); break;
                //     case 00:
                //         console.log(output.Hour_night); break;
                //     default: ;
                // }

