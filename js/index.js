import promotions from './promotions.js';

function init() {
    const createPromotionForm = document.querySelector("#create-promotion");
    createPromotionForm.addEventListener('submit',function(e){
        e.preventDefault();
        promotions.create();
    })
    promotions.getAll();
}

document.addEventListener('DOMContentLoaded',init);
