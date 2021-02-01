//zadanie 1 

let x=9, y=6;

if(x>y) console.log(x)
else console.log(y);

//zadanie 2
let x=9, y=11, z=3;

if(x>y && x>z) console.log(x)
else if (z>y && z>x) console.log(z)
else console.log(y);

//zadanie 3

for(let i=0; i<10; i++)
  console.log("Lubie JavaScript");
  
// zadanie 4

let result =0;

for(let i=0; i<=10;i++)
  result +=i;

console.log(result);

// zadanie 5

let x = 10;

for(let i=0; i<=x;i++)
  {
    if(i%2===0) console.log(i + " - parzysta")
    else console.log(i + " - nieparzysta")
  }
  
 
 // zadanie 6
 
 
let n = 10;

for(let i = 0; i < n; i++){
    for(let j = 0; j < n; j++){
        console.log("i= " + i + ", j= " + j);
    }
}

// zadanie 7

for(let i = 0; i <= 100; i++){
    if (i % 3 === 0 && i % 5 === 0 ) {
        console.log("FizzBuzz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else {
        console.log(i);
    }
}

// zadanie 8

//////a

let x=5;

for(let i=1;i<=x;i++)
  {
    let string="";
    for(let j=1;j<=i;j++)
      {
        string+='*'
      }
    console.log(string);
  }
  
///// b
  
  
  for (let i = 0; i < 5; i++) {
    let string = '';

    for (let x = 0; x < 5 - i; x++) {
        string += ' ';
    }

    for (let y = 0; y < i + 1; y++) {
        string += ' ' + '*';
    }

    console.log(string);
}

////c

for (let i = 0; i < 5; i++) {
    let string = '';

    for (let x = 0; x < 5 - i; x++) {
        string += ' ';
    }

    for (let y = 0; y < (2 * i + 1); y++) {
        string += '*';
    }

    console.log(string);
}


////d
for (let i = 0; i < 5; i++) {
    let string = '';

    for (let x = 0; x < i + 1; x++) {
        string += '*';
    }

    for (let y = 0; y < 5 - (i + 1); y++) {
        string += (y + 1);
    }

    console.log(string);
}

console.log('-----');

for (let i = 0; i < 5; i++) {
    let string = '';

    for (let x = 0; x < (5 - i); x++) {
        string += "*";
    }

    for (let y = 0; y < 5 - (5 - i); y++) {
        string += 5 - ((5 - (5 - i)) - y);
    }

    console.log(string);
}





