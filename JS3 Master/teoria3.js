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


//Parametros por defecto (validacion antigua vs actual)


//Parametros rest (...param)


//Destructuracion


//Destructurar Arrays y Objetos
//__________________________________________________________//

//__________________________________________________________//

//__________________________________________________________//