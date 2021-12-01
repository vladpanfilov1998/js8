<p id="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis cupiditate deleniti
    molestias mollitia pariatur porro saepe! Dolorem eaque earum eligendi, iste maxime molestias quam vitae.
    Dolore hic in quae sed.
</p>

<div id="rules" className="fc bp">
    Первое правило Бойцовского клуба: никому не рассказывать о Бойцовском клубе. Второе правило Бойцовского
    клуба: никогда никому не рассказывать о Бойцовском клубе. Третье правило Бойцовского клуба: в схватке
    участвуют только двое. Четвертое правило Бойцовского клуба: не более одного поединка за один раз
</div>

<ul>
    <li className="fc_rules rule1">Первое правило Бойцовского клуба: никому не рассказывать о Бойцовском клубе.</li>
    <li className="fc_rules rule2">Второе правило Бойцовского
        клуба: никогда никому не рассказывать о Бойцовском клубе
    </li>
    <li className="fc_rules rule3">Третье правило Бойцовского клуба: в схватке
        участвуют только двое.
    </li>
    <li className="fc_rules rule4">Четвертое правило Бойцовского клуба: не более одного поединка за один раз</li>
</ul>


//Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!

//- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
//-- отримує текст з параграфа з id "content"

let contentID = document.getElementById('content');
console.log(contentID.innerText);

console.log(document.getElementById('content').innerText);

//-- отримує текст з блоку з id "rules"

let rules = document.getElementById('rules');
console.log(rules.innerText);

console.log(document.getElementById('rules').innerText);

//-- замініть текст параграфа з id 'content' на будь-який інший

let pContent = document.getElementById('content');
pContent.innerText = 'Sed ut perspiciatis unde omnis iste dicta sunt explicabo.';

//-- замініть текст параграфа з id 'rules' на будь-який інший

let pRules = document.getElementById('rules');
pRules.innerText = 'Sed ut perspiciatis unde omnis iste dicta sunt explicabo.';

//-- змініть кожному елементу колір фону на червоний

let children = document.body.children;
for (const child of children) {
    child.style.background = 'red';
}

//-- змініть кожному елементу колір тексту на синій

let children = document.body.children;
for (const child of children) {
    child.style.color = 'blue';
}

//-- отримати весь список класів елемента з id=rules і вивести їх в console.log

let elementsF = document.getElementById('rules');
console.log(elementsF.classList);

//-- поміняти колір тексту у всіх елементів fc_rules на червоний

let elementsFR = document.getElementsByClassName('fc_rules');
for (const element of elementsFR) {
    element.style.color = 'red';
}
