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
    


const deleteBtn = document.querySelector('#delete-btn');
deleteBtn.addEventListener('click', function() {
    const deleteConfirm = document.querySelector('#delete-confirm');

    deleteConfirm.style.display = 'block';
})

const confirmBtn = document.querySelector('#delete-confirm-yes');
const cancelBtn =   document.querySelector('#delete-confirm-no');

cancelBtn.addEventListener('click', function() {
    deleteConfirm.style.display = 'none';
});

confirmBtn.addEventListener('click', function() {
    promotions.delete(promotionID);
});

}

document.addEventListener('DOMContentLoaded',init);