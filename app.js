let titulo = document.querySelector('h1');//h1 se utiliza para modificar el titulo en h1en el html
titulo.innerHTML = 'Hora del Desafío';

/*3.Crea una función que muestre en la consola el mensaje El botón fue clicado siempre que se presione el botón Console.

En el index.html , agregamos en el onclick el siguiente código:
<button onclick="mostarMensajeEnLaConsola()" class="button">Console</button>
*/

function mostarMensajeEnLaConsola() {
    console.log('El botón fue clicado!')

}
/*4.Crea una función que se ejecute cuando se haga clic en el botón "prompt", preguntando el nombre de una ciudad de Brasil. Luego, muestra una alerta con el mensaje concatenando la respuesta con el texto: "Estuve en {ciudad} y me acordé de ti".

En el index.html , agregamos en el onclick el siguiente código:

<button onclick="mostrarAlerta()" class="button">Alert</button>
*/
function mostrarAlerta(){
    let ciudad = prompt('Dame el nombre de alguna ciudad de México:');
    alert('Estuve en ' + ciudad +' y me acorde de ti.');
}

/*5.Crea una función que muestre una alerta con el mensaje: "Amo JS" siempre que se presione el botón "Alerta".

En el index.html , agregamos en el onclick el siguiente código:

<button onclick="mostarAlerta()" class="button">Alert</button>*/

function mostrarAlert(){
    alert('AMO JS');
}

/*
6.Al hacer clic en el botón "suma", pide 2 números y muestra el resultado de la suma en una alerta.

En el index.html , agregamos en el onclick el siguiente código:

 <button onclick="sumaDosNumeros()" class="button">Suma</button>*/

 function sumaDeDosNumeros(){
    let primerNumero =parseInt( prompt ('Dame el primer número para la suma'));
    let segundoNumero=  parseInt(prompt ('Dame el segundo número para la suma'));
    let resultado = primerNumero + segundoNumero;
    alert(`La suma de los números es: ${resultado}`);
    
 }