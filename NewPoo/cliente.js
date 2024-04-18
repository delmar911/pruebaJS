// Creamos nuestra clase
class Cliente{

    // Contructor sirve para hacer la encapsulacion
    constructor(nombre, direccion, telefono, tipoDocumento, documento ){
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
        this.tipoDocumento = tipoDocumento;
        this.documento = documento;
    }
}

// Hacemos la exportacion de nuestra clase
module.exports = Cliente;