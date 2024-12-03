//Saludar


function Saludar(){
    alert("Hola Usuario");
}

function opBasicas(){
    // Declaro las variables necearias para la ejecucuión
   let A,B,S,R,M,D = 0;
    // Nnotifico el usuario que realiza este algoritmo
   alert("Este algoritmo realiza una suma, resta, multiplicación y divison entre dos valores ingresados")
    // Capturar los datos de entrada o inputs
   A = parseInt(prompt("Por favor ingrese el primer valor"));
   B = parseInt(prompt("Por favor ingrese el segundo valor"));
    // Realizar el proceso
   S = A + B;
   R = A - B;
   M = A * B;
   D = A / B;

   // Dar el resultado
   alert("El resultado de la suma es: " + S);
   alert("El resultado de la resta es: " + R);
   alert("El resultado de la multiplicación es: " + M);
   alert("El resultado de la división es: " + D);

}

function areaTriangulo(){
    let B,H,A = 0;

    alert("Este algoritmo calcula el área de un triangulo a partir de su base y su altura")

    B = parseInt(prompt("Ingrese el valor Base"))
    H = parseInt(prompt("Ingrese el valor Altura"))

    A = (B*H)/2

    alert("El área de triangulo es: " + A)
}

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

// Algoritmos condicionales

function servicioMilitar(){
    let edad = 0;
    let genero = "";
    let hijoUnico = "";

    alert("Algoritmo que determina si eres apto para prestar el servicio militar obligatorio");

    edad = parseInt(prompt("Por favor ingrese su edad"));
    genero = prompt("Por favor ingrese su género: F- femenino o M- masculino");
    hijoUnico = prompt("Por favor ingrese SÍ o NO, de ser único");

    if (edad>=18 && edad<=26) {
        
        if (genero === "M") {

            if (hijounico === "NO") {

                alert("Eres apto para prestar el sevicio militar");

            }else{
                alert("No eres apto para prestar el servicio militar");
            }

        }else{
            alert("No eres apta para prestar servicio militar")
        }

    }else{
        alert("No es apto por su edad");
    }
}

function mayorDosN(){

    let N1,N2 = 0;

    alert("Valida el mayor de dos números");

    N1 = parseInt(prompt("Ingrese el primer valor"));
    N2 = parseInt(prompt("Ingrese el segundo valor"));

    if (N1 === N2) {
        alert("No hay ningun número mayor. Ambos son iguales");
    }else if(N1>N2){
        alert(N1 + " es mayor que " + N2);
    }else{
        alert(N2 + " es ayor que" + N1);
    }

}


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


function rangoNumeros(){

    alert("Imprimir en consola los números existentes entre un valor inicial y un valor final");

    let inicio = parseInt(prompt("Ingrese el valor de partida"));
    let fin = parseInt(prompt("Ingrese el valor de final"));

    let contador = inicio;

    while(contador <= fin) {
        console.log(contador);

        contador ++;
    }

    alert("En consola mostraremos lo número que hay entre " +inicio + " y " + fin );


}

function sumaRango(){
    alert("Súma los valores entre un rango ingresado");

    let inicio = parseInt(prompt("Ingrese el punto de partida"));
    let fin = parseInt(prompt("Ingrese el punto de final"));

    let suma = 0;

    contador = inicio;

    while(contador <= fin){
        suma += contador;

        contador ++;
    }

    alert("La suma de los numeros del " + inicio + " al " + fin + " es: " + suma );

}

function esPrimo(){
    alert("Determina si un n umero es primo");

    let numero = parseInt(prompt("Ingrese el número"));

    if(numero<=1){
        alert(numero + " no es un número primo");
    }

    for(let i = 2; i <= numero/2; i++){

        if(numero % i === 0){
            alert(numero + "No es un número primo");
            return;
        }

    }

    alert(numero + " si es un número primo");

}

function conversionMoneda() {
    
    //Objeto como dato de aprtida
    let tasaCambio = {
        USD : 0.00028,
        EUR : 0.00024
    }

    alert("Realiza la conversión de dinero en pesos Colombianos a dolares y euros");

    let cantidadPesos = parseFloat(prompt("Ingrese la cantidad a convertir"));
    let tasa = parseInt(prompt("Seleccione la divisa a cambiar: USD = 1, EUR = 2"));
    let conversion;
    switch (tasa) {
        case 1:
            conversion = cantidadPesos * tasaCambio.USD;
            alert(cantidadPesos + " Pesos Colombianos son " + conversion + "Dolares");
            break;
        case 2:
            conversion = cantidadPesos * tasaCambio.EUR;
            alert(cantidadPesos + " Pesos Colombianos son " + conversion + "Euros");
            
            break;

        default:
        alert("Tase de cambia no permitida");
            break;
    }

}

function calcularPromedio(){
    alert("Este algoritmo determina el promedio de calificaciones ingresados por el usuario");

    let calificaciones = [];

    let cantidadNotas = parseInt(prompt("Ingrese la cantidad de calificaciones"));

    for (let i = 1; i <= cantidadNotas; i++) {
        calificaciones.push(parseFloat(prompt("Ingrese la calificacion # " + i + " :")));      
    }

    let sumaCalif = 0;
    for(let calificacion of calificaciones){
        sumaCalif += calificacion;
    }

    let promedio = sumaCalif/calificaciones.length;

    alert("El promedio de las calificaciones es: " + promedio);
}

function consultarPeli(){

    alert("Este algoritmo muestra la información de una pelicula elegida");

    let peliculas = [
        {
            titulo : "El padrino",
            director : "Nombre del director",
            anio : "1972",
            genero: "Drama"
        },
        {
            titulo : "Interestellar",
            director : "Nombre del director",
            anio : "2014",
            genero: "Ficción"
        },
        {
            titulo : "Harry Potter",
            director : "Nombre del director",
            anio : "2008",
            genero: "Ficción"
        }

    ];

    let nombrePelicula = prompt("Por favor ingrese el nombre de la pelicula");

    let infoPelicula = "";

    for(let pelicula of peliculas){
        
        if(pelicula.titulo === nombrePelicula){
            infoPelicula = "Titulo: " + pelicula.titulo + "\n" + 
                            "Director" + pelicula.director + "\n" + 
                            "Año:" + pelicula.anio + "\n" + 
                            "Genero" + pelicula.genero;
                break;
        }

    }

    if(infoPelicula !== ""){
        alert("La pelicula consultada tiene la información " + infoPelicula);
    }
    else{
        alert("La pelicula no se encuentra en nuestro sistema");
    }

}

// realizar un algoritmo que pregunte al usuario a que moneda quiere convertir al peso colombiano entre dolar, euro,llenes con swich case

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



// algoritmo si un numero es par o impar 

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


// algoritmo que determine el amyor entre 2 numeros ingresados por el usuario :)iffffff

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


//algoritmo que determine el menor entre 3 numeros 

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


//el colegio abc requiere un sistema que le permita validad x estudiante si aprovo o reprovo una materia teniendo en cuenta 9 notas del 1-10 y se aprueba con una nota de 6.1

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
    alert("reprobaste la materia" + promedio);
}

}


//un indibuduo decide invertir su capital en un banco y requieresaber cuanto dinero ganara despues de n numero de años teniendo en cuenta que el banco paga un interes mensual de 0,7%

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
