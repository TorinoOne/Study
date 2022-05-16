//Mostrar 3 celulares y sus propiedades
//Cada uno debe tener color, peso, resolucion de pantalla de camara,
//    resolucion de pantalla y memoria RAM
//Deben poder prender, reiniciar, tomar fotos y grabar

//Implementar todas estas cualidades en celulares de alta
//    gama. Graban en camara lenta, tienen reconocimiento facial
//    y una camara extra.
//----------------------------------------------------------------

class Celular {
    constructor(color, peso, rdc, rdp, ram) {
        this.color = color;
        this.peso = peso;
        this.resolucionCamara = rdc;
        this.resolucionPantalla = rdp;
        this.memoriaRam = ram;
        this.encendido = false;
    }
    botonEncendido () {
        if (this.encendido == false) {
            alert("Iniciando celular");
            this.encendido = true;
        } else { //agrego el metodo apagar porque sino no se puede apagar el celular
            alert("Apagando celular");
            this.encendido = false
        }
    }
    opcionReiniciar () {
        if (this.encendido == true) { //un reiniciado tiene que ser completo
            alert("Reiniciando");
            this.encendido = false;
            this.encendido = true;
            alert("Reiniciado");
        } else {
            alert("Esta apagado");
        }
    }
    tomarFoto () {
        alert(`foto tomada en resolucion de: ${this.resolucionCamara}`)

    }
    grabarVideo () {
        alert(`grabando video en ${this.resolucionCamara}`)
    }
}

celularTukiTuki = new Celular ("azul", "150g", "full hd", "1080", "8 ram")

botonEncendido();
opcionReiniciar();
tomarFoto();
grabarVideo();