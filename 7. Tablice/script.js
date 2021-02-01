// zadanie 1 

const tab = [1,2,3,4,5,6,7,"javaScript"];
console.log(tab);

//zadanie 2

const tab = [1,2,3,4,5,6,7];

// 1
console.log(tab[0], tab[1]);

// 2 
console.log(tab[tab.length-1]);

// 3
for(let i=0; i<tab.length;i++)
  {
    console.log(tab[i]);
  }
 
 // 4 
 for(let i=0; i<tab.length;i+=2)
  {
    console.log(tab[i]);
  }
  
  // 5

for(let i=0; i<tab.length;i++)
  {
   if(typeof tab[i] == "string") console.log(tab[i]);
  }
  
  //6
  for(let i=0; i<tab.length;i++)
  {
   if(typeof tab[i] == "number") console.log(tab[i]);
  }
  
  // zadanie 3
  
  const tab = [1,2,3,4,5,6,7];
  
//1
let suma=0;

for(let i=0; i<tab.length;i++)
  {
    suma+=tab[i];
  }
console.log(suma);

//2
const tab = [1,2,3,4,5,6,7];
let suma=0;

for(let i=0; i<tab.length;i++)
  {
    suma-=tab[i];
  }
console.log(suma);

//3
const tab = [1,2,3,4,5,6,7];
let suma=0;

for(let i=0; i<tab.length;i++)
  {
    suma+=tab[i];
  }
console.log(suma/tab.length);

//4
const tab = [1,2,3,4,5,6,7];

for(let i=0; i<tab.length;i++)
  {
    if(tab[i]%2==0) console.log(tab[i]);
  }

//5
const tab = [1,2,3,4,5,6,7];

for(let i=0; i<tab.length;i++)
  {
    if(tab[i]%2!=0) console.log(tab[i]);
  }

//6
const tab = [1,2,3,4,5,6,7];
let najwieksza = tab[0];

for(let i=1; i<tab.length;i++)
  {
    if(tab[i]>najwieksza) najwieksza=tab[i];
  }
console.log(najwieksza);

//7
const tab = [1,2,3,4,5,6,7];
let najmniejsza = tab[0];

for(let i=1; i<tab.length;i++)
  {
    if(tab[i]<najmniejsza) najmniejsza=tab[i];
  }
console.log(najmniejsza);

//8
const tab = [1,2,3,4,5,6,7];

for(let i=tab.length-1; i>=0;i--)
  {
    console.log(tab[i]);
  }


// zadanie 4
const tab = [1,2,3,4,5,6,7];

function sumowanie(tablica){
  let suma=0;
  
  for(let i=0; i<tablica.length; i++) {
      suma+=tablica[i];
    }
  console.log(suma);
}

sumowanie(tab);


//zadanie 5

const tab = [1,2,3,4,5,6,7];

function srednia(tablica)
{
  let suma=0;
  
  for(let i=0; i<tablica.length; i++) 
    {
      suma+=tablica[i];
    }
  
  for(let i=0;i<tablica.length;i++)
    {
      console.log(tablica[i]*(suma/tablica.length))
    }
}

srednia(tab);

// zadanie 6

const tab = [1,2,3,4,5,6,7];

function srednia_parzystych(tablica)
{
  let suma=0;
  let l_parzystych=0
  
  for(let i=0; i<tablica.length; i++) 
    {
     if(tab[i]%2==0) 
     {
       suma+=tablica[i];
       l_parzystych++;
     }
    }
  console.log(suma/l_parzystych);
}

srednia_parzystych(tab);


//zadanie 7

const tab = [7,2,11,4,100,6,7];

function sortowanie(tablica)
{
  tablica.sort((a, b) => a - b);
}

sortowanie(tab);
console.log(tab);


//zadanie 8

const tab = [7,2,11,4,100,6,7];
const tab2 = [1,2,14,4,1,7];

function funkcja(tablica, tablica2)
{
  sumaind = tablica + tablica2;
  return sumaind;

}

console.log(funkcja(tab, tab2));


// zadanie 9

const tab = [7,2,11,4,100,6,7];


function odwrotnyznak(tablica)
{
  odwtab = new Array(tablica.length);
  for(let i=0; i<tablica.length;i++)
    {
      odwtab[i]=tablica[i]*(-1);
      
    }
  return odwtab;
}

console.log(odwrotnyznak(tab));


  
