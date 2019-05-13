//Pino de asteriscos
let profundidad = 10;
let asterisco = 1;
let i = 1;

const pintaCaracter = (n, renglon, caracter) => {
  for(let j = 0; j < n; j++){
    renglon += caracter;
  }
  return renglon;
}

do{
  let renglon = "";
  renglon = pintaCaracter(profundidad - i, renglon, " ");
  renglon = pintaCaracter(asterisco, renglon, "*");
  console.log(renglon);
  asterisco += 2;
  i++;
}while(i <= profundidad);