<h1 id="main_header">This is page for task2</h1>
<ul>
    <li className="linkList listElement1"><a href="#">link1</a></li>
    <li className="linkList listElement2"><a href="#">link2</a></li>
    <li className="linkList listElement3"><a href="#">link3</a></li>
</ul>
<h3 className="sub-header">content 1 segment</h3>
<div className="content_1">
    <p className="text_segment text1">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam amet at autem cumque distinctio,
        dolorem
        eligendi eum eveniet facere inventore ipsa minus pariatur repellendus sequi sit veniam voluptatum.
        Fugit,
        soluta?</p>

</div>
<h3 className="sub-header">content 2 segment</h3>
<div className="content_2">
    <p className="text_segment text2">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam beatae, exercitationem modi mollitia
        omnis
        possimus quam rerum sequi temporibus tenetur! Accusantium ad commodi eveniet excepturi laboriosam quis
        quisquam sint temporibus.</p>
</div>


//Взяти файл template_2.html та працювати в ньому
//1) Напишіть код, який :
//a) змінює клас який впливає на колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)

let elementById  = document.getElementById('main_header');
elementById.classList.add('sep-2021');

//b) робить шириниу елементу ul 400px

let elementByTagName  = document.getElementsByTagName('ul');
elementByTagName.style.width = '400px';

//c) робить шириниу всіх елементів з класом linkList шириною 50%

let elementsByClassName  = document.getElementsByClassName('linkList');
for (const item of elementsByClassName) {
    item.style.width = '50%';
}

//d) отримує текст який зберігається в елементі з класом listElement2

function addText(text) {
    let elementsByClassName = document.getElementsByClassName(listElement2);
    elementsByClassName.innerText = text;
}
addText(text);

//e) отримує всі елементи li та змінює ім колір фону на сірий

let elementsLi = document.getElementsByTagName('li');
for (const element of elementsLi) {
    element.style.background = 'gray';
}

//f) отримує всі елементи 'a' та додає їм клас anchor

let elementsA = document.getElementsByTagName('a');
for (const element of elementsA) {
    element.classList.add('anchor');
}

//g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

let elementsA = document.getElementsByTagName('a');
for (const element of elementsA) {
    if (element.innerText === 'link3') {
        element.style.fontSize = '40px';
    }
}

//h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

let elementsA = document.getElementsByTagName('a');
for (const element of elementsA) {
    let newClass = element.innerText;
    element.classList.add(newClass);
}

//i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

let subHeadersList = document.getElementsByClassName('sub-header');
for (const element of subHeadersList) {
    element.style.background = prompt('Введіть колір:');
}

//j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

let subHeadersList = document.getElementsByClassName('sub-header');
for (const element of subHeadersList) {
    if (element.innerText === 'content 2 segment') {
        element.style.color = prompt('Введіть колір:');
    }
}

//k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

let classContent = document.getElementsByClassName('content_1');
classContent.innerText = prompt('Введіть текст:');

//l) отримати елементи p та змінити їм padding на 20px

let elementsP = document.getElementsByTagName('p');
for (const element of elementsP) {
    element.style.padding = '20px';
}

//m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)

let elementsT = document.getElementsByClassName('text2');
for (const element of elementsT) {
    element.innerText = 'sep-2021';
}
