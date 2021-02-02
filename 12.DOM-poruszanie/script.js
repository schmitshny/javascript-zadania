//zadanie 1

console.log(document.getElementById('buz').parentNode);

console.log(document.getElementById('baz').previousElementSibling);

console.log(document.getElementById('foo').children);

console.log(document.getElementById('foo').parentNode);

console.log(document.getElementById('foo').firstElementChild);

let fooChildrenElements = document.querySelector("#foo").children;
console.log(fooChildrenElements[Math.floor(fooChildrenElements.length / 2)]);

//zadanie 2

function printChildOnClick(el) {
    el.addEventListener('click', () => {
        console.log(el.textContent.trim());
    });


//zadanie 3

document.querySelectorAll('div#ex3 button').forEach((el) => {
    el.addEventListener('click', () => {
        let sib = el.nextElementSibling;
        console.log(sib);
        sib.style.display = sib.style.display === "none"
            ? "inline"
            : "none"
    });
});

// Zadanie 4
document.querySelectorAll('div#ex3 button').forEach((el) => {
    el.addEventListener('click', () => {
        var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        el.parentElement.style.backgroundColor = randomColor;
    });
});

// Zadanie 5
// task to numer zadania [1-5]
document.querySelectorAll('div#ex5 div').forEach((el) => {
    const task = 1;
    let selector;
    switch (task) {
        case 1:
            selector = 'li:first-of-type'; break;
        case 2:
            selector = 'li:last-of-type'; break;
        case 3:
            selector = 'li:nth-child(even)'; break;
        case 4:
            selector = 'li'; break;
        case 5:
            selector = '';
    }
    const items = el.parentElement.querySelectorAll(`ul ${selector}`);
    el.addEventListener('mouseover', () => {
        items.forEach((item) => {
            item.style.backgroundColor = el.style.backgroundColor;
        });
    });
});

// Zadanie 6
const ex6_1 = document.querySelector('#ex6 > * > * > *');
const ex6_2 = document.querySelector('#ex6').firstElementChild.parentElement.firstElementChild.firstElementChild.nextElementSibling.parentElement;
// zwraca undefined jeśli nie zostaną usunięte niepożądane na Codepen elementy (html, head)
// działa poprawnie odpalone lokalnie
const ex6_3 = document.querySelector('#ex6').parentElement.firstElementChild.parentElement.children[1]?.firstElementChild?.firstElementChild?.firstElementChild;
console.log({ ex6_1, ex6_2, ex6_3 });
