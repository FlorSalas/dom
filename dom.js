/*
      0) En base al siguiente HTML, mostrar por consola el texto de los siguientes elementos:

	a) El primer span*/

    // console.log(document.querySelector("span").innerText)

	/*b) El primer span con clase “guayerd”*/

    // console.log(document.querySelector("span.guayerd").innerHTML)

	/*c) El span con id “hola”*/

    // console.log(document.querySelector("#hola").innerText)

	/*d) Todos los span*/

    // document.querySelectorAll("span").forEach(texto=>console.log(texto.innerText))
    
	/*e) Todos los elementos  con clase “guayerd”*/

    // document.querySelectorAll(".guayerd").forEach(element=>console.log(element.innerText))

	/*f) Todos los span con clase “guayerd”.*/

    // document.querySelectorAll("span.guayerd").forEach(uno=>console.log(uno.innerText))

	/*g) Todos los span y párrafos.*/

    // document.querySelectorAll("span,p").forEach(part=>console.log(part.innerText))

/*
    1) Hacer un HTML nuevo con 1 titulo H1 sin clases ni ids, con 5 párrafos, de los cuales los dos primeros no tendrán ninguna clase ni id, los 2 siguientes tendrán la clase “rojo” , y el último id “Azul”.

    /*a) Al ID azul cambiarle el texto por “Azul”.*/

    // document.querySelector(".azul").innerText = "Azul"

    /*b) Al primer párrafo cambiarle el texto por “Verde”.*/

    // document.querySelector("p").innerText="Verde"

    /*c) A los párrafos de la clase rojo cambiarles el texto por “Rojo”.*/

    // document.querySelectorAll("p.rojo").forEach(parr=>parr.innerText ="Rojo")

    /*d) A todos los párrafos agregarles un “!” al final del texto.*/

    // document.querySelectorAll("p").forEach(todos=> todos.innerText= `${todos.innerText}!`) 

    /*e) A todos los elementos (párrafos y título) Agregarles un “*” al principio del texto.*/

    // document.querySelectorAll("h1, p").forEach(esto=>esto.innerText = `*${esto.innerText}`)

/*
    2) Crear una función flecha que en base a 2 datos de temperatura, indique la temperatura media (Es decir, el promedio de ambas). Mostrar el resultado con un mensaje en el HTML. Por ejemplo en un párrafo, que indique: “La temperatura media es ….”. */

    // let uno= parseInt(prompt("ingrese la primera medicion de temperatura"))
    // let dos= parseInt(prompt("ingrese la seguda medida de temperatura"))
    // let promedio= ((num1, num2) => (num1+num2)/2)
    
    // document.querySelector(".algo").innerHTML=`el promedio de los numeros ingresados es ${(promedio(uno,dos))}`


/* 3) Crear una función flecha que solicite al usuario que elija entre las estaciones del año (Invierno, verano, primavera, otoño) y mostrar una imagen que haga referencia a la estación elegida.*/

// let choice=  (opcion) => {
// if (opcion==="invierno") document.querySelector(".algo").innerHTML= "<img src= 'descarga.jpg' alt=`imagen de ${elegido}`>"
// if(opcion==="otoño") document.querySelector(".algo").innerHTML= "<img src= 'otoño.jpg' alt=`imagen de ${elegido}`>"
// if(opcion==="primavera") document.querySelector(".algo").innerHTML= "<img src= 'primavera.jpg' alt=`imagen de ${elegido}`>"
// if(opcion==="verano") document.querySelector(".algo").innerHTML= "<img src= 'verano.jpg' alt=`imagen de ${elegido}`>"
// }

// en funciones flecha no es necesario poner el if como lo veniamos haciendo

// let elegido= prompt("Elija una estacion del año")

// choice(elegido)


/* 4) Crear una función flecha que calcule la edad del usuario. Luego mostrar en el html un mensaje personalizado indicando si es mayor o menor de edad.
*/

// let edad= (numero => 2021-numero)
// let nacimiento= parseInt(prompt("Ingrese su año de nacimiento"))
// let adulto="";

// if (edad>18){
    //adulto="mayor"
// }else{
//     adulto="menor"
// }

// document.querySelector(".algo").innerHTML= `usted tiene ${edad(nacimiento)}, es ${adulto} de edad`

/* 5) Crear una función flecha que solicite al usuario su nombre y su animal favorito (Dar 3 o 4 opciones). Mostrar por HTML un mensaje personalizado saludando a la persona y mostrando una foto de su animal favorito. */

// let nombre= prompt("Ingresa tu nombre")
// let animal= prompt("Elija entre estos animales: Delfines, Flamencos o Libelulas")

// document.querySelector(".algo").innerHTML= `bienvenido/a ${nombre}!! Esta es la foto de un ${animal} para que veas`
// document.querySelector(".this").src= `${animal}.jpg`

/* 6) Crear en el HTML un span con un ángulo del 0 al 360. Luego calcular su opuesto y mostrarlo en otro span. (Para calcular el opuesto se hace 360 - el ángulo. Por ejemplo: El opuesto de 90 es 270.) El mensaje debería ser:
Ángulo: 90
Opuesto: 270*/

// document.querySelector(".angulo").innerHTML= `el angulo opuesto a 77 grados es ${360-77}`

/* 7) Generación de mails empresariales. Le solicitamos al usuario su nombre, su apellido, su empresa y si su empresa es Argentina o no. Luego le mostraremos en el HTML un mensaje con su usuario nuevo:
nombre.apellido@empresa.com(.ar si es argentina).*/

// let nombre= prompt("Ingrese su nombre")
// let apellido= prompt("Ingrese su apellido")
// let empresa= prompt("Ingrese el nombre de su empresa")
// let nacionalidad= confirm("¿Es la empresa argentina?")

// if(nacionalidad){
// document.querySelector(".angulo").innerHTML= `Su mail es (${nombre + apellido + "@" + empresa + ".com" + ".ar"})`}
// else{
//     document.querySelector(".angulo").innerHTML= `Lamentamos informarle que el servicio no esta disponible en su pais `
// }


/* 8) En un restaurante tienen menú del día según el día de la semana.
a)  Crearemos una función flecha que reciba qué día de la semana es (Lunes a viernes) y mostraremos por HTML el menú con el nombre del plato y una imagen del mismo.
*/
// let dia= prompt("Para ver el menu del dia ingrese el nombre del dia de hoy")

// let choice=  (opcion) => {
// if (opcion==="lunes")
//     document.querySelector(".algo").innerHTML= `Hoy ${dia} el menu es milanesas con pure` 
//     document.querySelector(".this").src= `milanesas con pure.jpg`
// if(opcion==="martes")
//     document.querySelector(".algo").innerHTML= `Hoy ${dia} el menu es fideos con salsa` 
//     document.querySelector(".this").src= `fideos con salsa.jpg`
// if(opcion==="miercoles")
//     document.querySelector(".algo").innerHTML= `Hoy ${dia} el menu es pizza` 
//     document.querySelector(".this").src= `pizza.jpg`
// if(opcion==="jueves")
//     document.querySelector(".algo").innerHTML= `Hoy ${dia} el menu es hamburguesas con papas fritas` 
//     document.querySelector(".this").src= `Hamburguesas con papas fritas.jpg`
// if(opcion==="viernes")
//     document.querySelector(".algo").innerHTML= `Hoy ${dia} el menu es Pastel de papa` 
//     document.querySelector(".this").src= `Pastel de papa.jpg`
// }

// choice(dia)

/*b) Ahora además nos piden que coloquemos debajo del menú del día los precios a los platos que se piden a la carta. Realizarlo desde el javascript.*/

// document.querySelector(".algo").innerHTML= `Hoy ${dia} el menu es Pastel de papa`




// a


