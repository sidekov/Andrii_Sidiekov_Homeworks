// Practical task 5

/* 1. Напишіть функцію propsCount(currentObject), яка приймає об’єкт і визначає кількість властивостей
цього об’єкта.
Наприклад для об’єкта
let mentor = {
            course: "JS fundamental",
            duration: 3,
            direction: "web-development"
        };
Результат має бути 3.
propsCount(mentor);  // 3 
*/

          // let mentor = {
          //      course: "JS fundamental",
          //      duration: 3,
          //      direction: "web-development",
          // };
          // function propsCount(currentObject) {
          //      return Object.getOwnPropertyNames(currentObject).length; // Object.keys() ??
          // };
          // console.log(propsCount(mentor));

/* 2. Створіть довільний об’єкт, який має 5 полів. Необхідно написати функцію showProps(obj), яка приймає
даний об’єкт і виводить список його властивостей записаних в масив. Виведіть також масив значень властивостей
об’єкта. */

          // let client = {
          //      name: "Biokhimcontrol, LLC",
          //      nsrueo: "44904042",
          //      adress: "Dnipro",
          //      checking_account: "UA803071230000026009011089858",
          //      mail: "biokhimcontrol@gmail.com",
          // };
          // function showProps(obj) {
          //      return ("property: [" + Object.keys(client) + "] values: [" + Object.values(client) + "]");
          // };
          // console.log(showProps());

/* 3. Створіть клас Person, в якого конструктор приймає параметри name і surname, а також міститься метод
showFullName(), який виводить ім’я і прізвище особи.
	Від класу Person наслідується клас Student, конструктор якого крім name і surname, приймає параметр year
(рік вступу до університету).
	В класі Student необхідно перевизначити метод showFullName(midleName), щоб виводилося не лише ім’я, прізвище,
але і по-батькові (midleName) студента.
	Також в класі Student необхідно реалізувати метод showCourse(), який виводитиме поточний курс студента
(від 1 до 6). Значення курсу визначатиметься як різниця поточного року (визначити самостійно) і року вступу
до ВУЗу year.
	Приклад результату:
const stud1 = new Student("Petro", "Petrenko", 2015);
console.log(stud1.showFullName("Petrovych")); // Petrenko Petro Petrovych
console.log("Current course: " + stud1.showCourse()); //Current course: 6
*/

          // class person {
          //      constructor(name, surname) {
          //           this.name = name;
          //           this.surname = surname;
          //      };
          //           showFullName() {
          //                return this.surname + " " + this.name;
          //           };
          // };
          // class student extends person {
          //      constructor(name, surname, year, midleName) {
          //           super(name, surname);
          //           this.year = year;
          //           this.midleName = midleName;
          //      };
          //           showFullName(midleName) {
          //                this.midleName = midleName;
          //                     return this.surname + " " + this.name + " " + this.midleName;
          //           };
          //           showCourse() {
          //                let date = new Date();
          //                     return date.getFullYear() - this.year;
          //           };
          // };
          // const stud1 = new student("Petro", "Petrenko", 2015);
          // console.log(stud1.showFullName("Petrovych"));
          // console.log("Current course: " + stud1.showCourse());

/* 4. Створіть клас Worker який буде мати конструктор, який приймає наступні властивості: fullName (ім’я і прізвище), 
dayRate (ставка за день роботи), workingDays (кількість відпрацьованих днів).
1) клас повинен мати метод showSalary(), який буде виводити зарплату працівника. Зарплата - це добуток ставки 
dayRate на кількість відпрацьованих днів workingDays.
2) додати приватне поле experience і присвоїти йому значення 1.2 і використовувати його як додатковий множник 
при визначенні зарплати – створити метод showSalaryWithExperience(). Вивести значення зарплати з цим коефіцієнтом.
3) додати гетери і сетери для поля experience. Встановити значення experience = 1.5 і вивести його на екран.
4) Вивести значення зарплати з новим experience.
5) Створити кілька екземплярів класу (працівників) з різними зарплатами, як показано в прикладі нижче. 
Посортувати зарплату працівників із найбільшим experience по зростанню і вивести результат в форматі:   
worker_fullName: salary_value
6) Реалізувати динамічне сортування для будь-кої кількості працівників-екземплярів класу Worker. */

          // class Worker {
          //      #experience = 1.2;
          //      constructor(fullName, dayRate, workingDays) {
          //           this.fullName = fullName;
          //           this.dayRate = dayRate;
          //           this.workingDays = workingDays;  
          //      }; 
          //                showSalary() {
          //                     return this.dayRate * this.workingDays;
          //                };
          //                showSalaryWithExperience() {
          //                     return this.showSalary() * this.#experience;
          //                };
          //                     get showExp () {
          //                          return this.#experience;
          //                     };
          //                     set setExp(value) {
          //                          this.#experience = value;
          //                     };
          // };

          //      function sortWorkersBySalary(workersArr) {
          //           let listOfWorkers = workersArr.map((workerItem) => {
          //                return {
          //                     name: workerItem.fullName,
          //                     salary: workerItem.showSalaryWithExperience(),
          //                };
          //           });
               
          //                listOfWorkers.sort((a, b) => (a.salary > b.salary ? 1 : -1));
          //                listOfWorkers.map((worker) => {
          //                     console.log(`${worker.name}: ${worker.salary}`);
          //                });
          //      };
          
          // let worker1 = new Worker("John Johnson", 20, 23);
          // console.log(worker1.fullName);
          // console.log(worker1.fullName + " salary: " + worker1.showSalary());
          // console.log("New experience: " + worker1.showExp);
          // console.log(worker1.fullName + " salary: " + worker1.showSalaryWithExperience());
          // worker1.setExp = 1.5;
          // console.log("New experience: " + worker1.showExp);
          // console.log(worker1.fullName + " salary: " + worker1.showSalaryWithExperience());
          // console.log("********************************************");
          // let worker2 = new Worker("Tom Tomson", 48, 22);
          // console.log(worker2.fullName);
          // console.log(worker2.fullName + " salary: " + worker2.showSalary());
          // console.log("New experience: " + worker2.showExp);
          // console.log(worker2.fullName + " salary: " + worker2.showSalaryWithExperience());
          // worker2.setExp = 1.5;
          // console.log("New experience: " + worker2.showExp);
          // console.log(worker2.fullName + " salary: " + worker2.showSalaryWithExperience());
          // console.log("********************************************");
          // let worker3 = new Worker("Andy Ander", 29, 23);
          // console.log(worker3.fullName);
          // console.log(worker3.fullName + " salary: " + worker3.showSalary());
          // console.log("New experience: " + worker3.showExp);
          // console.log(worker3.fullName + " salary: " + worker3.showSalaryWithExperience());
          // worker3.setExp = 1.5;
          // console.log("New experience: " + worker3.showExp);
          // console.log(worker3.fullName + " salary: " + worker3.showSalaryWithExperience());
          // console.log("********************************************");
          // console.log("Sorted salary: ");
          // sortWorkersBySalary([worker1, worker2, worker3]);


/* 5. Створіть батьківський клас GeometricFigure, який має порожній метод для визначення площі getArea() та метод toString() 
для виведення назви класу.
Створіть 3 класи нащадки Triangle, Square і Circle, які наслідуються від класу GeometricFigure. Кожен з дочірніх класів 
має свою реалізацію методу getArea(), для визначення площі фігури. В конструкторах дочірніх класів передбачити властивості 
необхідні для визначення площі фігури, наприклад для кола - радіус r.
	Створіть зовнішню функцію handleFigures(figures), яка прийматиме масив об’єктів дочірніх класів figures, перевірятиме 
чи об’єкт належить батьківському класу з урахуванням наслідування, виводитиме назву створеного об’єкту відповідної фігури,
розраховану площу фігури та сумарну площу всіх фігур. Для реалізації функції можете використати метод reduce().
*/

          class GeometricFigure {
                    getArea() {
                         return 0;
                    };
                    toString() {
                         return Object.getPrototypeOf(this).constructor.name;
                    };
          };
          class Triangle extends GeometricFigure {
               constructor (side_a, side_b, side_c) {
                    super ();
                    this.side_a = side_a;
                    this.side_b = side_b;
                    this.side_c = side_c;
               };
                    getArea() {
                         let p = (this.side_a + this.side_b + this.side_c)/2;         
                         return Math.sqrt (p*(p - this.side_a)*(p - this.side_b)*(p - this.side_c));
                    };
          };
          class Square extends GeometricFigure {
               constructor(side_sq) {
                    super ();
                    this.side_sq = side_sq;
               };
                    getArea() {
                         return Math.pow (this.side_sq, 2);
                    };
          };
          class Circle extends GeometricFigure {
               constructor (radius) {
                    super ();
                    this.radius = radius;
               };
                    getArea() {
                         return Math.PI * (Math.pow (this.radius, 2));
                    };
          };
          class Rectangle {constructor (a, b) {this.a = a; this.b = b;}; getArea () {return this.a * this.b;};};
               
               function handleFigures(figures) {
                    let arr = [];
                         for (let i of figures) {
                              if (i instanceof GeometricFigure) {
                                   console.log(`Geometric figure: ${i.constructor.name} area - ${i.getArea()}`);
                                   arr.push(i.getArea());
                              } else {
                                   console.log(`Geometric figure "${i.constructor.name}" does not belong to parent class`);
                              };  
                         };
                    let total = arr.reduce(function(sum, elem) {
                         return sum + elem;}, 0);
                              console.log(total);
               };

          const figures = [new Triangle(4,5,3), new Square(7), new Circle(5), new Rectangle(2,2)];
          handleFigures(figures);


     // function handleFigures(arrayOfFigures) {
     //      let sumOfArea = 0;
     //      arrayOfFigures.map((figure) => {
     //           if (figure instanceof GeometricFigure) {
     //           console.log(`Geometric Figure: ${figure.toString()} - area: ${figure.getArea()}`);
     //           sumOfArea += figure.getArea();
     //           };
     //      });
     //      console.log("Total area", sumOfArea);
     // };