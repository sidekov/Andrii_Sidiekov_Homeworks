// Practical task 6
// 1. На HTML-сторінці є елемент div:
//     <body>	
// 	<div id="test">First</div>
//   </body>	
// Потрібно змінити вміст елемента із First на Last. Доступіться до елемента div хоча б 2 способами.	


          // document.querySelector('#test').outerHTML = "Last";
          // document.getElementById('test').innerHTML = "Last";


// 2. На сторінці є елемент зображення:
//      <body>
// 		   <img class="image" src="dog.jpg">
//      </body>
// Потрібно змінити зображення dog.jpg на cat.jpg.
// Виведіть в модальному вікні вміст тегу img з новим зображенням.


          // function changeImage (){
          //      let img = document.querySelector(".image");
          //      img.setAttribute("src", "src/cat.jpg");
          //      alert(img.getAttribute("src"));
          // };
          // changeImage();


// 3. 
//        <body><h2>Article header</h2>
//        <div id="text"><p>First paragraph</p><p>Second paragraph</p><p>Third paragraph</p></div>
// 	     <p>Another text</p></body>x
// На вказаній HTML-сторінці необхідно отримати всі елементи всередині тега div по селектору (використати метод 
// document.querySelectorAll). І вивести їх вміст із вказанням номеру абзацу в такому форматі:
// Selector text 0: First paragraph
// Selector text 1: Second paragraph
// Selector text 2: Third paragraph


          // function selector (){
          //      let elementsList = document.querySelectorAll('div p');
          //      for (let i = 0; i < elementsList.length; i++) {
          //           console.log("Selector text" + i + ": " + elementsList[i].innerHTML);
          //      };
          // };
          // selector();


// 4. На HTML-сторінці є ненумерований список з id="list", який складається із 5 елементів. У модальному 
// вікні необхідно послідовно вивести вміст:
// 	1) першого елемента списку
// 	2) останнього елемента списку
// 	3) другого елемента списку
// 	4) четвертого елемента списку
// 	5) третього елемента списку
// Зробіть завдання 2 різними способами.	
// Приклад:
// •	1
// •	2
// •	3
// •	4
// •	5
// Результат виводу: 1, 5, 2, 4, 3

        // function showElem (){
        //      alert(document.querySelectorAll('li')[0].innerText);
        //      alert(document.querySelectorAll('li')[4].innerText);
        //      alert(document.querySelectorAll('li')[1].innerText);
        //      alert(document.querySelectorAll('li')[3].innerText);
        //      alert(document.querySelectorAll('li')[2].innerText);
        // };
        // showElem();

        // function showElem2(){
        //     let elem = document.querySelector("#list").children;
        //     alert(elem[0].innerText);
        //     alert(elem[4].innerText);
        //     alert(elem[1].innerText);
        //     alert(elem[3].innerText);
        //     alert(elem[2].innerText);  
        // }
        // showElem2()


// 5. Для сторінки
// 		  <body>
		//        <h1>I'am a big header!!!</h1>
        // <div id="myDiv">
        //     <p>First paragraph</p>
        //     <p>Second paragraph</p>
        //     <p>Third paragraph</p>
        //     <p>Fourth paragraph</p>
        // </div>
        // <ul id="myList">
        //     <li>Make</li>
        //     <li>me</li>
        //     <li>horizontal!</li>
        // </ul>
        // <span>Make me invisible, please!</span>
// 	    </body>
// Напишіть скріпт, який за допомогою засобів DOM простилізує сторінку так як показано нижче:
 

        // function styles() {
        //     document.getElementsByTagName("h1")[0].style.backgroundColor = "green";
        //     document.getElementById('myDiv').firstElementChild.style.fontWeight = "bold";
        //     document.getElementById('myDiv').children[1].style.color = "red";
        //     document.getElementById('myDiv').children[2].style.textDecoration = "underline";
        //     document.getElementById('myDiv').children[3].style.fontStyle = "italic";
        //     document.getElementById("myList").style.display = "flex";
        //     document.getElementById('myList').style.listStyle = "none";
        //     document.querySelector("span").style.display = "none";
        // };
        // styles();


// 6. Задано HTML-сторінку:
//     <body>
// <input type="text" id="input1" value="Text1">
// <input type="text" id="input2" value="Text2">
//   </body>
// 1)	Користувач почергово вводить 2 повідомлення (використати prompt()). 1-е повідомлення записується в 
// 1-ий <input>, 2-ге – в 2-ий.
// 2)	Поміняти значення 1-го і 2-го інпутів місцями.

        // function input(){
        //     let first = window.prompt ("Please enter first value", );
        //     let second = window.prompt ("Please enter second value", );
        //    // document.getElementById("input1");          //ВОЛОДЯ, працює без цієї строки. Це норм?
        //     input1.value = first;
        //     input2.value = second;
        // };
        // input();
        //         setTimeout(function(){ 
        //             input2.value = [input1.value, input1.value = input2.value][0]; //Прошу розібрати як працює під капотом
        //         }, 5000);


// 7. Напишіть скріпт, який за допомогою засобів DOM створить для порожньої HTML-сторінки таку 
//  структуру з тегів і їх атрибутів.
// 		<body>
	// 	  <main class="mainClass check item"> 	
	// 	        <div id="myDiv">
    //        <p>First paragraph</p>           
    //      </div>
    //    </main> 
// 	    </body>
	 
        // function create () {
        //     let body = document.createElement('body');
        //     let main = document.createElement('main');
        //     let div = document.createElement('div');
        //     let p = document.createElement('p');
        //         main.className = ('mainClass check item')
        //         div.id = "myDiv";
        //         p.innerHTML = "First paragraph";
        //             document.body.prepend(body);
        //                 body.appendChild(main);
        //                     main.appendChild(div);
        //                         div.appendChild(p);
        // };
        // create();



