// zadanie 1
function Person(imie, nazwisko, wiek, kraj, miasto, język)
{
    this.imie = imie;
    this.nazwisko = nazwisko;
    this.wiek = wiek;
    this.kraj = kraj;
    this.miasto = miasto;
    this.język = język;
  
     this.zmienwiek = function (wiek)
    {
        this.wiek = wiek;
    }
       this.zmienmiasto = function (miasto)
    {
        this.miasto = miasto;
    }
  
}

const p1 = new Person('Marcin', 'Bugaj', 27, 'Poland', 'Kraków', 'polski');
const p2 = new Person('Tomasz', 'Las', 23, 'Poland', 'Połaniec', 'polski');
const p3 = new Person('Michał', 'Bugaj', 21, 'Poland', 'Kraków', 'polski');
const p4 = new Person('Karolina', 'Potok', 24, 'Poland', 'Kraków', 'polski');
const p5 = new Person('Katarzyna', 'Bugaj', 23, 'Poland', 'Kraków', 'polski');

console.log(p1.miasto);
p1.zmienmiasto("Schenefeld");
p5.zmienwiek(24);
console.log(p1.miasto);
console.log(p5.wiek);


//zadanie 2

function kalkulator()
{
  
     this.dodaj = function (a,b)
    {
        return (a+b)
    }
         this.odejmij = function (a,b)
    {
        return (a-b)
    }
       this.pomnoz = function (a,b)
    {
        return (a*b)
    }
       this.podziel = function (a,b)
    {
         if(b==0) console.log("nie dziel przez zero")
         
        else return (a+b)
    }
  
}

const calc1= new kalkulator();
const calc2 = new kalkulator();

console.log(calc1.dodaj(2,5));
console.log(calc1.odejmij(3,100));


//zadanie 3
