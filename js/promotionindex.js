import promotions from './promotions.js';

function init() {
    const url = new URL(window.location.href);                   // Recupere l'url et la stock dans url
    const params = new URLSearchParams(url.search);                
    const promotionID = params.get('id');                          // recupere l'id de la promotion qui etait dans l'url
    promotions.get(promotionID);                                


    const editPromotionForm = document.querySelector("#edit-promotion");
    editPromotionForm.addEventListener('submit',function(e){        // losqu'un submit est fait
        e.preventDefault();                                         // Empeche de reload la page
        promotions.update(promotionID);    // appelle la function updatePromotion qui permet de modif les promos
    })
    


const deleteBtn = document.querySelector('#delete-btn');        // recupere le boutton supprimer
deleteBtn.addEventListener('click', function() {                // au click
    const deleteConfirm = document.querySelector('#delete-confirm');      // recupere la div ayant l'id delete-confirm

    deleteConfirm.style.display = 'block';                  // change le display vers "block" (il est en none par defaut)
})

const confirmBtn = document.querySelector('#delete-confirm-yes');       // recupere le boutton de confirmation positif
const cancelBtn =   document.querySelector('#delete-confirm-no');         // recupere le boutton de confirmation negatif

cancelBtn.addEventListener('click', function() {                // au click sur le bouton annuler
    deleteConfirm.style.display = 'none';                       // fait disparaitre la div
});

confirmBtn.addEventListener('click', function() {               // au click sur le bouton valider
    promotions.delete(promotionID);                             // appelle la fonction deletePromotion 
});

}

document.addEventListener('DOMContentLoaded',init);           // Appelle la fonction init lorsque le code HTMl est chargé