import promotions from './promotions.js';

function init() {
    const url = new URL(window.location.href);
    const params = new URLSearchParams(url.search);
    const promotionID = params.get('id');
    promotions.get(promotionID);


    const editPromotionForm = document.querySelector("#edit-promotion");
    editPromotionForm.addEventListener('submit',function(e){
        e.preventDefault();
        promotions.update(promotionID);
    })
    
}


document.addEventListener('DOMContentLoaded',init);