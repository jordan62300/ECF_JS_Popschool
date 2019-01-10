import promotions from './promotions.js';

function init() {
    const createPromotionForm = document.querySelector("#create-promotion");    // recupere la balise form
    createPromotionForm.addEventListener('submit',function(e){            // au submit dans la balise form
        e.preventDefault();                                            // empeche le rechargement de la page
        promotions.create();                                            // Appelle la function createPromotion 
    })
    promotions.getAll();                                                // recupere toutes les promotions
}

document.addEventListener('DOMContentLoaded',init);                     // Lance la function init lorsque tout le contenue html est chargé
