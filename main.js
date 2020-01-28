alert('hola mundo!'); //Función para crear mensajes de alerta

var nombre = "Lucas Rincón";
var estatura = 170;
var concatenacion = nombre + " " + estatura;

var nombre2 = "Lks Rnc"
var edad = 23;

//document.write(concatenacion); Escribir en el html, sin fijar ubicación alguna

//Imprimir en elemento DIV 

var espacio = document.getElementById("espacio");
//espacio.innerHTML = concatenacion;
espacio.innerHTML = `<h1> Soy la caja de datos</h1> 
<h2> Mi nombres es: ${nombre}</h2>
<h3> Mi estatura es: ${estatura} cm</h3>`;
//La funcionalidad anteriormente empleada es el Template String
//Un detalle de ésta es que reemplaza completamente todo el contenido que ya se encuentre en el espacio designado
//Para no perder el contenido del espacio designado, se recomienda emplear el operador '+=', para la concatenación del contenido anterior con el nuevo

//Estructuras de control
if(estatura >= 190){
    espacio.innerHTML += `<h2> Eres una personal alta </h2>`;
}else{
    espacio.innerHTML += `<h2> Eres una persona con estatura promedio </h2>`;
}

//Bucle
for(var i=2000; i<=2020; i++){
    //Bloque de instrucciones
    if(i % 2 == 0){ //Condicional para números pares
        espacio.innerHTML += "<h2> Estamos en el año: " + i;
    }
}

//Funciones
var tiempo = document.getElementById("tiempo");
function muestraMiNombre(nombre2, edad){
    //Bloque de instrucciones
    tiempo.innerHTML += `<h2> Nuevo nombre es: ${nombre2}
    <h3> Mi edad es: ${edad}</h3>`;
}

//Para que se pueda ejecutar una función primero ésta debe ser invocada
//En la función anterior, se designador los parametros como variables locales, con el fin de no usar las variables globales
muestraMiNombre("Luuuuucas", 23);

//Función para imprimir

function mostrarDatos(cedulaCiudadania, telefono) {
    var data = `<h2>Número de cédula: ${cedulaCiudadania}</h2>
    <h3>Número de teléfono: ${telefono}</h3>
    `;
    return data;
}

function imprimirDatos() {
    var particula = document.getElementById("particula");
    particula.innerHTML = mostrarDatos("1090500477", "3012066150");
}

imprimirDatos();

//Variables con múltiples variables. Colección de datos

var letras = ['L', 'u', 'c', 'a', 's'];
alert(letras[3]);

document.write('<h3>Listado de letras</h3>');
for (i = 0; i < letras.length; i++) {
    document.write(letras[i] + '<br/>');
}