// Creamos nuestra clase
class Cuenta {

    // Contructor sirve para hacer la encapsulacion
    constructor(cliente, tipoCuenta, numeroCuenta, contrasenia, saldo) {
        this.titular = cliente;
        this.tipoCuenta = tipoCuenta;
        this.numeroCuenta = numeroCuenta;
        this.contrasenia = contrasenia;
        this.saldo = saldo;
    }

    // Creamos nuestro metodo para depositar en nuestra cuenta
    deepositar(cantidad) {
        this.saldo += cantidad;
        console.log(`Se deposito ${cantidad} pesos colombianos y el saldo es de ${this.saldo} pesos colombianos`);
    }

    // Creamos nuestro metodo para retirar en nuestra cuenta
    retirar(cantidad) {
        if (cantidad <= this.saldo) {
            this.saldo -= cantidad;
            console.log(`Se retiro ${cantidad} pesos colombianos y el saldo actual es de ${this.saldo} pesos colombianos`)
        }
        else {
            console.log('Saldo insuficiente')
        }
    }

    // Creamos nuestro metodo para consultar el saldo de nuestra cuenta
    consultarSaldo() {
        console.log(`Su saldo actual es de ${this.saldo} pesos colombianos`)
    }

    // Creamos el metodo para consultar la informacion del titular de nuestra cuenta
    informacionCuenta() {
        console.log(`La informacion de la cuenta es: \n
                   Titular: ${this.titular.nombre} \n
                   Direccion: ${this.titular.direccion} \n
                   Telefono: ${this.titular.telefono} \n
                   Documento: ${this.titular.tipoDocumento} ${this.titular.documento} \n
                   Tipo de cuenta: ${this.tipoCuenta} \n
                   Numero de cuenta: ${this.numeroCuenta} \n
                   Saldo: ${this.saldo} pesos colombianos
        `)
    }

}

module.exports = Cuenta;