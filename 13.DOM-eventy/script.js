//zadanie 1

//1
document.getElementById('test-event').addEventListener('click', (event) => {
onsole.log(event);

//2
document.addEventListener("mousemove",(event) => {
console.log(event);
   
//3

document.getElementById('test-event').addEventListener('mouseover', (event) => {
onsole.log(event);

//4

document.addEventListener("keydown", (event) => {
console.log(event);

//5
document.addEventListener('scroll', (event) => {
console.log(event);

//6
document.getElementById('input-test').addEventListener('input', (event) => {
console.log(event);

//zadanie 2
function printChildOnClick(el) {
    el.addEventListener('click', () => {
        console.log(el.textContent.trim());
    });
}

printChildOnClick(document.getElementById('ex2'));

// 3

function changeSquareColor() {
    const square = document.getElementById('ex3');

    square.addEventListener('mouseenter', (event) => {
        event.target.style.backgroundColor = 'blue';
    });

    square.addEventListener('mouseleave', (event) => {
        event.target.style.backgroundColor = 'red';
    });
}

changeSquareColor();

// 4

function validateNumberInInputTest() {
    const regex = /\d+/;

    document.getElementById('input-test').addEventListener('input', (event) => {
        const input = event.target;
        if (input.value.match(regex) !== null) {
            if (input.nextElementSibling.innerText.length === 0) {
                input.nextElementSibling.innerText = 'Nie można wpisywać cyfr';
            }
            return;
        }

        if (input.nextElementSibling.innerText.length > 0) {
            input.nextElementSibling.innerText = '';
        }
    });
}

validateNumberInInputTest();

// 5

function clickBtnCounter() {
    const button = document.getElementById('ex5-button');
    let i = 0;

    button.addEventListener('click', counter)

    function counter() {
        ++i;
        button.nextElementSibling.innerText = i;

        if (i === 10) {
            button.removeEventListener('click', counter);
        }
    }
}

clickBtnCounter();

// 6

function changeColorFromScroll() {
    const body = document.body;
    document.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            body.style.backgroundColor = 'red';
        } else {
            body.style.backgroundColor = 'white';
        }
    })
}

changeColorFromScroll();
