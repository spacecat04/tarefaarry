//const notas = [3, 5, 6, 4.6, 7];
//notas.forEach(function(){
  //  console.log("oi")
//});

const notas = [3, 5, 6, 4.6, 7];
let somaDasNotas = 0;
notas.forEach(function (notas){
    somaDasNotas += notas; 
});
const media = somaDasNotas / notas.length;
console.log(`A média das notas é ${media}.`);



