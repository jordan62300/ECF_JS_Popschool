import utils from './utils.js';

function getPromotions() {          // function that display all the promotions
fetch(utils.API_URL)                // fetch the API's URL
   .then(function(response) {
       return response.json();
   })
   .then(function(json){
       const promotions = json['hydra:member'];                 // stock the promotions in a variable
       console.log(promotions);                                 // display the promotions in the console
       const list = document.querySelector('.students-list');   // 
       list.innerHTML = ' ';                                      // delete the value inside the list
       promotions.forEach(function(promotion) {                    // check the promotion one by one
           const li = document.createElement('li');                 // 
           const link = document.createElement('a');                // 
           link.href = 'promotion.html?id=' + promotion.id;           // add the link + the promotion's id
           link.textContent = promotion.name;                           // display the promotion's name in a <a> html tag

           li.appendChild(link);                                    
           list.appendChild(li);                                    
       })                                                           
           
    })
    };


    function createPromotion() {                                                //function that create a new promotion
        const nameInput = document.getElementById("new-promotion-name");          
        const startInput = document.getElementById("new-promotion-startdate");   
        const endInput = document.getElementById("new-promotion-enddate");         
                                                
        
        fetch(utils.API_URL, {                                                // fetch the API's URL 
            method: 'POST',                                                    // Use the method POST to display the new value filled in the field
            headers: new Headers({'content-type': 'application/json'}),
            body: JSON.stringify({
                name: nameInput.value,
                startDate: startInput.value,
                endDate: endInput.value,
                students: []
            })


        })
        .then(function(response){        // then display all the promotions 
            getPromotions();
        })
        .catch(function(error){             // display an error message
            console.log(error);
        })
    }

    function getPromotion(id){            
        fetch(utils.API_URL + '/' + id)     // fetch the API's URL + the id parrameter (wich must be the promotion ID)
   .then(function(response) {
       return response.json();
   })
   .then(function(json){
      const nameInput = document.querySelector('#promotion-name');                  
      const startInput = document.querySelector('#promotion-startdate');
      const endInput = document.querySelector('#promotion-enddate');

      const startDate = new Date(json.startDate);                           // create the startdate object
      const endDate = new Date(json.endDate);                               // create the endDdate object
      
      nameInput.value = json.name;                                        // display the promotion's name in the "name" field
      
        startInput.value = utils.formatDate(startDate);             // display the promotion's startDate in the "startdate" field
        endInput.value= utils.formatDate(endDate);                   // display the promotion's endDate in the "endDate" field
        
       });
    }

    function updatePromotion(id) {                          // function that modify the promotion 
        const nameInput = document.querySelector('#promotion-name');
        const startInput = document.querySelector('#promotion-startdate');
        const endInput = document.querySelector('#promotion-enddate');

        fetch(utils.API_URL + '/' + id, {                                                // fetch the API's URL + the id parrameter 
            method: 'PUT',                                                          // use the PUT methode to modify the value of a promotion , the values are taken in the corresponding fields 
            headers: new Headers({'content-type': 'application/json'}),
            body: JSON.stringify({
                name: nameInput.value,
                startDate: startInput.value,
                endDate: endInput.value,
                students: []
            })


        })
        .then(function(response){
            document.location.href = 'http://localhost:8000'       // return the user in the page located to 
        })
        .catch(function(error) {
            console.log(error);                                    // return an error message when there is an error
        });
    }

    function deletePromotion(id) {                  // function that delete a promotion 
        fetch(utils.API_URL + '/' + id,{            // fetch the API's URL + the id parrameter 
            method: 'DELETE'                        // Use the delete method to delete a promotion 
        })
        .then(function(response){
            document.location.href = 'http://localhost:8000'; // then return the user located to the url 
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