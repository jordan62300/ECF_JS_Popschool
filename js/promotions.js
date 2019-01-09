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

    export default {
        getAll : getPromotions
    }