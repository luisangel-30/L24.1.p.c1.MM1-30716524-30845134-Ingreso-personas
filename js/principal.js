import CL_persona from "./CL_persona.js";
import CL_procesar from "./CL_procesar.js";

let perso1 = new CL_persona("Mary", 150);
let perso2 = new CL_persona("Jose", 135);
let perso3 = new CL_persona("Carlos", 160);
let perso4 = new CL_persona("Pedro", 75);

let procesar = new CL_procesar();

procesar.procesarpersona(perso1);
procesar.procesarpersona(perso2);
procesar.procesarpersona(perso3);
procesar.procesarpersona(perso4);

let salida = document.getElementById("salida");

salida.innerHTML=`
<br> Monto del ingreso menor: ${procesar.devolvermenor()}$
<br> Ingreso promedio: ${procesar.promedio()}$

`