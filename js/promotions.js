import utils from './utils.js';

function getPromotions() {
fetch(utils.API_URL)
   .then(function(response) {
       return response.json();
   })
   .then(function(json){
       const promotions = json['hydra:member'];
       console.log(promotions);
       const list = document.querySelector('.students-list');
       list.innerHTML = '';

       promotions.forEach(function(promotion) {
           const li = document.createElement('li');
           const link = document.createElement('a');
           link.href = 'promotion.html';
           link.textContent = promotion.name;

           li.appendChild(link);
           list.appendChild(li);
       })
           
       })
    };

    function createPromotion() {
        const nameInput = document.getElementById("new-promotion-name");
        const startInput = document.getElementById("new-promotion-startdate");
        const endInput = document.getElementById("new-promotion-enddate");
        console.log(nameInput.value);
        
        fetch(utils.API_URL, {
            method: 'POST',
            headers: new Headers({'content-type': 'application/json'}),
            body: JSON.stringify({
                name: nameInput.value,
                startDate: startInput.value,
                endDate: endInput.value,
                students: []
            })


        })
        .then(function(response){
            getPromotions();
        })
        .catch(function(error){
            console.log(error);
        })
    }

    export default {
        getAll : getPromotions,
        create : createPromotion
    }