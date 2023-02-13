let contador = 0;
const usuario = 'Sebastian';
const pass = 'Javascript'
let passIngresado;
const costoMetroHierro = 800 / 100
const centimetrosHierroFijos = 1048
const anchoMinimo = 80
const anchoMaximo = 210
let ancho = false
const margen = 0.9
let tasaInteres = 0.1;

const cotizador = () => {
    let ancho = Number(prompt('Ingresá el ancho del sillón que buscas en centímetros (entre 80 y 210cm)'))
    if (ancho > anchoMinimo && ancho < anchoMaximo) {
        let precio = (centimetrosHierroFijos + (ancho * 4)) * costoMetroHierro * (1 + margen);
        let financiacion = prompt('El precio de tu sillón es de $' + precio + '. Lo queres financiar? (Ingresa si o no)')
        if (financiacion === 'si') {
            let cuotas = Number(prompt('ingresa la cantidad de cuotas'));
            let valorCuota = (precio * (1 + tasaInteres)) / cuotas;
            alert('Listo! Es tuyo por ' + cuotas + ' cuotas de $' + Math.round(valorCuota) + ' (aplicamos un interés del 10% por financiación)');
        } else if (financiacion === 'no') {
            alert('EL precio es de $' + precio)
        }
    } else {
        alert('ancho incorrecto, ingresa un ancho en centímeros, con mínimo de 80cm y máximo de 210cm')
    }
}

const login = () => {
    let usuarioIngresado = prompt('Ingresa tu usuario')
    if (usuarioIngresado !== usuario) {
        alert('No existe el usuario');
        contador = contador + 1
    }
    else {
        let passIngresado = prompt('Ingresa tu pass')
        if (passIngresado === pass) {
            alert('Pass correcto! Dale aceptar para cotizar');
            cotizador()
        } else {
            alert('Pass incorrecto')
            contador = contador + 1
        }
    }
}

alert('Usuario para prueba: Sebastian . Pass para pueba: Javascript . Hay 3 intentos de ingreso.')

while (contador < 3) {
    login();
}

alert('Demasiados intentos, probá mas tarde de nuevo')

