// Autor: Sergio Yael Massieu -> 24-Mayo-2024
// Instagram: @is.leay -> Facebook: /is.leay -> Github: yaeljoji

// Declaramos las variables globales
let tasaDeInteres;
let interesDecimal;

//Esperamos que cargue el DOM.
document.addEventListener('DOMContentLoaded', () => {
    //Limitamos a 7 números los input de cantidad.
    document.getElementById('cantidadBasica').addEventListener('input', e => e.target.value.length > 7 ? e.target.value = e.target.value.slice(0, 7) : null);
    document.getElementById('cantidadAvanzada').addEventListener('input', e => e.target.value.length > 7 ? e.target.value = e.target.value.slice(0, 7) : null);
    //Limitamos a 4 números los input de días.
    document.getElementById('dias').addEventListener('input', e => e.target.value.length > 4 ? e.target.value = e.target.value.slice(0, 4) : null);
    //Mostramos el año y mes actual en el span fecha.
    document.getElementById('fecha').textContent = `${new Intl.DateTimeFormat('es-ES', { month: 'long' }).format(new Date())} del ${new Date().getFullYear()}`;
});
//Mensajes de error.
const mensajes = {
    cantidadMaxima: 'La cantidad a invertir no puede ser mayor a 5 millones de pesos ($5,000,000).',
    cantidadMinima: 'La cantidad a invertir no puede ser menor a $1.',
    noEsNumero: 'Solo se permiten números.',
    diasMaximos: 'No puedes agregar más de 1825 días (5 años).',
    diasMinimos: 'Ingresa al menos 1 día.',
    datosVacios: 'Ingresa los datos.'
};