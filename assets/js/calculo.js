// Autor: Sergio Yael Massieu -> 24-Mayo-2024
// Instagram: @is.leay -> Facebook: /is.leay -> Github: yaeljoji

//Formulario de rendimientos diarios
document.getElementById('formBasica').addEventListener('submit', (e) => {
    e.preventDefault();
    tasaDeInteres = parseFloat(e.target.querySelector('[data-tasas]').value);
    interesDecimal = tasaDeInteres / 100;
    const cantidad = document.getElementById('cantidadBasica').value;
    let errorCantidad = comprobarCantidad(cantidad);
    if (errorCantidad) {
        document.getElementById('errores').textContent = errorCantidad;
        mostrarElementos('divErrores', 'divBasico');
        return;
    }
    let { rendimientoDiario } = calcularRendimientos(cantidad, 1);
    let resultado = rendimientoDiario.toFixed(2);
    let checarUnidad = rendimientoDiario < 1 ? 'centavos' : 'pesos';
    document.getElementById('resultadosBasicos').textContent = `$${resultado} ${checarUnidad}`;
    mostrarElementos('divBasico', 'divErrores');
});

//Formulario de cálculo de rendimientos a plazos
document.getElementById('formAvanzada').addEventListener('submit', (e) => {
    e.preventDefault();
    tasaDeInteres = parseFloat(e.target.querySelector('[data-tasas]').value);
    interesDecimal = tasaDeInteres / 100;
    const cantidad = document.getElementById('cantidadAvanzada').value;
    const dias = document.getElementById('dias').value;
    let errorCantidad = comprobarCantidad(cantidad);
    let errorDias = comprobarDias(dias);
    if (errorCantidad || errorDias) {
        document.getElementById('errores').textContent = errorCantidad || errorDias;
        mostrarElementos('divErrores', 'divAvanzado');
        return;
    }
    let { rendimientoTotal } = calcularRendimientos(cantidad, dias);
    let resultado = rendimientoTotal.toFixed(2);
    let checarUnidad = rendimientoTotal < 1 ? 'centavos' : 'pesos';
    if (rendimientoTotal >= 1) {
        resultado = Number(resultado).toLocaleString('en-US', { minimumFractionDigits: 2 });
    }
    let checarDia = dias == 1 ? 'día' : 'días';
    document.getElementById('diasUsuario').textContent = `${dias} ${checarDia}`;
    document.getElementById('resultadosAvanzados').textContent = `$${resultado} ${checarUnidad}`;
    mostrarElementos('divAvanzado', 'divErrores');
});