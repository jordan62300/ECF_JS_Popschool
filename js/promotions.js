import utils from './utils.js';

function getPromotions() {
fetch(utils.API_URL)                // recupere L'url de l'API dans le fichier utils
   .then(function(response) {
       return response.json();
   })
   .then(function(json){
       const promotions = json['hydra:member'];                 // recupere les promotions et les stocks dans la variable
       console.log(promotions);                                 // Affiche toutes les promos dans la console
       const list = document.querySelector('.students-list');   // selectionne la balise ul
       list.innerHTML = '';                                      // supprime les valeurs affichées
       promotions.forEach(function(promotion) {                    // check les promotions une par une
           const li = document.createElement('li');                 // stock la creation d'une balise li dans var li
           const link = document.createElement('a');                // ''         ''          lien dans var link
           link.href = 'promotion.html?id=' + promotion.id;           // ajoute le lien  + l'id de la promotion
           link.textContent = promotion.name;                           // affiche les noms de promos dans la page

           li.appendChild(link);                                    // colle la balise a aux balise li
           list.appendChild(li);                                    // colle la ballise li a l'ul
       })
           
    })
    };


    function createPromotion() {
        const nameInput = document.getElementById("new-promotion-name");          // selectionne le champ des noms de promotions
        const startInput = document.getElementById("new-promotion-startdate");   // selectionne le champ des dates de debut de promo
        const endInput = document.getElementById("new-promotion-enddate");          // selectionne le champ des dates de fin de promo
        console.log(nameInput.value);                                           // affiche ce qu'il a y dans le champ des nom de promo dans la console
        
        fetch(utils.API_URL, {                                                // récupere l'url de l'api et ajoute comme parrametre un POST qui permet d'ajouter des promotions en fonctions des information passer dans les champs
            method: 'POST',
            headers: new Headers({'content-type': 'application/json'}),
            body: JSON.stringify({
                name: nameInput.value,
                startDate: startInput.value,
                endDate: endInput.value,
                students: []
            })


        })
        .then(function(response){        // affiche ensuite les promotions sur la page grace a la fonction ci dessu
            getPromotions();
        })
        .catch(function(error){             // Message d'érreur en cas d'erreur (bawi)
            console.log(error);
        })
    }

    function getPromotion(id){            
        fetch(utils.API_URL + '/' + id)     // récupere l'url et y ajoute un / + l'id de la promotion que l'on obtient via le parametre de la fonction 
   .then(function(response) {
       return response.json();
   })
   .then(function(json){
      const nameInput = document.querySelector('#promotion-name');                  // stock le champ ayant l'id promotion name dans nameInput
      const startInput = document.querySelector('#promotion-startdate');
      const endInput = document.querySelector('#promotion-enddate');

      const startDate = new Date(json.startDate);                           // Creer l'objet startDate
      const endDate = new Date(json.endDate);                               // creer l'objet endDate
      
      nameInput.value = json.name;                                        // mettre le nom de la promo dans le champ du nom de promo
      
        startInput.value = utils.formatDate(startDate);             // mets la date de début de la promo dans le champ début de date
        endInput.value= utils.formatDate(endDate);                   // mets la date de fin de la promo dans le champ fin de date
        
       });
    }

    function updatePromotion(id) {                          // fonction qui modifier les promos
        const nameInput = document.querySelector('#promotion-name');
        const startInput = document.querySelector('#promotion-startdate');
        const endInput = document.querySelector('#promotion-enddate');

        fetch(utils.API_URL + '/' + id, {                                                // récupere l'url de l'api et ajoute comme parrametre un PUT qui permet de modifier des promotions en fonctions des information passer dans les champs
            method: 'PUT',
            headers: new Headers({'content-type': 'application/json'}),
            body: JSON.stringify({
                name: nameInput.value,
                startDate: startInput.value,
                endDate: endInput.value,
                students: []
            })


        })
        .then(function(response){
            document.location.href = 'http://localhost:8000'       // renvoit  a l'adresse localhost:8000 (donc dans l'index.html)
        })
        .catch(function(error) {
            console.log(error);                                    // message d'erreur en cas d'erreur
        });
    }

    function deletePromotion(id) {
        fetch(utils.API_URL + '/' + id,{
            method: 'DELETE'
        })
        .then(function(response){
            document.location.href = 'http://localhost:8000';
        })
        .catch(function(error) {
            console.log(error);
        });
    }


    export default {
        getAll : getPromotions,                                             // export les functions
        create : createPromotion,
        get: getPromotion,
        update: updatePromotion,
        delete: deletePromotion
    }