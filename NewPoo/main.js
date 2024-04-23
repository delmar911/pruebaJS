const Cliente = require('./cliente');
const Cuenta = require('./cuenta');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const question = (query) => new Promise(resolve => readline.question(query, resolve));

const main = async () => {
    const nombreCliente = await question('Ingresa nombre del cliente: ');
    const direccionCliente = await question('Ingresa la direccion del cliente: ');
    const telefonoCliente = await question('Ingresa el telefono del cliente: ');
    const tipoDocumentoCliente = await question('Ingresa el tipo de documento del cliente: ');
    const documentoCliente = await question('Ingresa el documento del cliente: ');

    const cliente1 = new Cliente(nombreCliente, direccionCliente, telefonoCliente, tipoDocumentoCliente, documentoCliente);

    const tipoCuenta = await question('Ingresa el tipo de cuenta: ');
    const numeroCuenta = await question('Ingresa el numero de cuenta: ');
    const contrasenia = await question('Ingresa la contrasenia: ');
    const saldo = await question('Ingresa el saldo: ');

    const cuenta = new Cuenta(cliente1, tipoCuenta, numeroCuenta, contrasenia, parseInt(saldo));

    let continuar = true;

    while (continuar) {
        console.log('\n-- Menú --');
        console.log('1. Depositar');
        console.log('2. Retirar');
        console.log('3. Consultar saldo');
        console.log('4. Información de la cuenta');
        console.log('5. Historial de transacciones');
        console.log('6. Salir');

        const opcion = await question('\nElige una opción: ');

        switch (opcion) {
            case '1':
                const cantidadDeposito = await question('Ingresa la cantidad a depositar: ');
                cuenta.depositar(parseInt(cantidadDeposito));
                break;
            case '2':
                const cantidadRetiro = await question('Ingresa la cantidad a retirar: ');
                cuenta.retirar(parseInt(cantidadRetiro));
                break;
            case '3':
                cuenta.consultarSaldo();
                break;
            case '4':
                cuenta.informacionCuenta();
                break;
            case '5':
                cuenta.imprimirHistorialTransacciones();
                break;
            case '6':
                console.log('Saliendo del programa...');
                continuar = false;
                break;
            default:
                console.log('Opción no válida. Por favor, elige una opción válida.');
        }

        if (continuar) {
            const continuarInput = await question('¿Desea realizar otra operación? (Sí/No): ');
            if (continuarInput.toLowerCase() !== 'sí') {
                continuar = false;
                console.log('Saliendo del programa...');
            }
        }
    }

    readline.close();
};

main();