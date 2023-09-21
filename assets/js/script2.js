const conteoMenu = {
    '1': 0,
    '2': 0,
    '3': 0,
    '4': 0,
    '5': 0,
    '6': 0,
    '7': 0,
    '8': 0,
    '9': 0,
  };
let opcion
let repetir = true
console.log('Menu de Opciones:')
while (repetir) {

    console.log('1 - Contador de números Pares e Impares')
    console.log('2 - Calculadora Factorial')
    console.log('3 - Validación de contraseña')
    console.log('4 - Generador de tablas de multiplicar')
    console.log('5 - Suma de números primos')
    console.log('6 - Secuencia de Fibonacci')
    console.log('7 - Convertidor de temperatura')
    console.log('8 - Calculadora de potencia')
    console.log('9 - Salir del programa')

    opcion = prompt('Selecciona una opción (1-9):')

    if (conteoMenu[opcion] !== undefined) {
        conteoMenu[opcion]++;
      }
    switch (opcion) {
        case '1':
            //Numero par e impar
            var numero = parseInt(prompt('Ingrese un numero: '))
            var pares = 0
            var imPares = 0

            for (let contador = 1; contador <= numero; contador++) {
                if (contador % 2 === 0) {
                    pares++
                } else {
                    imPares++
                }
            }
            console.log('El numero de pares entre el numero 1 y el numero ' + numero + ' son ' + pares)
            console.log('El numero de impares entre el numero 1 y el numero ' + numero + ' son ' + imPares)
            break;
        case '2':
            //calculadora factorial
            var numero = parseInt(prompt("Ingrese un número para calcular su factorial:"))

            if (isNaN(numero) || numero < 0) {
                console.log("Por favor, ingrese un número válido y positivo.")
            } else {
                let factorial = 1;
                for (let contador = 1; contador <= numero; contador++) {
                    factorial *= contador;
                }

                console.log('El factorial de ' + numero + ' es: ' + factorial)
            }
            break;
        case '3':
            //validación de contraseña
            let ingreseContrasena = prompt('Ingrese su contraseña: ')

            let contrasenaCorrecta = 'secreto123'

            if (ingreseContrasena === contrasenaCorrecta) {
                console.log('Acceso concedido')
            } else {
                console.log('Acceso denegado')
            }
            break;
        case '4':
            //generador de tablas de multiplicar
            var numeroTabla = parseInt(prompt("Ingrese un número para ver su tabla de multiplicar:"))
            if (!isNaN(numeroTabla)) {
                console.log(`Tabla de multiplicar del ${numeroTabla}:`)

                for (let contadorTabla = 1; contadorTabla <= 10; contadorTabla++) {
                    var resultado = numeroTabla * contadorTabla;
                    console.log(`${numeroTabla} x ${contadorTabla} = ${resultado}`)
                }
            } else {
                console.log("Por favor, ingrese un dato valido");
            }
            break;
        case '5':
            //suma de números primos
            var N = parseInt(prompt("Ingrese la cantidad de números primos que desea sumar:"))
            if (!isNaN(N) && N > 0) {
                let suma = 0
                let numeroActual = 2
                let numerosPrimosEncontrados = 0
                while (numerosPrimosEncontrados < N) {
                    let esPrimo = true;
                    for (let i = 2; i <= Math.sqrt(numeroActual); i++) {
                        if (numeroActual % i === 0) {
                            esPrimo = false;
                            break;
                        }
                    }
                    if (esPrimo) {
                        suma += numeroActual;
                        numerosPrimosEncontrados++
                    }
                    numeroActual++
                }
                console.log(`La suma de los primeros ${N} números primos es: ${suma}`)
            } else {
                console.log("Por favor, ingrese un número válido y mayor que 0.")
            }
            break;
        case '6':
            //secuencia de Fibonacci
            var numeroTerminos = parseInt(prompt("Ingrese el número de términos de la secuencia de Fibonacci que desea generar:"))

            if (!isNaN(numeroTerminos) && numeroTerminos > 0) {
                let primerTermino = 0;
                let segundoTermino = 1;
                let secuencia = [primerTermino, segundoTermino]

                for (let i = 2; i < numeroTerminos; i++) {
                    var siguienteTermino = primerTermino + segundoTermino;
                    secuencia.push(siguienteTermino);
                    primerTermino = segundoTermino;
                    segundoTermino = siguienteTermino;
                }
                console.log(`Secuencia de Fibonacci con ${numeroTerminos} términos:`)
                console.log(secuencia.join(', '))
            } else {
                console.log("Por favor, ingrese un número válido y mayor que 0.")
            }
            break;
        case '7':
            //convertidor de temperatura
            var direccion = prompt("Elija la dirección de la conversión:\n1. De Celsius a Fahrenheit\n2. De Fahrenheit a Celsius");

            if (direccion === "1" || direccion === "2") {
                var temperatura = parseFloat(prompt("Ingrese la temperatura a convertir:"))
                if (!isNaN(temperatura)) {
                    let resultado;
                    if (direccion === "1") {
                        resultado = (temperatura * 9 / 5) + 32;
                        console.log(`Resultado: ${temperatura} grados Celsius = ${resultado} grados Fahrenheit`)
                    } else {
                        resultado = (temperatura - 32) * 5 / 9;
                        console.log(`Resultado: ${temperatura} grados Fahrenheit = ${resultado} grados Celsius`)
                    }
                } else {
                    console.log("Por favor, ingrese una temperatura válida.");
                }
            } else {
                console.log("Por favor, seleccione una dirección válida (1 o 2).");
            }
            break;
        case '8':
            //calculadora de potencia
            var base = parseFloat(prompt("Ingrese el número base:"));

            if (!isNaN(base)) {
                var exponente = parseInt(prompt("Ingrese el exponente:"));
                if (!isNaN(exponente)) {
                    var resultado = Math.pow(base, exponente);

                    console.log(`${base} elevado a la potencia ${exponente} es igual a ${resultado}`);
                } else {
                    console.log("Por favor, ingrese un exponente válido (un número entero).");
                }
            } else {
                console.log("Por favor, ingrese un número base válido.");
            }

            break;
        case '9':
            //salir del programa
            repetir = false
            console.log('Saliendo del programa');
            break;
        default:
            console.log('Opción no válida. Por favor, selecciona una opción válida.');
    }
}

let conteoMinimo = Infinity; // Inicializar con un valor grande para encontrar el mínimo
for (const key in conteoMenu) {
  if (conteoMenu.hasOwnProperty(key) && conteoMenu[key] < conteoMinimo) {
    conteoMinimo = conteoMenu[key];
  }
}

// Encontrar todas las opciones menos usadas
const opcionesMenosUsadas = [];
for (const key in conteoMenu) {
  if (conteoMenu.hasOwnProperty(key) && conteoMenu[key] === conteoMinimo) {
    opcionesMenosUsadas.push(key);
  }
}

if (opcionesMenosUsadas.length > 0) {
  console.log(`Las opciones menos utilizadas (${conteoMinimo} veces) fueron:`);
  for (const opcion of opcionesMenosUsadas) {
    console.log(`Opción ${opcion}`);
  }
} else {
  console.log(`Todas las opciones se utilizaron igual número de veces.`);
}