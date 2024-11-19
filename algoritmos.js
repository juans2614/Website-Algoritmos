//1.Algoritmo que realiza la suma entre 2 valores integrados por el usuario
function suma(){
    //declaracion de las variables necesarias para este algoritmo
    let A;
    let B;
    let suma;

    //solicito los valores al usuario
    A = parseInt(prompt(' Ingrese el primer valor a sumar'));
    B = parseInt(prompt(' Ingrese el segundo valor a sumar'));

    //realizar operacion
    S = A + B;

    //Mostrar el resultado
    console.log(" El resultado de la suma es:" + S);
    alert(" El resultado de la suma es:" + S);
}


// 2. Algoritmo que determina la suma, resta, multiplicacion y division entre 2 valores ingresados por el usuario

function opBasicas(){
    //declaracion de las variables necesarias para este algoritmo
    let A;
    let B;
    let C;
    let D;
    let E;
    let F;
    let G;
    let H;
    let suma;
    let resta;
    let multiplicacion;
    let division;
    
    //solicito los valores al usuario

    A = parseInt(prompt(' Ingrese el primer valor para sumar'));
    B = parseInt(prompt(' Ingrese el segundo valor a sumar'));
    C = parseInt(prompt(' Ingrese el primer valor para restar'));
    D = parseInt(prompt(' Ingrese el segundo valor a restar'));
    E = parseInt(prompt(' Ingrese el primer valor para multiplicar'));
    F = parseInt(prompt(' Ingrese el segundo valor a multiplicar'));
    G = parseInt(prompt(' Ingrese el primer valor para dividir'));
    H = parseInt(prompt(' Ingrese el segundo valor a dividir'));

    //realizar operacion

    suma = A + B;
    resta = C - D;
    multiplicacion = E * F;
    division = G / H;

    //Mostrar el resultado

    console.log(" El resultado de la suma es:" + suma);
    alert(" El resultado de la suma es:" + suma);

    console.log(" El resultado de la resta es:" + resta);
    alert(" El resultado de la suma es:" + resta);

    console.log(" El resultado de la multiplicacion es:" + multiplicacion);
    alert(" El resultado de la multiplicacion es:" + multiplicacion);

    console.log(" El resultado de la division es:" + division);
    alert(" El resultado de division es:" + division);

}

// 3. realizar un algoritmo que determine el cuadrado de un numero ingresado por el usuario.
    
function camNumeracion(){

    let A;
    let B;

    A = parseInt(prompt('Ingrese valor para calcularlo:'));
    B = parseInt(prompt('Ingrese valor para calcularlo:'));
    

    M = A * B;

    console.log("El valor ingresado es:" + M);
    alert("El valor ingresado es:" + M );
}
// 4. realizar un algoritmo que determine el area de un triangulo apartir de la base y altura ingresadas por el usuario.
 
function aTriangulo(){

    let base;
    let altura;

    base = parseInt(prompt('Ingrese el numero de la base'));
    altura = parseInt(prompt('Ingrese el numero de la altura'));

    M = (base * altura) /2;

    console.log("El area del triangulo" + M)
    alert ("El area del triangulo es:" + M)
}
// 5. realizar un algoritmo que determine kilometros los pulgadas y metros de un valor dado en centimetros.
function conversionUnidades(){

    let M, P, CM, KM = 0

    alert("Este algoritmo convierte en centimetros, pulgadas y kilometros un valor dado en metros")

    M = parseInt(prompt("Ingrese el valor en metros a convertir"))

    P = M * 39.37;
    CM = M * 100;
    KM = M / 1000;

    alert(M + " metros en pulgadas son: " + P);
    alert(M + " metros en centimetros son: " + CM);
    alert(M + " metros en kilometros son: " + KM);

}

// 6. realizar un algoritmo que pregunte al usuario a que moneda quiere convertir al peso colombiano entre dolar, euro,llenes con swich case

function conversionMoneda() {

//Objeto como dato de aprtida
let tasaCambio = {
    USD : 0.00023,
    EUR : 0.00024,
    YEN : 0.035,
}

alert("Realiza la conversión de dinero en pesos Colombianos a dolares, euros y yenes");

let cantidadPesos = parseFloat(prompt("Ingrese la cantidad a convertir"));
let tasa = parseInt(prompt("Seleccione la divisa a cambiar: USD = 1, EUR = 2, YEN = 3"));
let conversion;
switch (tasa) {
    case 1:
        conversion = cantidadPesos * tasaCambio.USD;
        alert(cantidadPesos + " Pesos Colombianos son " + conversion + "Dolares");
        break;
    case 2:
        conversion = cantidadPesos * tasaCambio.EUR;
        alert(cantidadPesos + " Pesos Colombianos son " + conversion + "Euros");
    case 3:
            conversion = cantidadPesos * tasaCambio.YEN;
            alert(cantidadPesos + " Pesos Colombianos son " + conversion + "Yenes");
        
        break;

    default:
    alert("Tase de cambia no permitida");
        break;
}

}



// 7. algoritmo si un numero es par o impar 

function paroImpar() {

let X = 0;

alert("Determinar si un número es par o impar");

X = parseInt(prompt("Ingrese el número a verificar"));

if (X % 2 === 0){
    alert(X + " es un número par");
}else{
    alert(X + " es un número impar");
}


}


// 8. algoritmo que determine el amyor entre 2 numeros ingresados por el usuario :)iffffff

function entreDosNum(){

alert ("Este algoritmo determina el mayor entre dos numeros")

let numero1 = 0
let numero2 = 0

numero1 = parseFloat(prompt("Ingrese el primer numero"));
numero2 = parseFloat(prompt("Ingrese el segundo numero"));

if (numero1 === numero2){
    console.log("El numero es igual" + numero1 === numero2)
    alert("El numero es igual")
}

else if (numero1 > numero2) {
    console.log ("El numero mayor es: " + numero1);
    alert ("El numero mayor es " + numero1)
}else {
    console.log("El numero mayor es: " + numero2)
    alert ("El numero mayor es " + numero2)
}


}


// 9.algoritmo que determine el menor entre 3 numeros 

function numMenor(){

    alert ("Este algoritmo determina el menor entre tres numeros")
    let numero1 = 0
    let numero2 = 0
    let numero3 = 0

    numero1 = parseFloat(prompt("Ingrese el primer numero"));
    numero2 = parseFloat(prompt("Ingrese el segundo numero"));
    numero3 = parseFloat(prompt("Ingrese el tercer numero"));

    let menor 

    if (numero1 < numero2 && numero1 < numero3) {
        menor = numero1;
    } else if (numero2 < numero1 && numero2 < numero3){
        menor = numero2;
    }else{
        menor = numero3;
    }   
    alert ("El numero menor es " + menor);

}


// 10. el colegio abc requiere un sistema que le permita validad x estudiante si aprovo o reprovo una materia teniendo en cuenta 9 notas del 1-10 y se aprueba con una nota de 6.1

function validarnotascol(){
let sumanotas = 0; 
let cantidadnotas = 0;
for ( let i = 0; i <= 8; i++){
let nota = parseFloat(prompt("ingrese sus notas" ));
sumanotas = nota + sumanotas
no = 0
}
let promedio = sumanotas / 10

if (promedio < 6.1){
console.log("reprobaste la materia" + promedio);
alert("reprobaste la materia" + promedio);
} else {
console.log("aprovo la materia" + promedio);
alert("aprovo la materia" + promedio);
}

}


// 11. un indivuduo decide invertir su capital en un banco y requieresaber cuanto dinero ganara despues de n numero de años teniendo en cuenta que el banco paga un interes mensual de 0,7%

function invcapital(){
const porcentaje = 8.4;
let yearsdeinv = 0 ;
let cantidadcapital = 0;
let resultado = 0;
let resulfinal = 0 ;
yearsdeinv = parseFloat(prompt("ingrese los años que quiere dejar su dinero" ));
cantidadcapital = parseFloat(prompt("ingrese la cantidad que quiere invertir"));
resultado= porcentaje * yearsdeinv;
resulfinal = resultado * cantidadcapital;
console.log("su inversion final es"+ resulfinal);
alert("su inversion final es"+ resulfinal); 
}
