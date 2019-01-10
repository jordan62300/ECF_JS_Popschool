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

const deleteBtn = document.querySelector('#delete-btn')
deleteBtn.addEventListener('click', function() {
    const deleteConfirm = document.querySelector('#delete-confirm');

    deleteConfirm.style.display = 'block';
})


document.addEventListener('DOMContentLoaded',init);