

/*
for (let cont = 1; cont<=50; cont++) {
    console.log(cont);
    
}

for (let cont = 10; cont >0 ; cont--) {
    console.log(cont);
    
}
*/


let valorInvestimento;
let numAnos;
let juro;
let montante;
let idade= parseInt(prompt("Digite sua idade"));
let taxadejuros;
console.log(taxadejuros)

if (idade<=17) {
    taxadejuros=0.06;

}else{
    taxadejuros=1.1;
}
    console.log(`Sua taxa de juros é ${taxadejuros}`)



//Laços for, while, Do while( break e continue)    

 /*
for ( cont=1; cont < 3; cont++) {
    valorInvestimento= parseInt(prompt("valor do investimento"));
    if (valorInvestimento===0) {
        break
    }
    numAnos=parseInt(prompt("numero de anos"));
    juros= valorInvestimento*numAnos*taxadejuros;
    montante= valorInvestimento + juros;
    console.log(montante); 
}
*/

/*
while (true) {
    valorInvestimento= parseInt(prompt("valor do Investimento"));
    if (valorInvestimento===0 ) {
        break;
    }
    numAnos=parseInt(prompt("numero de anos"));
    juros= valorInvestimento*numAnos*taxadejuros;
    montante= valorInvestimento + juros ;
    console.log(montante);
}
*/


/*
do {
    valorInvestimento= parseInt(prompt("valor do Investimento"));
    if (valorInvestimento===0) {
        break
    }
    numAnos=parseInt(prompt("numero de anos"));
    juros= valorInvestimento*numAnos*taxadejuros;
    montante= valorInvestimento + juros ;
    console.log(montante);
} while (valorInvestimento != 0);
*/


/*
for (let i = 1; i <=20 ; i++) {
    if (i % 2=== 1) {
        continue
    }
    console.log(i)
    
}
*/

//Desafio 1
/*
for (let i= 1; i <= 50; i++) {
    
    console.log(`${i} - R$ ${i * 1.99}`);
    
}
*/

//Desafio 2

let temp;
let somatemp=0
let numTemp=0;

while (true) {
    temp=parseInt(prompt("Informe a temperatura"));
    if (temp === 0) {
        break;
    }
    somatemp += temp;
    numTemp += 1;    
}
console.log(somatemp/numTemp);
