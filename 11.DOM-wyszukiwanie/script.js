//zadanie 1

const lists = document.getElementsByClassName('list');

//zadanie 2

function getTag(tag) {
  return document.getElementsByTagName(tag);
}

//zadanie 3

const list = document.getElementById('list');

//zadanie 4

function wyświetl(params) {
  params.forEach((param) => console.log(document.querySelectorAll(param)));
}

wyświetl(['li', 'ul', 'span', 'div.list span', 'div#spans span']);
