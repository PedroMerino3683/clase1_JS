//Juego de FizzBuzz
var i = 0;
do {
  //i++   //sin incluir al cero
  if(i%3===0 && i%5===0){
    console.log(i + " - FizzBuzz")
  }else if(i%5 === 0){
    console.log(i + " - Buzz");
  }else if(i%3===0){
    console.log(i + " - Fizz")
  }
  i++;    //incluyendo al cero
}while(i<=15);