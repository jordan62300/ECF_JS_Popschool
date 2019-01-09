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

       promotions.forEach(function(promotion) {
           const li = document.createElement('li');
           li.textContent = promotion.name;
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


        }

        )}

    export default {
        getAll : getPromotions,
        create : createPromotion
    }