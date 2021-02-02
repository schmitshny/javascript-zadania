//zadanie 1

const newDiv = document.createElement('div');
newDiv.innerText = 'To jest nowy element';

document.body.insertBefore(newDiv, document.getElementById('root'));

// zadanie 2

const favouriteFruits = ['banan', 'truskawka', 'mandarynka', 'winogrona', 'poziomki', 'czereśnie'];

const favouriteFruitsList = document.createElement('ul');

favouriteFruits.forEach((fruit) => {
    const fruitElement = document.createElement('li');
    fruitElement.innerText = fruit;

    favouriteFruitsList.append(fruitElement);
});

newDiv.append(favouriteFruitsList);

//zadanie 3

newDiv.addEventListener('click', () => {
    Array.from(favouriteFruitsList.children).forEach((listElement, index) => {
        if (index % 2 === 1) {
            favouriteFruitsList.removeChild(listElement);
        }
    });
});

//zadanie 4

document.getElementById('ex4').addEventListener('click', (event) => {
    event.target.remove();
});

//zadanie 5
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

const randomNumber = getRandomInt(1, 15);

for (let i = 0; i < randomNumber; ++i) {
    const nextDiv = document.createElement('div');
    nextDiv.innerText = `to jest div numer ${i}`;

    document.body.append(nextDiv, document.getElementById('root'));
}

//zadanie 6

const htmlObject = {
    div1: 'to jest div',
    span1: 'to jest span',
    div2: {
        div3: 'to jest div',
    },
    span2: 'to jest span',
}

const newDiv1 = document.createElement('div');
newDiv1.innerText = htmlObject.div1;

const newSpan1 = document.createElement('span');
newSpan1.innerText = htmlObject.span1;

newDiv1.append(newSpan1);

document.body.append(newDiv1, document.getElementById('root'));

const newDiv2 = document.createElement('div');
const newDiv3 = document.createElement('div');
newDiv3.innerText = htmlObject.div2.div3;

const newSpan2 = document.createElement('span');
newSpan2.innerText = htmlObject.span2;

newDiv2.append(newDiv3);
newDiv2.append(newSpan2);

document.body.append(newDiv2, document.getElementById('root'));

//zadanie 7

const listValues = [1, 2, 3, 4, 5, 6];

const newDivList = document.createElement('div');

const listA = document.createElement('ul');
const listB = document.createElement('ul');

listValues.forEach((element) => {
    const listAElement = document.createElement('li');
    listAElement.innerText = element;

    listA.append(listAElement);
});

const buttonA = document.createElement('button');
buttonA.innerText = 'Dla listy A';

buttonA.addEventListener('click', () => {
    listB.append(listA.lastElementChild);

    buttonB.disabled = false;

    if (!listA.children.length) {
        buttonA.disabled = true;
    }
});

const buttonB = document.createElement('button');
buttonB.innerText = 'Dla listy B';

buttonB.addEventListener('click', () => {
    listA.append(listB.lastElementChild);

    buttonA.disabled = false;

    if (!listB.children.length) {
        buttonB.disabled = true;
    }
});

buttonB.disabled = true;

newDivList.append(listA);
newDivList.append(buttonA);
newDivList.append(listB);
newDivList.append(buttonB);

document.body.append(newDivList, document.getElementById('root'));

//zadanie 8

document.getElementById('ex8-button').addEventListener('click', (event) => {
    const newElements = document.createElement('div');

    for (let i = 0; i < parseInt(document.getElementById('ex8-count').value); ++i) {
        const newElement = document.createElement(
            document.getElementById('ex8-what').value
        );

        newElement.style.color = document.getElementById('ex8-color').value;
        newElement.innerText = document.getElementById('ex8-value').value;

        newElements.append(newElement);
    }

    document.body.append(newElements, document.getElementById('root'));

    event.stopPropagation();
});

//zadanie 9

function addedTableData() {
    this.wrapper = document.createElement('div');
    this.formWrapper = document.createElement('div');
    this.btnWrapper = document.createElement('div');
    this.resultWrapper = document.createElement('table');

    document.body.append(this.wrapper, document.getElementById('root'));
    this.wrapper.append(this.formWrapper);
    this.wrapper.append(this.btnWrapper);
    this.wrapper.append(this.resultWrapper);

    this.forms = []
    this.tableRows = [];

    this.buildButtons = () => {
        this.buttons = {
            submit: document.createElement('button'),
            more: document.createElement('button'),
        }

        this.buttons.submit.id = 'ex9-submit';
        this.buttons.submit.innerText = 'Utwórz';

        this.buttons.more.id = 'ex9-more';
        this.buttons.more.innerText = 'Więcej';

        this.btnWrapper.append(this.buttons.submit);
        this.btnWrapper.append(this.buttons.more);
    }

    this.buildForm = () => {
        const form = {
            firstName: document.createElement('input'),
            surname: document.createElement('input'),
            age: document.createElement('input'),
            childCount: document.createElement('input'),
        };

        form.firstName.classList.add('ex9-first-name');
        form.firstName.placeholder = 'Imię';
        form.firstName.type = 'text';

        form.surname.classList.add('ex9-surname');
        form.surname.placeholder = 'Nazwisko';
        form.surname.type = 'text';

        form.age.classList.add('ex9-age');
        form.age.placeholder = 'Wiek';
        form.age.type = 'number';

        form.childCount.classList.add('ex9-child-count');
        form.childCount.placeholder = 'Ilość dzieci';
        form.childCount.type = 'number';

        this.formWrapper.append(form.firstName);
        this.formWrapper.append(form.surname);
        this.formWrapper.append(form.age);
        this.formWrapper.append(form.childCount);

        this.forms.push(form);
    }

    this.printResult = () => {
        this.resultWrapper.innerHTML = '';

        const thead = document.createElement('thead');
        const trThead = document.createElement('tr');
        thead.append(trThead);

        const tbody = document.createElement('tbody');

        const fields = ['firstName', 'surname', 'age', 'childCount', 'delete'];

        fields.forEach((field) => {
            const th = document.createElement('th');
            th.innerText = field;

            trThead.append(th);
        });

        this.forms.forEach((form) => {
            const tr = document.createElement('tr');
            const deleteBtn = document.createElement('button');
            deleteBtn.innerText = 'Usuń';

            [form.firstName.value, form.surname.value, parseInt(form.age.value), parseInt(form.childCount.value), deleteBtn].forEach(tdValue => {
                tdValue = this.checkStringData(tdValue);

                if (tdValue === null) {
                    throw new Error('Validate unsuccessful');
                }

                const td = document.createElement('td');
                if (tdValue instanceof HTMLElement) {
                    td.append(tdValue);
                } else {
                    td.innerText = tdValue;
                }

                tr.append(td);
            });

            deleteBtn.addEventListener('click', () => {
                tr.remove();
            });

            tbody.append(tr);
        });

        this.resultWrapper.append(thead);
        this.resultWrapper.append(tbody);
    }

    // 10

    this.checkStringData = (data) => {
        if (typeof data !== 'string') {
            return data;
        }

        if (!data.length) {
            alert('Dane muszą być wypełnione');
            return null;
        }

        return data.charAt(0).toUpperCase() + data.slice(1);
    }

    // end 10

    this.buildButtons();
    this.buildForm();

    this.buttons.more.addEventListener('click', () => {
        this.buildForm();
    });

    this.buttons.submit.addEventListener('click', () => {
        this.printResult();
    })

}

addedTableData();

// 11

const checkIntInStringButton = document.createElement('button');
checkIntInStringButton.innerText = 'Sprawdź';

const checkIntInStringInput = document.createElement('input');
checkIntInStringInput.placeholder = 'Tekst';
checkIntInStringInput.type = 'text';

function checkIntInString(data) {
    if (!/\d/.test(data)) {
        return 'Nie występuję';
    }

    const num = data.replace(/[^0-9]/g, ' ').split(' ');

    let sum = 0;
    let ratio = 1;

    num.forEach((singleNum) => {
        if (!singleNum.length) {
            return;
        }

        singleNum = parseInt(singleNum);

        sum += singleNum;
        ratio *= singleNum;
    });

    for (let i = 0; i < ratio; ++i) {
        const div = document.createElement('div');
        div.innerText = data;

        document.body.append(div, document.getElementById('root'));
    }

    return sum;
}

checkIntInStringButton.addEventListener('click', () => {
    console.log(checkIntInString(checkIntInStringInput.value));
});

document.body.append(checkIntInStringInput, document.getElementById('root'));
document.body.append(checkIntInStringButton, document.getElementById('root'));

// 12

const checkStringButton = document.createElement('button');
checkStringButton.innerText = 'Sprawdź';

const checkStringInput = document.createElement('input');
checkStringInput.placeholder = 'Tekst zad 12';
checkStringInput.type = 'text';

function checkString(data) {
    const objectWithString = {
        dataString: data,
        changeAla: function () {
            if (this.dataString.indexOf('Ala') == -1) {
                return false;
            }

            this.dataString = this.dataString.replaceAll('Ala', 'Ola')
            console.log(this.dataString);

            return true;
        }
    }

    if (!objectWithString.changeAla()) {
        const newDivElement = document.createElement('div');
        newDivElement.innerText = 'Słowo Ala nie występuję w tekście';

        document.body.append(newDivElement, document.getElementById('root'));
    }
}


checkStringButton.addEventListener('click', () => {
    checkString(checkStringInput.value);
});

document.body.append(checkStringInput, document.getElementById('root'));
document.body.append(checkStringButton, document.getElementById('root'));


// 13

function getLengthStrings(elements) {
    const result = [];

    elements.forEach((element) => {
        result.push(element.replace(/[^A-Z|a-z]/g, '').split('').length);
    })

    return result;
}

const lengthStrings = getLengthStrings(['ghj76k7', 'pol2020ska', 'bialo']);

console.log(lengthStrings);

function getSumFromArray(array) {
    return array.reduce((a, b) => (a + b));
}

const sumLengthStrings = getSumFromArray(lengthStrings);
console.log(sumLengthStrings);

function getAvgFromArray(sum, array) {
    return sum / array.length;
}

const avgLengthStrings = getAvgFromArray(sumLengthStrings, lengthStrings);
console.log(avgLengthStrings);

// 14


function createObject() {
    return {
        name: '',
        surname: '',
        age: '',
    };
}

let personObject = createObject();

function setPersonData(name, surname, age) {
    personObject.name = name;
    personObject.surname = surname;
    personObject.age = age;

    personObject.nameLength = name.length;
    personObject.surnameLength = surname.length;
    personObject.ageLength = age.length;

    if (personObject.nameLength > 5 || personObject.surnameLength > 5 || personObject.age > 5) {
        const defaultObjectBtn = document.createElement('button');
        defaultObjectBtn.innerText = 'Przywróc obiekt do stanu pierwotnego';
        document.body.append(defaultObjectBtn, document.getElementById('root'));

        defaultObjectBtn.addEventListener('click', () => {
            personObject = createObject();

            console.log(personObject);
        })
    }

    console.log(personObject);
}

setPersonData('Marcin', 'Bugaj', 12);
setPersonData('Tomasz', 'Bugaj', 27);
