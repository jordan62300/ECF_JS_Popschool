import promotions from './promotions.js';

function init() {
    promotions.getAll();
}

document.addEventListener('DOMContentLoaded',init);
