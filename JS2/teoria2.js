//Windows

    //open()
let ventana = window.open("url") //se abrira una venta
    //close()
        //cierra la ventana actual o que se llamo
    //closed
        //booleano que verifica si esta cerrada o no
    //stop
        //deja de cargar la web
    //alert
        //muestra un cuadro de alerta
        alert("")
    //print
        //abre cuadro de dialogo para imprimir
    //prompt
        //solicita un dato
    //confirm
        //booleano de verificacion, muestra un cuadro donde se debe responder si o no

    //screen
console.log(screen)
        //contiene todos los datos de la pantalla
    //screenLeft
        //junto a los demas nos indica la distancia del borde de la pagina y el borde de la pantalla
    //screenTop
    //scrollX
let scrollX = window.scrollX;
    alert(scrollX)
        //muestra cuantos px nos desplazamos en X
    //scrollY
        //lo mismo que el anterior solo que en el eje Y
    //scroll()
window.scroll(0, 100); 
        //primero eje X luego eje Y


//------Casi ni se usa
    //resizeBy()
        //redimenciona el tamaño de la ventana
    //resizeTo()
        //lo mismo que el anterior, este no es relativo
    //moveBy()
    //moveTo()


    //Objetos barprop
        //mostraran true o false si se ven estos elementos
    //locationbar
    //menubar
    //personalbar
    //scrollbars
    //statusbar
    //toolbar
//------

//Location
//informacion que nos devuelve la locacion

    //window.location.href
        //devuelve locacion
document.write(window.location.href);

var href = window.location.href;
document.write(href)
    //window.location.hostname
        //devuelve dominio
    //window.location.pathname
        //devuelve la ruta y el nombre de un archivo
        //tambien sirve para ver donde estamos parados
    //window.location.protocol
        //devuelve protocolo web utilizado
    //window.location.assign()
        //carga un nuevo documento

//-----------------------------------------------------------
//          GOOGLE DEVELOPER TOOLS

//Sirve para buscar errores y elementos mas facilmente

    //Petaña Elements
        //Simplemente mirar las opciones del click derecha en la seccion
        //element, al abrir la consola con inspeccionar una pagina
    //Pestaña Resources
        //Muestra todos los archivos y los recursos utilizados
    //Pestaña Networks
        //Muetra todos los archivos separados en programas
    //Pestaña Timeline/Performance
        //Me lo saltie me canse

//-----------------------------------------------------------
//Eventos
    //Cualquier cambio que ocurre en la pagina

//class ="button" en thml

    const button = document.querySelector(".button")
        button.onclick = () => { //camelcase no aplica
            alert("hola")
        }
    //Esto ya no es recomendable asi no se escribe

//Ahora se utilizan los event listeners

        button.addEventListener("click", nombreFuncionYaCreada);
        //pero las funciones citadas deben ser funciones comunes
        function nombreFuncionYaCreada () {alert("x")}
            //no deben llevar nunca elementos
            //otra forma para que lleven elementos es escribirlas dentro
        button.addEventListener("click", ()=> {
            alert ("x");
        });
        //agregar el evento listener en una funcion comun hara que solo se ejecute una vez
//Elemento Event
        //Unico elemento que se puede pasar a los parametros es el event

        button.addEventListener("click", (e) => {
            console.log(this);
        });
//Flujo de eventos
        //Se refiere a que primero se ejecutara el evento mas
            //especifico y luego saltara al menos especifico, es decir
            //desde el elemento del doom que menos abarca al que mas abarca
        //Para invertir esto le agregamos el valor true al contenedor mas grande
            //(click, funcion flecha, true)


//StopPropagation

        //Frena la propagacion
            button.addEventListener("click", (e) => {
                alert("x");
                e.stopPropagation(); //quien lleve esto pondra fin a los eventos
            })

//Eventos del Mouse
       
        //click=ocurre con un click
        //dblclick=ocurre con un doble click
        //mouseover=ocurre cuando el mouse se mueve sobre un elemento o sus hijos
        //mouseout=ocurre cuando se mueve el puntero fuera de un elemento

        //contextmenu=ocurre con un click del boton derecho
        //mouseenter=cuando el puntero se mueve sobre un elemento
        //mouseleave=cuando se mueve fuera del elemento
        //mouseup=cuando un usuario suelta un boton del mouse sobre un elemento
        //mousemove=ocurre cuando el puntero se mueve mienstras esta sobre un elemento

//Eventos del teclado
            //unicamente indican cuando se presiona una tecla  
        //keydown=ocurre cuando una tecla se deja de presionar
        //keypress=ocurre cuando se presiona una tecla y suelta
        //keyup=ocurre despues de los dos eventos

//Eventos de la interfaz

        //error=cuando sucede un error durante la carga de un archivo multimedia
        //load=cuando se carga exitosamente algo
        //beforunload=antes de irte del sitio
        //unload=despues de irte del sitio
        //resize=cuando se actualiza la resolucion
        //scroll=cuando se scrollea
        //select=indica el texto o elemento seleccionado
        
//Timers (temporizadores)

        //setTimeout()
            const temporizados= setTimeout(()=>{
                document.write("x")
            }, 2000) //De esta manera mostrara x en 2000 miliseg
        //setInterval()
            //realiza una funcion bucle, CADA 2000 miliseg o el dato que pasemos
        //clearTimeout()
            clearTimeout(temporizados) //nunca se va a ejecutar
        //clearInterval() 
            //funciona de la misma manera que el anterior pero sobre interval
//------------------------------------------------------------------------------------------

//          CONTROL DE FLUJO Y MANEJO DE ERRORES


//Sentencias de bloque
    //Creamos un nuevo ambito de las variables

//Sentencias de control de flujo
    //Con el control del flujo controlamos la ejecucion
        //o no del codigo con sentencias

//Sentencias de manejo de excepciones
    //Control y manejo de los errores

//-----------------------------------------------------------

//          SENTENCIA SWITCH

//Sintaxis
    let expresion = "ElementoZ";
    switch(expresion) {
        case "ElementoX": console.log("RespuestaX"); break;
        case "ElementoY": console.log("RespuestaY"); break;
        case "ElementoZ": console.log("RespuestaZ"); break;
    }

//Break

//Default

//-----------------------------------------------------------

//          EXCEPCIONES Y SUS TIPOS

//Definicion y usos

//Excepciones ECMAScript

//DOMException y DOMError

//-----------------------------------------------------------

//          TRY...  CATCH

//Sintaxis
    //Try debe estar acompañado si o si del Catch o del Finally
    try {
        indefinido
    }
    catch(error) {
        console.log("Ocurrio un error")
    }

//Objeto error

//Catch Incondicional
    //Es incondicional porque no posee una condicion dentro

//Catch Condicional
    //Es condicional porque dentro posee una condicional como
        //un if
        try {
            indefinido
        }
        catch (error) {
            if (x > y) {
                console.log ("X");
            } else {
                console.log ("Y");
            }

        }

//Sentencia Throw

//Finally
    //Se ejecuta a toda costa, posee prioridad y sobreescribe
        //el valor es utilizado como cierre
        try {
            indefinido
        }
        catch (error) {
            alert ("X");
        }
        finally {
            alert ("Y");
        }

//-----------------------------------------------------------

//          REVISAR PERMANENTEMENTE SI EL CODIGO QUE UTILIZAMOS
        //  ESTA ACTUALIZADO O NO, AL IGUAL QUE LAS PAGINAS

//          CALLBACKS

//