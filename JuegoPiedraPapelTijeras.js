//Juego de Piedra, Papel y Tijeras
let maquinaAux = Math.floor(Math.random() * 3) + 1;
let miOpc = Math.floor(Math.random() * 3) + 1;
let opciones = ["PIEDRA", "PAPEL", "TIJERAS"];
let maquinaOpc = opciones[maquinaAux - 1];
let piedra, papel, tijeras = 0;
miOpc = opciones[miOpc - 1];
console.log("LA OPCION DE LA MAQUINA ES >>> " + maquinaOpc);
console.log("LA OPCION DEL USUARIO ES >>> " + miOpc);

const validaGanador = (opcMaquina, opcUsuario) => {
  if(opcMaquina > opcUsuario){
    console.log("El usuario ha perdido esta partida. Sigue intentando :)");
  }else if(opcMaquina < opcUsuario){
    console.log("El usuario ha ganado esta partida. Bien jugado ¬¬");
  }else{
    console.log("Ha habido un empate :|");
  }
}

switch(maquinaOpc){
  case "PIEDRA":
    maquinaOpc = piedra = 0;
    papel = 1;
    tijeras = -1;
    break;
  case "PAPEL":
    maquinaOpc = papel = 0;
    tijeras = 1;
    piedra = -1;
    break;
  case "TIJERAS":
    maquinaOpc = tijeras = 0;
    piedra = 1;
    papel = -1;
    break;
  default:
    console.log("La opcion proporcionada no existe, favor de validar.");
}

if(miOpc === "PIEDRA"){
  miOpc = piedra;
}else if(miOpc === "PAPEL"){
  miOpc = papel;
}else{
  miOpc = tijeras;
}

validaGanador(maquinaOpc, miOpc);