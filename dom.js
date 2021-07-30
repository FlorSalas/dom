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

    // let uno= prompt("ingrese la primera medicion de temperatura")
    // let dos= prompt("ingrese la seguda medida de temperatura")

    // let promedio= promediado(this, that) => Math.floor(this,that)
    
    // console.log(promedio(uno,dos))
