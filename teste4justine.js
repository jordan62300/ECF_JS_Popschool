
 const url = new URL(window.location.href);                   // Recupere l'url et la stock dans url
 const params = new URLSearchParams(url.search);                
 const promotionID = params.get('id');                          // recupere l'id de la promotion qui etait dans l'url
    

function getPromotion(id){   
                             // recupere l'id de la promotion qui etait dans l'url
                
    fetch(API_URL + '/' + id)     // récupere l'url et y ajoute un / + l'id de la promotion que l'on obtient via le parametre de la fonction 
.then(function(response) {
   return response.json();
})
.then(function(json){
const h1 = document.querySelector("nom de la classe")

const promotionName = json.name;
h1.innerHTML = promotionName;
}
)      }

getPromotion(promotionID);
