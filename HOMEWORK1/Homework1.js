// Andrii's Sidiekov Practical 1

// Task 1.   Напишіть скріпт всередині HTML-документу, який виводить на екран ваше імя за допомогою функції alert().

                // <!DOCTYPE html>
                // <html lang="en">
                //     <head>
                //         <meta charset="UTF-8">
                //         <title>Andrii's Sidekov Homework 1</title>
                //     </head>
                // <body>
                //     <script>
                //             let name = "Andrii";
                //             alert (name);
                //     </script>
                // </body>
                // </html>


// Task 2.  Напишіть скріпт в зовнішньому файлі, який виводить в консоль ваше прізвище. Підключіть створений файл до HTML-документу.

                // <!DOCTYPE html>
                // <html lang="en">
                //     <head>
                //         <meta charset="UTF-8">
                //         <title>Andrii's Sidekov Homework 1</title>
                //     </head>
                // <body>
                //     <script src="Homework1.js"></script>
                // </body>
                // </html>


                // let name = "Andrii";
                // console.log(name);

/* Task 3.  a) оголосіть дві змінні;
            b) запишіть у змінні будь-які значення;
            c) виведіть на екран значення змінних;
            d) скопіюйте значення однієї змінної в іншу;
            e) виведіть на екран значення змінних. */

                // let lastName;
                // let age;
                // lastName = "Sidiekov";
                // age = 31;
                // console.log("Призвище",lastName, "Вік", age);
                // lastName = age;
                // console.log("Призвище", lastName);
                // console.log("Вік", age);


// Task 4. Створіть об’єкт з 5-ма наступними властивостями: “String”, “Number”, “Boolean”, “Undefined”, “Null”. Значення кожної властивості повинно відповідати відповідному примітивному типу даних.
	
                // const user = {
                //     name: "Andrii",        //string
                //     age: 33,               //number
                //     married: false,        //boolean
                //     last: undefined,       //Undefined
                //     nullVariable: null     //null/object
                //             }
                // console.log(typeof user.name);
                // console.log(typeof user.age);
                // console.log(typeof user.married);
                // console.log(typeof user.last);
                // console.log(typeof user.nullVariable);

// Task 5. Використовуючи функцію confirm() задайте користувачу питання про досягнення ним повнолітнього віку. Результат запишіть в змінну isAdult і виведіть в консоль.

                // let isAdult = confirm("Вам більше 18ти років?");
                // console.log(isAdult);

/* Task 6. В зовнішньому файлі напишіть скріпт, в якому оголосіть змінні, для збереження таких даних:
        - ваше ім’я
        - ваше прізвище
        - навчальна група
        - ваш рік народження.
Присвойте змінним відповідні значення. 
Створіть та проініціалізуйте логічну змінну для збереження вашого сімейного стану. 
Визначте тип кожної змінної.
Виведіть значення змінних в консоль, відповідно до їх типу, в такому порядку: Number, Boolean, String. 
Створіть 2 довільних змінних типу Null і Undefined відповідно. Виведіть їх тип в консоль. */

                // let name;
                // let lastName;
                // let group;
                // let birthYear;
                // name = "Andrii";
                // lastName = "Sidiekov";
                // group = 1;
                // birthYear = 1989;
                // let married = false;
                // console.log(typeof group);           //number        є якась команда, що сортує за типом, чи треба відсортувати вручну?
                // console.log(typeof birthYear);       //number
                // console.log(typeof married);         //boolean
                // console.log(typeof name);            //string
                // console.log(typeof lastName);        //string
                // let status;                          //undefined
                // let debt = null;                     //null
                // console.log(status);
                // console.log(debt);

// Task 7. За допомогою функції prompt() напишіть скріпт, який послідовно запитує в користувача логін, емейл та пароль, і виводить на екран повідомлення із введеними даними. Наприклад “Dear User, your email is usermale@gmail.com, your password is qwerty”.

                // let login = prompt("Enter login", "for ex.: John");
                // alert("Dear user, your login is " + login);
                // let mail = prompt ("Enter e-mail", "for ex.:xxx@gmail.com");
                // alert("Dear user, your e-mail is " + mail);
                // let pass = prompt ("Enter password", "only letters and numbers");
                // alert("Dear user, your passwors is "+ pass);


// Task 8. Напишіть скріпт, який вираховує кількість секунд в годині, в добі, в місяці, записує результати в відповідні змінні, і виводить їх значення на екран.

                // let sec=1;
                // let hour;
                // let day;
                // let month;
                // hour = sec*60*60;
                // console.log("Секунд у годині: " + hour);
                // alert("Секунд у годині: " + hour);
                // day = hour*24;
                // console.log("Секунд у добі: " + day);
                // alert("Секунд у добі: " + day);
                // month = day*31;
                // console.log("Секунд у місяці: " + month);
                // alert("Секунд у місяці: " + month);