// 1. Заданий масив з елементами [2, 3, 4, 5]. За допомогою циклу for знайдіть добуток елементів цього масиву. 
//Також реалізуйте завдання через while.
	

                    // function arrMult1(){
                    //     arr = [2, 3, 4, 5];
                    //         let mult = 1;
                    //     for (let i of arr){
                    //             mult *= i;
                    //     };
                    //     console.log(mult);
                    // };
                    // arrMult1();


                    // function arrMult2(){
                    //     arr2 = [2, 3, 4, 5];
                    //         let c = 0;
                    //         let mult2 = 1;
                    //     while(c < arr2.length){
                    //             mult2 *= arr2[c];
                    //             c++;
                    //     };                   
                    //     console.log(mult2);
                    // };

                    // arrMult2();


// 2. Напишіть JavaScript for цикл, який буде ітеруватися від 0 до 15. Для кожної ітерації він перевірятиме, 
//чи є поточне число парним чи непарним, і відображатиме повідомлення на екрані.
// Sample Output: 
// "0 is even" 
// "1 is odd" 
// "2 is even" 

                    // for (i = 0; i <=15; i++) {
                    //     (i % 2 == 0) ? console.log(i + " is even") : console.log(i + " is odd");
                    // };


// 3. Напишіть функцію randArray(k), яка заповнюватиме масив k випадковими цілими числами.
// Випадкові числа генеруються із діапазону 1-500.
// Sample Output:
// randArray(5);  // [399,310,232,379,40]

 
                    // function randArray(k) {
                    //     arr =[];
                    //     for(let i=0; i<k; i++){
                    //         arr[i]=Math.floor(Math.random()*499+1);
                    //     };
                    //         console.log(arr);
                    //     };
                    // randArray(5);

// 4. Напишіть функцію raiseToDegree(a,b), яка повертає результат піднесення числа a до степеня b. 
//Функція працює тільки з цілими числами. Реалізувати інтерфейс введення чисел a, b з клавіатури.

// Sample Output:
// raiseToDegree(3, 4);  // 81


                    // raiseToDegree(prompt("Введіть ціле число"), prompt("Введіть степень"));
                    // function raiseToDegree(a, b) {
                    //     if (Number.isInteger(+a) && Number.isInteger(+b)) {
                    //         result = a**b;
                    //         alert(result);
                    //         console.log(result);
                    //     } else {
                    //         alert("Введені числа не цілі");
                    //     };  
                    // };



// 5. Реалізуйте функцію – findMin(), яка повинна приймати довільну кількість числових аргументів і повертати той, 
//який має найменше значення. Порада: для розв’язку можете скористатися спеціальним масивом arguments.
// Sample Output:
// findMin(12, 14, 4, -4, 0.2); // => -4


                    // function findMin() {
                    //     let min = arguments[0];
                    //     for (i in arguments) {
                    //         arguments[i] < min ? min = arguments[i] : null 
                    //     };
                    //             console.log(min);
                    //         };
                    // findMin(258, 12, 14, 4, -4, 0.2);


// 6. Напишіть функцію findUnique(arr), яка приймає масив arr і перевіряє на унікальність його елементи. 
//Якщо всі елементи масиву унікальні (не мають дублів), то функція поверне true, інакше - false.
// Sample Output:
// findUnique([1, 2, 3, 5, 3]);  // => false
// findUnique([1, 2, 3, 5, 11]); // => true


                    // function findUnique(arr) {
                    //     let length = arr.length;
                    //         for (let i=0; i<length-1; i++) {
                    //             for (let j = i+1; j < length; j++) {
                    //                 if (arr[i] === arr[j]) return false; }
                    //             }
                    //             return true;
                    //         }; 
                    // console.log(findUnique([1, 2, 3, 5, 3]));
                    // console.log(findUnique([1, 2, 3, 5, 11]));


// 7. Напишіть функцію, яка повертає останній елемент масиву. Функція може приймати 2 параметра: 1-ий масив, 
//2-ий числовий параметр, що відповідає кількості 'х' останніх елементів масиву, які треба вивести.

// Sample Output:
// console.log(lastElem([3, 4, 10, -5]));      // -5
// console.log(lastElem([3, 4, 10, -5],2));   // [10, -5]
// console.log(lastElem([3, 4, 10, -5],8));   // [3, 4, 10, -5]

                    // function lastElem(arr,b){
                    //         if(b === undefined){
                    //                 return arr[arr.length - 1];
                    //             } else {
                    //                 return arr.slice (-b);
                    //             };
                    //         };

                    // console.log(lastElem([3, 4, 10, -5]));      // -5
                    // console.log(lastElem([3, 4, 10, -5],2));   // [10, -5]
                    // console.log(lastElem([3, 4, 10, -5],8));   // [3, 4, 10, -5]



// 8. Напишіть функцію, яка приймає рядок як параметр і перетворює першу букву кожного слова рядка в верхній регістр.

// Input string: 'i love java script' 
// Output string: 'I Love Java Script'


//      function toUppercase(str) {
    //     let newStr = '';                //создаем переменную string
    //         for(let i = 1; i < str.length; i++) {
    //             if (str[i] === ' ' && str[i+1] !== ' ') {       //если символ = пробелу и следующий не равен пробелу
    //                 newStr = newStr + str[i] + str[i+1].toUpperCase();
    //                 i++;                    //Переходим к следующей букве
    //             }  else {
    //                 newStr += str[i];       //Оператор сложения с присваиванием (+=) добавляет значение правого операнда к переменной и присваивает переменной результат.
    //             }
    //         }
    //         return str[0].toUpperCase() + newStr;   //делаем первую букву строки заглавной + выводим все остальное
    // }
    // console.log(toUppercase('i love java script'));
    
    
    // // const s = 'i love java script';
    // //  const capitalizeEachWord = (s) => {    //Стрелочная функция
    // //     let arr = s.split(" ");             //Метод split() разбивает объект String на массив строк путём разделения строки указанной подстрокой.
    // //     console.log(arr);
    // //     for(let i = 0; i< arr.length; i++)
    // //     {
    // //     arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    // //     }
    // //     let result = arr.join(" ");
    // //     return result;
    // //     };
    // //    console.log(capitalizeEachWord(s));