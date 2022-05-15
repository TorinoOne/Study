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

