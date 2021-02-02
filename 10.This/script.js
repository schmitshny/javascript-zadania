//zadanie 1

function Person(imie, nazwisko, wiek, kraj, miasto) {
    this.imie = imie;
    this.nazwisko = nazwisko;
    this.wiek = wiek;
    this.kraj = kraj;
    this.miasto = miasto;
    this.ulubioneDania = [];

    this.wyswietlDane = function () {
        console.log(`imie: ${this.imie}, nazwisko: ${this.nazwisko}, wiek: ${this.wiek}, kraj: ${this.kraj}, miasto: ${this.miasto}`);
    }

    this.zwiekszWiek = function () {
        ++this.wiek;
    } 
}
const person = new Person('Marcin', 'Bugaj', 27, 'Polska', 'Kraków');
const person2 = new Person('Arnold', 'Bugaj', 20, 'Austria', 'Wiedeń');

person.wyswietlDane();
person2.zwiekszWiek();
person2.zwiekszWiek();
person2.zwiekszWiek();
console.log(person2.wiek);

//zadanie 2

Person.prototype.dodajUlDanie = function (name) {
    this.ulubioneDania.push(name);
}

Person.prototype.pokazUlDania = function () {
    console.log("Ulubione Dania: " + this.ulubioneDania.join(', '))
}

person.dodajUlDanie('Bigos');
person.dodajUlDanie('Fasolka');
person.pokazUlDania();


//zadanie 3

function kalkulator(a,b)
{
    
    this.a=a;
    this.b=b;
  
  
     this.dodaj = function ()
    {
        return (this.a+this.b)
    }
         this.odejmij = function ()
    {
        return (this.a-this.b)
    }
       this.pomnoz = function ()
    {
        return (this.a*this.b)
    }
       this.podziel = function ()
    {
         if(this.b==0) console.log("nie dziel przez zero")
         
        else return (this.a+this.b)
    }
  
}

const calc1= new kalkulator(5,0);
const calc2 = new kalkulator(3,88);

console.log(calc1.dodaj());
console.log(calc2.odejmij());
console.log(calc1.podziel());
