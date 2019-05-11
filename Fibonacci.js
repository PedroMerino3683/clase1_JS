//Serie de Fibonacci
var number = 0;
var number2 = 1;
var sum = 0;
var iteraciones = 20;
var i = 0;
console.log(number);
console.log(number2);
do {
  sum = number + number2;
  number = number2;
  number2 = sum;
  console.log(sum);
  i++
}while(i<iteraciones);