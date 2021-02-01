// zadanie 1

const car ={
  marka:"Audi",
  rocznik: 1999,
  kolor :"Biały"
}

console.log(car.marka);
console.log(car.rocznik);
console.log(car.kolor);

// zadanie 2

const car ={
  marka:"Audi",
  rocznik: 1999,
  kolor :"Biały",
  
     zmienkolor: function (kolor) {
        this.kolor = kolor;
    }
}

car.zmienkolor("niebieski");
console.log(car.kolor);

//zadanie 3
const sumowanie ={
 suma:0,
 sumElTab: function (tablica) {
   let suma;
   for(let i=0;i<tablica.length;i++)
     {
       this.suma+=tab[i];
     }
    }
}

const tab = [1,2,3,4,5,6,7];

sumowanie.sumElTab(tab);
console.log(sumowanie.suma);

//zadanie 4

const car ={
  marka:"Audi",
  rocznik: 1999,
  kolor :"Biały"
}

for (const key in car) {
    console.log(key + ':' + car[key]);
}


//zadanie 5

const car ={
  marka:"Audi",
  rocznik: 1999,
  kolor :"Biały",
  wyposażenie :{
  klimatyzacja: true,
  abs: true
}
}

console.log(car.wyposażenie.klimatyzacja);


//zadanie 6

const car ={
  marka:"Audi",
  rocznik: 1999,
  kolor :"Biały",
  wyposażenie :{
  klimatyzacja: true,
  abs: true
}
}

car.przebieg=2000000;
car.Hello = function () {
    console.log('Hello');
}

car.Hello();
console.log(car.przebieg);

