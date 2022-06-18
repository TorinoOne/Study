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
    //Es una forma de escritura actualizada
    //Es muy importante hoy en dia

//Convierte errores de JS en excepciones

//Mejorando la optimizacion de los errores y consigue
    //mejores tiempos de ejecucion

//Evita sintaxis usadas en posteriores a ES6

//No permite que el programador realize una mala sintaxis

//__________________________________________________________//

//__________________________________________________________//

//__________________________________________________________//

//__________________________________________________________//