//zadanie 1

function getElements(param){
 let tags=[];
 for(let i = 0; i<param.length;i++)
   {
     tags.push(param[i].tagName);
   }
  console.log(tags);
}
const elements=document.getElementsByClassName('more-divs');
getElements(elements);

//zadanie 2

const sList=document.querySelector('ul.short-list');

function wyswietl(element)
{
  console.log(element.innerHTML);
  console.log(element.outerHTML);
  console.log(element.className);
  console.log(element.classList);
  console.log(element.dataset);
}

wyswietl(sList);

//zadanie 3

function x(){
  let element = document.getElementById('datasetCheck');
  console.log(element.dataset)
  let number1=Number(element.dataset.numberone)
   let number2=Number(element.dataset.numbertwo)
    let number3=Number(element.dataset.numberThree)
  console.log(number1+number2+number3);
  console.log(number1-number2-number3);
};

x();

//zadanie 4

document.getElementById('spanText').innerHTML = 'nowy tekst';

//zadanie 5

document.getElementById('spanText').className = 'nowaKlasa';


//zadanie 6

const div = document.getElementById("classes");
const classes = div.classList;

function wyswietl(klasa){
  var str="";
  
  klasa.forEach(className =>{
    console.log(className);
    str+='+${className}';
  });
  str=str.substring(1);
  
  console.log(str);
}

wyswietl(classes);

div.classList="";

console.log("usunieto wszystkie klasy");

//zadanie 7

const f = (elem) => {
  for(let el of [...elem]) if (!el.getAttribute('data-text')) el.setAttribute('data-text','text');
};

f(document.querySelectorAll('#longList>li'));

//zadanie 8

function makeObject(string)
{
  let obj = {
    newClass: string
  };
  return obj;
}

function odczyt(obj)
{
  let div=document.getElementById("myDiv");
  let newClass = obj.newClass;
  div.classList.add(newClass);
}

let myObj = makeObject("napis");
odczyt(myObj);

// zadanie 9

const div = document.getElementById('numbers');

const addClass=()=> {
  let params = Math.floor(Math.random()*10);
  
  if(params%2==0) div.className="even";
  else div.className="odd";
}

addClass();

//zadanie 10
function getValues(elements) {
    const result = [];

    elements.forEach((element) => {
       result.push(element.innerText);
    });

    return result;
}

console.log(getValues(document.querySelectorAll('#longList > li')));

//zadanie 11
function liNewValues(elements) {
    elements.forEach((element) => {
        element.dataset.oldValue = element.innerText;
        element.innerText = getRandomInt(0, 10);
    });

}

liNewValues(document.querySelectorAll('#longList > li'));




