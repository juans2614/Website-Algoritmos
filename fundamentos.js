//tipos de datos primitivos
let nombre = " Juan Sebastian"; // Declaramos e inicializamos la variable nombre
let edad = 21;
let mayorEdad = true;
let vacio =null;
let xyz;

console.log(typeof nombre );
console.log(typeof edad);
console.log(typeof mayorEdad);
console.log(typeof vacio);
console.log(typeof xyz);

//tipos de datos complejos

let frutas = ['mango, limon, manzana']; //SERA DE TIPO OBJETC ARRAY
console.log(typeof frutas);

let auto = {
    marca:'audi',
    modelo: 2024,
    color:'azul',
    placa:'PBO-O29',
    tipo:'camioneta',
    unicoDueño: true,
}

console.log(typeof auto);

//Concatenando variables en mensaje

console.log(' Hola '+ nombre + ' Tienes ' + edad + ' Años');

// ESTRUCTURAS CONDICIONALES

console.log('---------------');

let calificacion = 70;

if(calificacion>= 90){
    console.log(' Buen trabajo ' + nombre + ' Su calificacion fue ' + calificacion);
}
else if(calificacion>= 70){
    console.log(' Aprobaste ' + nombre + ' su nota fue ' + calificacion);
}
else if(calificacion>= 50){
    console.log(' Reprobaste ' + nombre + ' tu nota fue ' + calificacion);
}
else{
    console.log(' Perdedor ' + nombre + ' su cochinada de nota es ' + calificacion);
}

let dia = ' Jueves';

switch (dia) {
    case ' Lunes':
            console.log(' Empezando semana ')
        break;
    case ' Martes':
            console.log(' Peor que el lunes ')    
        break;
    case ' Miercoles':
            console.log(' Mitad de semana ')    
        break;
    case ' Jueves':
            console.log(' Juernes ')
        break;    
    case ' Viernes':
            console.log(' Que no me esperen en la casa')
        break;
    case ' Sabado':
            console.log(' Hoy me enloquesco ')
        break;    
    case ' Domingo':
            console.log(' Todos a reflexionar ')
        break;      
    
    default:
        break;
}

//ESTRUCTURAS DE BUCLES

let numero = 1;

while(numero <= 10){
    console.log(' Ahora el numero es: ' + numero);
    numero ++;
}

//let i = 10;

for(let i = 100; i >= 0; i = i - 10){
    console.log(' Este es el numero' + i)
}

//Funciones

function suma(valor1, valor2){
    return valor1 + valor2;
}

let resultado = suma(8, 24);
console.log(resultado);