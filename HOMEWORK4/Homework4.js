// Practical task 4

// 1. Реалізуйте функцію calcRectangleArea(width, height), яка приймає 2 параметри ширина прямокутника width і висота прямокутника 
// height і обраховує його площу. Передбачити припинення виконання програми і генерацію винятку у випадку, якщо функції передано 
// не числові параметри.
// Напишіть код, який використовує цю функцію та обробляє можливі виняткові ситуації.


                        // function calcRectangleArea (width, height) {
                        //         let rect = width * height;
                        //                 if (width === undefined || width === NaN || height === undefined || height === NaN) {
                        //                 throw new Error ("Введені значення не є числами");
                        //             } if  (width <= 0 || height <= 0) {
                        //                 throw new Error ("Сторона прямогутника не може дорівнювати 0 або бути відʼємним значенням");
                        //             };
                        //             return rect;
                        // };
                        // try {
                        //     let result = calcRectangleArea();
                        //     // console.log(result);
                        // }
                        // catch (exception) {
                        //     console.log (exception.massage);  // // почему при верных условиях выводится еще и undefined?
                        // }
                        // console.log(calcRectangleArea (5,6));
                        // console.log(calcRectangleArea (-5,6));
                        // console.log(calcRectangleArea (0,6));


// 2. Напишіть функцію checkAge(), яка пропонуватиме юзеру ввести свій вік і генерувати в модальному вікні 
// помилки у випадку, коли: 
// 	- юзер ввів порожню стрічку (наприклад “The field is empty! Please enter your age”), 
// 	- нечислове значення
// 	- вік юзера менше 14 років. 
// В іншому разі юзер отримує доступ до перегляду фільму.
// В блокові catch передбачити виведення назви і опису помилки.


                    // function checkAge (){
                    // let age =  prompt ("Enter your age: ");
                    //         if (isNaN(age)) {
                    //             throw new Error ("Invalid type!_!");
                    //         } else if (age.length === 0) {
                    //             throw new Error ("The field is empty! Please enter your age")
                    //         } else  if (age < 14) {
                    //             throw new Error ("Your age is < 14");
                    //         }
                    //         alert("You can watch the movie");
                    //         return; 
                    //     } 
                    // try {
                    //     checkAge();
                    // }
                    // catch (exception) {
                    //     alert (exception.error + " : " + exception.message);
                    // }


// 3. Створіть клас MonthException, конструктор якого приймає параметр message і ініціалізує поле name 
// значенням 'MonthException'.
// Реалізуйте функцію showMonthName(month), в якій параметр month – це порядковий номер місяця в році. 
// Функція повертає назву місяця відповідно до введеного номера місяця. У випадку некоректного вводу 
// кидається ексепшн у вигляді об’єкта класу MonthException з повідомленням 'Incorrect month number'.
// Напишіть код, який використовує цю функцію, передбачте обробку можливих винятків.
// 	Приклад роботи програми:
// > console.log(showMonthName(5)); 
// May
// > console.log(showMonthName(14)); 
// MonthException Incorrect month number

                    // class MonthException {
                    //     constructor(message){
                    //         this.name = "MonthException";
                    //         this.message = message;
                    //     }
                    // }
                    // function showMonthName(month){
                    //     let monthArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                    // try{
                    //     if (month < 1 || month > 12 ||  isNaN(month)) {
                    //         throw new MonthException ("Incorrect month number");
                    //     }
                    // }
                    // catch (e) {
                    //     console.log (e.name + " " + e.message);
                    // }
                    //     return monthArr[month - 1];
                    // }  
                    // console.log (showMonthName(14)); // почему при неверном значении, выводится еще и undefined?


// 4. Реалізуйте функцію showUser(id), яка приймає параметром користувацьке id і повертає об’єкт, який містить значення переданої id. 
// Також функція викидає помилку у разі якщо введено від’ємне id.
// Реалізуйте функцію showUsers(ids), яка приймає параметром масив користувацьких айді ids, перевіряє з використанням функції 
// showUser() кожен елемент масиву ids на коректність, в разі виключної ситуації виводить повідомлення про помилку. 
// Функція showUsers(ids) повертає масив об’єктів, де значеннями ключів є коректні елементи ids.

// 	Приклад роботи програми:
// showUsers([7, -12, 44, 22]);
// Error: ID must not be negative: -12
// [ {id: 7}, {id: 44}, {id: 22} ]


                    // function showUser (id){
                    //     if (id < 0) {
                    //     throw new Error ("ID не може бути відʼємним");
                    //     } 
                    //     return {id: id};
                    // }
                    // function showUsers (ids){
                    //     let users = [];
                    //     for (let i in ids) {
                    //         try {
                    //             users.push(showUser(ids[i]));
                    //         } catch (e) {
                    //         console.log (e + ": " + ids[i]);
                    //         }
                    //     }   return users;
                    // }
                    // console.log (showUsers([7, -12, 44, 22]));