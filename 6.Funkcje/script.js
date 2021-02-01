// zadanie 1

function wypisz()
{
  console.log("Udało się");
}

wypisz();

// zadanie 2

function wypisz(x)
{
  console.log(x);
}

let y=20;

wypisz(y);

// zadanie 3

function tablica(var[] tab)
{
return tab;
}


//4
function wyświetl(napis) {
    let i = 0;

    const t = setInterval(() => {
        i++;
        console.log(napis)
        if (i >= 5) {
            clearInterval(t);
          console.log("koniec"); 
        }
    }, 3000)
    
   
}
var napis = "JavaScript"

wyświetl(napis);
