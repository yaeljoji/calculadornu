// Autor: Sergio Yael Massieu -> 24-Mayo-2024
// Instagram: @is.leay -> Facebook: /is.leay -> Github: yaeljoji

const comprobarCantidad = (cantidad) => {
    if (cantidad === null || cantidad === undefined || cantidad === '') {
        return mensajes.datosVacios;
    } else if (isNaN(cantidad)) {
        return mensajes.noEsNumero;
    } else if (cantidad > 5000000) {
        return mensajes.cantidadMaxima;
    } else if (cantidad < 1) {
        return mensajes.cantidadMinima;
    }
    return null;
}

const comprobarDias = (dias) => {
    if (dias === null || dias === undefined || dias === '') {
        return mensajes.datosVacios;
    } else if (isNaN(dias)) {
        return mensajes.noEsNumero;
    } else if (dias > 1 * 1825) {
        return mensajes.diasMaximos;
    } else if (dias < 1) {
        return mensajes.diasMinimos;
    }
    return null;
}

const mostrarElementos = (mostrarE, ocultarE) => {
    document.getElementById(mostrarE).style.display = 'block';
    document.getElementById(ocultarE).style.display = 'none';
}
// Entre 360 porque son los días de regulación.
const calcularRendimientos = (cantidad, dias) => {
    let rendimientoDiario = Math.floor((cantidad * (interesDecimal / 360)) * 100) / 100;
    let rendimientoTotal = rendimientoDiario * dias;
    return { rendimientoDiario, rendimientoTotal };
}