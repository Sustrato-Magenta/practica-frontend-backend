const botonEnviar = document.querySelector('#botonEnviar');
const campoDato = document.querySelector('#campoDato');

botonEnviar.addEventListener('click', (e) => {
    e.preventDefault();
    let contenidoCampoDato = campoDato.value;
    console.log(`Se presionó el botón enviar y se envió: ${contenidoCampoDato}`);
    campoDato.value = '';
});
