// Practical task 7

// 1. За допомогою методів об’єкта window створити:
// 	1) нове вікно розміром 300х300 пікселів.
// 	2) із затримкою 2 сек змініть розміри вікна на 500х500 пікселів
// 	3) із затримкою 2 сек перемістіть вікно в точку з координатами (200, 200)
// 	4) із затримкою 2 сек закрийте вікно.


          // function createWindow (){
          //      let openW = window.open("","300x300", "width=300,height=300")
          //      window.setTimeout(function(){openW.resizeTo(500,500)},2000);
          //      window.setTimeout(function(){openW.moveTo(200,200)},4000);
          // window.setTimeout(function(){openW.close()},6000);
          // };
          // createWindow();


// 2. Для заданої HTML-сторінки:

//  <p id ='text'>I learning JavaScript events!</p> 
// <div>
// 	<button . . . . . >Change style!</button>
// </div> 

// напишіть функцію changeCSS(), яка спрацьовуватиме по кліку на кнопку і змінюватиме стиль вмісту тега 
// <p>: колір шрифту – оранжевий, розмір шрифту 20 пс, шрифт сімейства "Comic Sans MS".


          // function changeCSS(){
          //      document.getElementById("text").style.color = "orange";
          //      document.getElementById("text").style.fontSize = "20px";
          //      document.getElementById("text").style.fontFamily = "Comic Sans MS";
          // };
          // button.addEventListener("click", changeCSS);


// 3. Задано сторінку з 3 кнопками і 1 лінкою. Напишіть Javascript код і реалізуйте HTML-сторінку з відповідними 
// подіями на кожному елементові:
// 	1) 1-ша кнопка – при кліку на неї колір фону сторінки міняється на синій
// 	2) 2-га кнопка – при подвійному кліку на неї колір фону сторінки міняється на рожевий
// 	3) 3-я кнопка – при натисненні і утримуванні кнопки колір фону сторінки стає коричневий. При відпусканні – 
// білий.
// 	4) При наведенні на лінку – колір фону стає жовтим, при відведенні – білим.
// 	Приклад – курсор наведений на лінку.
 

          // function firstButtonClick(){
          //      document.getElementById("button1").style.backgroundColor = "blue";
          // };
          // function secondButtonClick(){
          //      document.getElementById("button2").style.backgroundColor = "pink";
          // };
          // function thirdButtonClick(){
          //      document.getElementById("button3").style.backgroundColor = "brown";
          // };
          // function thirdButtonClick2(){
          //      document.getElementById("button3").style.backgroundColor = "white";
          // };
          // function mouseOver(){
          //      document.getElementById("link").style.backgroundColor = "yellow";
          // };
          // function mouseOut(){
          //      document.getElementById("link").style.backgroundColor = "white";
          // };

          // button1.addEventListener("click", firstButtonClick);
          // button2.addEventListener("dblclick", secondButtonClick);
          // button3.addEventListener("mousedown", thirdButtonClick);
          // button3.addEventListener("mouseup", thirdButtonClick2);
          // link.addEventListener("mouseover", mouseOver);
          // link.addEventListener("mouseout", mouseOut);


// 4. Реалізуйте програму, яка по натисканню на кнопку видалятиме обраний елемент випадаючого списку. 
// Можуть видалятися всі елементи в будь-якому порядку.


          // let select = form.numbers;
          // function removeElement(){
          // let selectedIndex = select.options.selectedIndex;
          //      select.options[selectedIndex] = null;
          // };

          // button.addEventListener("click", removeElement, false);


// 5. Реалізуйте програму, яка по натисканню на кнопку виводитиме повідомлення 
// "I was pressed!", при наведенні на кнопку виводитиме повідомлення "Mouse on me!", а при відведенні курсора 
// миші виводитиме повідомлення "Mouse is not on me!".

// Приклад роботи:
 
// let node;

//     node = document.createTextNode('I was pressed!')
//     p = document.createElement('p4');
//     p.appendChild(node);
//     document.querySelector("#div1").appendChild(p);


          // function click() {
          //      text = document.createTextNode('I was pressed!')
          //      string = document.createElement('p')
          //      string.appendChild(text);
          //      document.querySelector("#div1").appendChild(string);
          // };

          // function mouseOn(){
          //      text = document.createTextNode('Mouse on me')
          //      string = document.createElement('p')
          //      string.appendChild(text);
          //      document.querySelector("#div1").appendChild(string);
          // };

          // function mouseOff(){
          //      text = document.createTextNode('Mouse is not on me!')
          //      string = document.createElement('p')
          //      string.appendChild(text);
          //      document.querySelector("#div1").appendChild(string);
          // }

          //      liveButton.addEventListener("click", click);
          //      liveButton.addEventListener("mouseenter", mouseOn);
          //      liveButton.addEventListener("mouseout", mouseOff);


// 6. Реалізуйте програму, яка відслідковуватиме зміну розміру (ширини і висоти) вікна браузера і виводитиме на 
// поточну сторінку при її розтязі/стисканні відповідні значення.


          // window.onresize = resize;
          //      function resize(){
          //           document.getElementById('width').innerText = document.documentElement.clientWidth;
          //           document.getElementById('height').innerText = document.documentElement.clientHeight;
          //      };
          // resize();
 

// 7*. На сторінці потрібно реалізувати 2 випадаючих списки. У першому містяться назви країн, у другому – 
// назви міст. Реалізувати роботу таким чином, щоб коли вибирається з лівого випадаючого списку певна країна - 
// в правому випадаючому  списку з'являлися міста цієї країни. Список міст формується динамічно, через JavaScript. 
// Також потрібно нижче вивести назву обраної країни і місто.
   

// Код HTML-сторінки:
/* <select name="country" id="country">
	<option value="ger">Germany</option>
	<option value="usa">USA</option>
	<option value="ukr">Ukraine</option>
</select>
                    
<select name="cities" id="cities"></select>
<p></p> */

          // let germanyCities = ['Keln','Gamburg','Berlin'];
          // let USACities = ['New York','Washinton','Boston'];
          // let ukraineCities = ['Dnipro','Lviv','Kyiv'];

          // const country_ = document.querySelector("#country");
          // const cities_ = document.querySelector("#cities");
          // const p_ = document.querySelector("#p");

          // country_.addEventListener("change", event => {
          //      p_.innerText = event.target.value;
          //           if (event.target.value == "usa") {
          //           removeAll();
          //           for (let i = 0; i < USACities.length; i++) {
          //                cities_.options[cities_.options.length] = new Option(USACities[i], USACities[i]);
          //           };
          //           } else if(event.target.value == "ger") {
          //           removeAll();
          //           for (let i = 0; i < USACities.length; i++) {
          //                cities_.options[cities_.options.length] = new Option(germanyCities[i], germanyCities[i]);
          //           };
          //           } else if (event.target.value == "ukr"){
          //           removeAll();
          //           for (let i = 0; i < USACities.length; i++) {
          //                cities_.options[cities_.options.length] = new Option(ukraineCities[i], ukraineCities[i]);
          //           };
          //           };
          //   });
          //   cities_.addEventListener("change", e=>{
          //       p.innerHTML += ", " + event.target.value;
          //   });
          // function removeAll() {
          //      while (cities_.options.length > 0) {
          //           cities_.remove(0);
          //      };
          // };

