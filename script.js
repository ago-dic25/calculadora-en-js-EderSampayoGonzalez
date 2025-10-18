let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");

let suma = document.getElementById("suma");
let resta = document.getElementById("resta");
let multiplicar = document.getElementById("multiplicar");
let dividir = document.getElementById("dividir");
let limpiar = document.getElementById("limpiar");

let output = document.getElementById("resultado");
let historial = document.getElementById("historial")

//console.log(input1, input2, suma, resta, multiplicar, dividir);
console.log(output, historial);

//Regresa false si alguno de los inputs está vacio
function validarCamposNoVacios(num1, num2){
    let validar = isNaN(num1) || isNaN(num2);
    if (validar){
        alert("Llene los dos campos para poder operar.");
    }
    return !validar;
}

function agregarLog(N, M, res, operador){
    let log = document.createElement('li');
    log.innerText = N + " " + operador + " " + M + " = " + res;
    historial.appendChild(log)
}

function agregarResultado(N){
    output.textContent = N;
}

suma.addEventListener('click', function(){
    let num1 = parseFloat(input1.value);
    let num2 = parseFloat(input2.value);

    if(validarCamposNoVacios(num1, num2)){
        resultado = num1 + num2;
        agregarResultado(resultado);
        agregarLog(num1, num2, resultado, "+")
    }
});

resta.addEventListener('click', function(){
    let num1 = parseFloat(input1.value);
    let num2 = parseFloat(input2.value);

    if(validarCamposNoVacios(num1, num2)){
        resultado = num1 - num2;
        agregarResultado(resultado);
        agregarLog(num1, num2, resultado, "-")
    }
});

multiplicar.addEventListener('click', function(){
    let num1 = parseFloat(input1.value);
    let num2 = parseFloat(input2.value);

    if(validarCamposNoVacios(num1, num2)){
        resultado = num1 * num2;
        agregarResultado(resultado);
        agregarLog(num1, num2, resultado, "*")
    }
});

dividir.addEventListener('click', function(){
    let num1 = parseFloat(input1.value);
    let num2 = parseFloat(input2.value);

    if (num2 == 0){
        alert("No se puede dividir entre cero");
    }
    else if(validarCamposNoVacios(num1, num2)){
        resultado = num1 / num2;
        agregarResultado(resultado);
        agregarLog(num1, num2, resultado, "/")
    }
});

limpiar.addEventListener('click', function(){
    input1.value = null;
    input2.value = null;
    output.innerText = "resultado:";
});