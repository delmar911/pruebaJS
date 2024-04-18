const Cliente = require('./cliente');
const Cuenta = require('./cuenta');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Ingresa nombre del cliente: ', (nombreCliente) => {

    readline.question('Ingresa la direccion del cliente: ', (direccionCliente) => {

        readline.question('Ingresa el telefono del cliente: ', (telefonoCliente) => {

            readline.question('Ingresa el tipo de documento del cliente: ', (tipoDocumentoCliente) => {

                readline.question('Ingresa el documento del cliente: ', (documentoCliente) => {

                    const cliente1 = new Cliente(nombreCliente, direccionCliente, telefonoCliente, tipoDocumentoCliente, documentoCliente);

                    readline.question('Ingresa el tipo de cuenta: ', (tipoCuenta) => {

                        readline.question('Ingresa el numero de cuenta: ', (numeroCuenta) => {

                            readline.question('Ingresa la contrasenia: ', (contrasenia) => {

                                readline.question('Ingresa el saldo: ', (saldo) => {

                                    const cuenta = new Cuenta(cliente1, tipoCuenta, numeroCuenta, contrasenia, parseInt(saldo));

                                    cuenta.deepositar(5000);
                                    cuenta.retirar(2000);
                                    cuenta.consultarSaldo();
                                    cuenta.informacionCuenta();

                                })

                            })

                        })

                    })

                })

            })

        })
    })
});