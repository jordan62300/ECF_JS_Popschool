import promotions from './promotions.js';

function init() {
    const createPromotionForm = document.querySelector("#create-promotion");    
    createPromotionForm.addEventListener('submit',function(e){           
        e.preventDefault();                                            // prevents reloading of the page
        promotions.create();                                            // call the create function to create a promo
    })
    promotions.getAll();                                                // call the getpromotions function to display all the promotion
}

document.addEventListener('DOMContentLoaded',init);                     // launch de init function when the DOMContent is fully loaded
