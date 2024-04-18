const Cuenta = require('./cuenta');

// Creamos nuestra clase
class CuentaCorriente extends Cuenta {

    // Contructor sirve para hacer la encapsulacion
    constructor(cliente, saldo, sobreGiro) {
        super(cliente, saldo);
        this.sobreGiro = sobreGiro;
    }

    // Creamos nuestro metodo para retirar en nuestra cuenta
    retirar(cantidad) {

        // Este metodo nos permitira hacer un retiro con un sobregiro establecido
        const limite = this.saldo + this.sobreGiro;

        // Validamos si la cantidad a retirar es menor o igual al limite del sobregiro
        if (cantidad <= limite) {
            this.saldo -= cantidad;
            console.log(`Se retiro ${cantidad} pesos colombianos y el saldo actual es de ${this.saldo} pesos colombianos`);
        }
        else {
            console.log('Saldo insuficiente y excede el limite de sobregiro');
        }
    }

}

module.exports = CuentaCorriente;