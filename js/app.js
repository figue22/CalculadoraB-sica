//Logica de la calculadora

document.addEventListener('DOMContentLoaded', () => {
// Variables
const resultado = document.querySelector('#resultado'); //Selecciona el elemento con el id resultado donde ira el resultado de la operacion
const numeros = document.querySelectorAll('.numeros'); //Selecciona todos los elementos con la clase numeros que son los botones de los numeros
const operadores = document.querySelectorAll('.operaciones'); //Selecciona todos los elementos con la clase operaciones que son los botones de los operadores
const igual = document.querySelector('#igual'); //Selecciona el elemento con el id igual que es el boton de igual
const borrarNumero = document.querySelector('#borrar'); //Selecciona el elemento con el id borrar que es el boton de borrar
const limpiarTodo = document.querySelector('#limpiar'); //Selecciona el elemento con el id limpiar que es el boton de limpiar
const punto = document.querySelector('#punto'); //Selecciona el elemento con el id punto que es el boton de punto

// Eventos
eventos();
function eventos() {
    // Evento para los botones de los numeros
    numeros.forEach(numero => {
        numero.addEventListener('click', agregarNumero);
    });

    // Evento para los botones de los operadores
    operadores.forEach(operador => {
        operador.addEventListener('click', agregarOperador);
    });

    // Evento para el boton de igual
    igual.addEventListener('click', calcularResultado);

    // Evento para el boton de borrar
    borrarNumero.addEventListener('click', borrar);

    // Evento para el boton de limpiar
    limpiarTodo.addEventListener('click', limpiar);

    // Evento para el boton de punto
    punto.addEventListener('click', puntoDecimal);

}


// Funciones
//Agregar el numero a la pantalla de resultado
function agregarNumero(e){
    //Quitamos el 0 inicial
    if(resultado.textContent === '0'){
        resultado.textContent = '';
    }
    //El contenido del resultado lo cambiamos por el contenido del boton que se presione
    resultado.textContent += e.target.textContent;
}

function agregarOperador(e){
    /*El contenido del resultado lo cambiamos por el contenido del boton que se presione
      Si el caracter anterior es otro operador, no se agrega el operador
    */
    if(resultado.textContent[resultado.textContent.length -1] === '+'){ //Si el ultimo caracter es un operador
        return; //No se agrega el operador
    }
    if(resultado.textContent[resultado.textContent.length -1] === '-'){ //Si el ultimo caracter es un operador
        return; //No se agrega el operador
    }
    if(resultado.textContent[resultado.textContent.length -1] === '*'){ //Si el ultimo caracter es un operador
        return; //No se agrega el operador
    }
    if(resultado.textContent[resultado.textContent.length -1] === '/'){ //Si el ultimo caracter es un operador
        return; //No se agrega el operador
    }

    resultado.textContent += e.target.textContent;
    
}

function calcularResultado(){
    const total = eval(resultado.textContent);
    resultado.textContent = total;

}

function borrar(){
    /*Elimina el ultimo caracter, silice recibe dos parametros, el primero es el inicio y el segundo es el final
     cuando el final es -1 se elimina el ultimo caracter, o corta hasta un caracter antes del final
    */
    resultado.textContent = resultado.textContent.slice(0, -1);
}

function limpiar(){
    //Limpiamos la pantalla de resultado
    resultado.textContent = '0';
}

function puntoDecimal(){
    let content = resultado.textContent;
    if(content[content.length-1] === '.' ){ //Si el ultimo caracter es un punto
        return; //No se agrega el punto
    }

    //Dividimos el contenido en partes separadas por los operadores
    let partes = content.split(/[\+\-\*\/]/);

    //Si la ultima parte contiene un punto
    if (partes[partes.length-1].includes('.')){
        return; //No se agrega el punto
    }

    //Si el ultimo caracter es un operador agrega un 0 antes del punto
    if(['+', '-', '*', '/'].includes(content[content.length - 1])){ 
        resultado.textContent += '0'; //Se agrega un 0 antes del punto
    }

    resultado.textContent += '.';
    
}
});

