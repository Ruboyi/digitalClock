/**
 * Crea un reloj que se actualice en tiempo real:
 *
 *  - La hora debe ir en el <h1>
 *  - La fecha debe ir en el <h2>
 *
 * En función de la hora del día la imagen de fondo debe cambiar.
 * Para este punto puedes ayudarte de las clases:
 *
 *  - morning: a partir de las 7:00.
 *
 *  - afternoon: a partir de las 13:00.
 *
 *  - night: a partir de las 21:00.
 *
 */

import { formatNum } from './helpers.js';


let h1 = document.querySelector('h1');
let h2 = document.querySelector('h2');
let body = document.querySelector('body');

setInterval(() => {
    const now = new Date ();
    const options_A = {
        
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
    };
    const formatDate = now.toLocaleDateString('es-ES', options_A);
    const hours = now.getHours();
    const min = now.getMinutes();
    const sec = now.getSeconds();
    h1.textContent = `${formatNum(hours)}:${formatNum(min)}:${formatNum(sec)}`;
    h2.textContent = formatDate;

    if(hours > 7 && hours <= 13){
        body.classList.remove('night');
        body.classList.add('morning');
    }else if(hours > 13 && hours <= 21) {
        body.classList.remove('morning');
        body.classList.add('afternoon');
    }else if(hours > 21 && hours < 7){
        body.classList.remove('afternoon');
        body.classList.add('night');
    }

}, 1000);









