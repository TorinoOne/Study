//
//_________________________Prototype___________________________//
//Es como un metodo citado, donde este posee las caracteristicas
    //del elemento que representan
//Prototype Chain
    //Cadena de modelos
            //Estos se ven representados segun el elemento
            // algo asi como el DNI de cada elemento
//Prototype Object
    //Todos los datos heredan dos protos, el tipo de dato y el object
//Caracteristicas
    //Un prototipo definido en su codigo fuente es mutable
    //Es en si mismo un objeto, asi como otros
    //Tiene una existencia fisica en la memoria
    //Puede ser modificado y llamado
    //Puede ser visto como un modelo ejemplar de una familia objeto
    //Un objeto hereda propiedades (valores y metodos) del proto
//Accesos
    objeto.prototype //de esta manera ingresamos a los protos
                        //creados por nosotros mismos
    objeto.__proto__ //ingresamos a protos ya creados, es decir
                        //heredado
//Todo lo que trae el prototipo ademas de las caracteristicas son 
    //tambien los metodos que poseen cada elemento respectivamente
//La diferencia entre escribir un metodo y un proto son:
    //En el code primero se ejecutaran aquellos que estan adentro
    // es decir los metodos normales, y despues aquellos que estan
    // dentro del prototipo
    class Objeto {
        constructor() {};
        hablar(){console.log("hola")}
    }
    const objeto = new Objeto();

    objeto.hablar = ()=>{
        console.log("modificado afuera") //Primero se ejecutara esto
    }
//Para modificar el metodo dentro del proto
    objeto.__proto__.hablar = ()=>{
        console.log("modificado afuera")
    }
//Para heredar protos de objetos
    elemento.__proto__ = objeto; // hereda primero lo que esta por fuera si es que
    elemento.hablar();  // se ejecuta
    //Para evitar esta superposicion, si es que no queremos 
        //eliminar lo que esta por fuera
    elemento.__proto__.__proto__.hablar() 
        // de esta manera accedemos primero al proto y luego al
            // prototipo del objeto y luego al metodo ubicado en el
            // sino se modifica el metodo dentro del proto para evitar todo esto

//________________Modo Stricto ("use strict")_________________//
//Definicion
    //Es una forma de escritura actualizada entre desarrolladores
    //Es muy importante hoy en dia

    //Convierte errores de JS en excepciones
     nombre = "nombre"; // Esto en el modo estricto es un error
      //pero en JS es una excepcion

    //Mejorando la optimizacion de los errores y consigue
     //mejores tiempos de ejecucion

    //Evita sintaxis usadas en posteriores a ES6

    //No permite que el programador realize una mala sintaxis

//Uso
    //En funciones y en el scope global
    "use strict"; //Colocando esto al principio no permite la mala sintaxis
    //Tambien se puede utilizar en funciones
        function x(){
            "use strict";
            let elemento = "propiedad";
            console.log(elemento);
        }
//Variables declaradas 

    //Para declarar una variable usamos const, let, var 
    nombre = "nombre"; //lanzara error
    let nombre = "nombre"; //no lanzara error
        //tambien nos obliga a colocar let y no var ya que por defecto todas son var

//Modificar propiedades (defineProperty() y writable)

    const object = {};
    Object.defineProperty(obj,"nombre",{value: "value", writable: false});
            //Colocando writable el valor no se puede reescribir
                    object.nombre = "Roberto"; //tirara un error
//Agregar propiedades

    Object.preventExtensions(object); //De esta manera evitara agregar mas datos
        //Haciendo esto con "use strict"; ya declarado en lugar
            //de aclarar que es una excepcion tirara un error
            
//No se puede agregar propiedades a un string

    const string = "elemento";
    string.canal = "X";
    console.log(string.canal); //Esto con use strict mostrara un error
        //Mientras que sin use strict solo muestra una excepcion

//No existen las multiples variables en una funcion

    function x (elemento, elemento) {
        console.log(elemento) //mostrara el ultimo parametro pasado
    }
    x("Y") //mostrara el ultimo elemento con este valor
    //Con US no dejara llamar la funcion

//Delete en objetos o variables
    let variable = "propiedad";
    delete variable;
    console.log(variable) //Con el US mostrar un error, sin el mostrara
    // la propiedad sin que se haya borrado

    //Delete unicamente se puede utilizar para borrar propiedades
        //de objetos

//Las palabras reservadas no pueden ser usadas como variables

    //De igual manera solo se puede utilizar el US para palabras
        //no reservadas, es decir, si creamos una variable con delete
        //o await, lanzara error

//Cambia el this

    //Genera que el this no tenga una funcion determinada y tenga
        //de propiedad undefined

//Numeros octales con una "o" adelante y no existe with

    //Genera el mismo efecto anterior en el with
    //Para trabajar con numeros habria que usar una O en frente
    console.log(0o25);

    console.log(025); //esto genera un error en US

    //No son muy importante los numeros octales

//Arguments y Eval no pueden ser variables

    //Simplemente no se pueden ejecutar las palabras arguments y eval

//______________________Funciones Flecas_______________________//

//Por que aparecieron, funciones compactas
    //y el uso del This

    //Las sentencias necesitan llaves mientras que las expresiones
        //no les hace falta
    let hey = ()=> propiedad = "string";
    let hey1 = function() {return nombre = "pedro"};
        //La primera es una funcion flecha sintetisada mientras
            //que la segunda se muestra de forma mas extensa
    
//Si solo hay una expresion la retorna
//Parentesis opcionales ante un solo parametro

    let hello = ()=> console.log(); 
        //si solo tiene una linea no hace flata el cierre
    let hey3 = res => lastname = res; //De la misma forma
        resultado = hey3("elemento");

//No son adecuadas para ser usadas como
    //como metodos ni contructores

    let funcion = {
        nombre : "string",
        x : ()=>{console.log(`Hello ${this.nombre}`)}
    } //El nombre no existe dentro de las funciones flechas
        //La forma correcta seria Function (){Linea de code};

//This contextual
    //Afuera de una funcion sera window
    //This debe responder unicamente a un objeto de lo contrario
        //respondera a window o algun elemento en el con ese elemento
        //al que esta llamando
    //Las reglas de modo escrito aplicada a This
        //son ignoradas
        "use strict";
        this.nombri = "nombre"; //Llamaria a este solo de ser flecha
        function saludar() {
            console.log(`Hello ${this.nombre}`)
        }
        const objeto = {
            nombre: "Nombre",
            saludar 
        }
        objeto.saludar() //Al ser normal llama al nombre en el obj

//Funcion flecha invocada a traves de los metodos
    //call, apply y bind
 
    //No tienen objeto arguments
    //No tienene propiedad del prototipo prototype
    //No se puede usar Yield (por ende no se pueden usar como funciones generadoras)
    //No puede contener saltos de linea entre sus paramentros y flecha
    //Orden de parseo
    //Retornan literales si su cuerpo esta entre ()

//Funciones recursivas (Recursividad)
    //Funcion que se llama a si misma
    //Riesgo de generar bucle infinito

    const validar = (msg) =>{
        try {
            if (msg) edad = prompt(msg);
            else edad = prompt("Tu edad");
            edad = parseInt(edad);
            if (isNaN(edad)) throw "introduce un numero";
            if (edad > 18) console.log ("Sos mayor");
            else console.log("Sos menor");
        } catch(e){
            validar(e)
        }
    }
    validar();

//Clausuras (o cierres)

    let cambio = tamaño =>{
        return ()=> {
            document.querySelector(".elementoHTML").style.fontSize = `${tamaño}px`; 
        }
    }
    px12 = cambio(12);

//Parametros por defecto (validacion antigua vs actual)

    let suma = (a = 0, b = 0)=>{
        console.log(a+b)
    }
    suma (12,12)
    //de esta manera si no estuvieramos pasando valores el valor
        //por defecto seria 12

//Parametros rest (...param)

    let sumados = (...num)=> {
        console.log(num);
    }
    //De esta manera podemos pasar mas de un elemento a la suma

//Operador condicional (ternario) (if)
    //Es la forma acordata de hacer un if
    //Consume menos recursos

    edad = 17 //Forma tradicional
    if (edad >= 18) {
        return("es mayor");
    } else {
        return("no es mayor");
    }

    (edad > 18) //Ternario
    ? ( console.log("es mayor"),
        console.log("podes pasar"))
    : console.log("es menor")



//Operador Spread (spread operator)
    //Añadir arrays a otros arrays
    //Concatenar arrays, como argumento rest
    //Es util para cuando hay datos masivos
    console.log(...arr);
    arr.push(...arr2); //Pusheara todos los elementos del array anterior
    arr.push(arr2[0], arr2[1]) //Esto solo es util para cuando hay pocos elementos

    let arr3 = [...arr1, ...arr2]; //Unimos dos arrays

//______________________APIS WEBS______________________________//

//Aplication programming interface
    //Para conectar dos o mas apps entre si e intercambiar info
    //O como herramientas propiedad de cada lenguaje
    //Cualquier funcionalidad de los lenguajes es una appi

//Objeto Date
    //Funciona igual que los arrays en los dias y meses, arrranca
        //Desde 0

    let fecha = Date();
    console.log(fecha); //Mostrara fecha

    let fechax = new Date (); //De esta manera podemos trabajarlo como objeto
    
    console.log(fecha.getDate())//Devuelve el primer dia del mes
    console.log(fecha.getDay())//Devuelve dia de la semana
    console.log(fecha.getMonth())//Devuelve el mes
    console.log(fecha.getYear())//Devuelve el año -1900
    console.log(fecha.getHours())//Devuelve la hora
    console.log(fecha.getMinutes())//Devuelve los minutos
    console.log(fecha.getSeconds())//Devuelve los segundos

    let fechaxs = new Date (10000); //Dentro estan los milisegundos que
        //pasaron desde 1 de Enero de 1947 cuando se creo Unix Time
    //Entonces la fecha arranca desde esa fecha mas los milisegundos

    let fechasz = new Date (2022,6,21);
    //Tambien podemos pasar la fecha en la que queremos que se arranque

    console.log(Date.now()) //Mostrara los milisegundos que pasaron desde donde marquemos
    
//_________________LocalStorage y SessionStorage________________//

//SessionStorage informacion almacenada en la sesion
//LocalStorage informacion almacenada de forma local
    //APPIS para almacenar informacion

    let elemento = localStorage.setItem("elemento", "propiedad");
    console.log(localStorage);
    let name = sessionStorage.getItem("elemento");
    console.log(name);
    //De esta manera mantendra la informacion almacenada de forma local
    //Mientras que de la manera session estara solo en la sesion

//setItem ()
    //Añade un item
//getItem ()
    //Obtiene un item
//removeItem ()
    //Remueve un item
    setTimeout(() => {
        let remove = localStorage.removeItem("elemento");
    },2000)
    //Se removera a los dos segundos
//clear ()
    //Remueve todos los items
    setTimeout(() => {
        let remove = localStorage.clear();
    },2000)

//________________________Drag & Drop__________________________//
//APPI de arrastrar
//Eventos del objeto
    //dragstart     indica cuando comenzamos a agarrar el objeto
    elemento.addEventListener("dragstart", ()=> console.log(1));
    //drag      indica cuando lo estamos sosteniendo
    elemento.addEventListener("drag", ()=> console.log(2));
    //dragend       indica cuando lo soltamos
    elemento.addEventListener("dragend", ()=> console.log(3));

//Eventos de Zona
    //dragenter     verifica si entra a una zona
    elemento.addEventListener("dragenter", ()=> console.log(1));
    //dragover      verifica si se mueve por ahi
    elemento.addEventListener("dragover", ()=> console.log(1));
    //drop      verifica cuando se suelta
    elemento.addEventListener("drop", ()=> console.log(1));
    //dragleave     verifica cuando se va
    elemento.addEventListener("dragleave", ()=> console.log(1));

    //Podemos bloquear soltarlo en algun lago con un 
        e.preventDefault(); //dentro de la funcion flecha

//propiedad dataTransfer
    //getData ()
    circulo.addEventListener("dragstart", (e)=>{
        e.dataTransfer.setData("clase", e.target);
    })
        //Otra manera de pasar informacion es:
    rectangulo.addEventListener("drop", (e)=>{
        console.log(e.dataTransfer.getData("clase"))
    })
    //setData ()

//________________________Geolocalization__________________________//

//getCurrentPosition()
    //parametros(position, error, options)
    //propiedades de option (enableHightAccuracy, timeout, maximumAge)

    const geolocation = navigator.geolocation;

    console.log(geolocation); //mostrara toda informacion relacionada
    
    const posicion = (pos)=> {
        console.log(pos) //Ubicacion
        console.log(pos.coords.latitude) //Latitud
        console.log(pos.coords.longitude) //Longitud
        
    }
    geolocation.getCurrentPosition(posicion) 
        //Requiere permiso para mostrar ubicacion y obtenerla

    const err = ()=>console.log(e);
    const options = {
        maximumAge: 0, //Tiempo que queremos guardar la info en cache
        timeout: 3000, //Tiempo que tarde en devolver la data
        enableHightAccuracy: true //Utiliza todos los recursos de posicionamiento, la alta precision

    }
    geolocation.getCurrentPosition(position, err, options)
        //De esta manera se trabajan los errores y opciones


//watchPosition()



//________________________Historial__________________________//

    console.log(history)

//back() - vuelve atras
    history.back;
//forward() - va hacia adelante
    history.forward;
//tamaño del historial -
    
//go() - va al sitio indicado con un numero relativo
    history.go(1);
//pushState() - modifica la URL y conserva la info
    history.pushState({nombre: "elemento"}, "", "?XYZ")
    location.href //mostrara un sitio web pero modificado con lo anterior
//propiedad state y evento popstate

//replaceState - modifica la URL y no la conserva


//________________________FileReader__________________________//
//Archivo creado para actuar cuando trabajamos con eventos
    let reader = new FileReader();
    console.log(reader); //Todos sus valores seran null
//ReadAsText()
    //No entendi una mierda es re aburrido
//ReadAsDataURL()
//Galeria Dinamica
//Combinar con Drag-Drop
//Barra de progreso con progress y loadend

//________________________IndexedDB__________________________//

//Caracteristicas
    //Es una base de datos indexada
    //Almacena informacion en el navegador de forma similiar a localStorage
    //Es orientado a objetos
    //Es asincrona
    //Trabaja con eventos del DOM

//Prodecimiento de Creacion
    //Porcesar una solicitud de creacion

    //Objeto IndexedDB
        const IDBRequest = indexedDB;
        console.log(IDBRequest);
            //mostrara una fabrica de base de datos
    
    //Metodo open()
        IDBRequest = indexedDB.open();
            //abrira la base de datos

    //onupgradeneeded, onsucess, onerror
    //Si no existe la base de datos, se ejecuta onupgradeneeded y el onsucess
    //Si existe no se llamara al primero sino al segundo
        IDBRequest = indexedDB.open("database", 1);
        IDBRequest.addEventListener("upgradeneeded", ()=>{
            console.log("Creada") //Verifica si esta creada
        })
        IDBRequest.addEventListener("sucess", ()=>{
            console.log("Todo ok")
        })
        IDBRequest.addEventListener("error", ()=> {
            console.log("Todo mal")
        })
//Crear almacen de objetos
    //Arquitectura de almacenamiento de datos como objetos
    //Lugar donde guardamos todos, solo se pueden crear cuando creamos la base de datos

//Metodo createObjectStore ()
    IDBRequest.addEventListener("upgradeneeded", ()=>{
        const db = IDBRequest.result;
        db.createObjectStore("nombres", {
            autoIncrement: true //Con esto creamos un almacen de objetos
        })
    })

    //autoIncrement vs KeyPath
        //Es casi lo mismo, investigar
//Metodo transaction ()
    //IDBTransaction.objectStore()
    //IDBObjectStore.add ()
    const addObjetos = objecto => {
        const db = IDBRequest.result;
        const IDBtransaction = db.transaction("nombres", "readwrite") //Leemos y modificamos, con readonly solo leemos
        const objectStore = IDBtransaction.objectStore("nombres"); //Indicamos donde queremos trabajar
        objectStore.add(objeto); //Esto siempre pasara de abrir paso con lo anterior
        IDBtransaction.addEventListener("complete", ()=> {
            console.log("Todo ok")
        }) 
    }
    //Creamos una funcion que lea objetos
    const leerObjetos = ()=> {
        const db = IDBRequest.result;
        const IDBTransaction = db.transaction("nombre", "readlony");
        const objectStore = IDBTransaction.objectStore("nombres");
        const cursor = objectStore.openCursor();
        cursor.addEventListener("sucess", ()=> {
            if (cursor.result) {
                console.log(cursor.result.value);
                cursor.result.continue() //De esta manera leera todos los objetos
            } else console.log ("Todo leido");
        })
    }
    //Para modificar objetos realizamos con IDBObjectStore.put()
    const modificarObjeto = objeto => {
        const db = IDBRequest.result;
        const IDBtransaction = db.transaction("nombres", "readwrite") 
        const objectStore = IDBtransaction.objectStore("nombres"); 
        objectStore.put(objeto, key);
        IDBtransaction.addEventListener("complete", ()=> {
            console.log("modificado")
        }) 
    }

    //Para eliminar con IDBObjectStore.delete()
        //Para ambos es basicamente lo mismo solo que reemplazando el dato
        const eliminarObjeto = key => {
            const db = IDBRequest.result;
            const IDBtransaction = db.transaction("nombres", "readwrite") 
            const objectStore = IDBtransaction.objectStore("nombres"); 
            objectStore.delete(key); 
            IDBtransaction.addEventListener("complete", ()=> {
                console.log("eliminado")
            }) 
        }
    //Para obtener data
        const getIDBData = () => {
        const db = IDBRequest.result;
        const IDBtransaction = db.transaction("nombres", "readwrite") 
        const objectStore = IDBtransaction.objectStore("nombres"); 
        return [objectStore, IDBtransaction];
    } //Y toda esta data la podemos reemplazar arriba con obtenerData()
    const IDBData = getIDBData();

