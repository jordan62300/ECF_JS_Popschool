import students from './students.js';



function init() {
    students.get();
    //const url = new URL(window.location.href);                   // Recupere l'url et la stock dans url
    //const params = new URLSearchParams(url.search);                
  //  const promotionID = params.get('id');                          // recupere l'id de la promotion qui etait dans l'url
  //  students.get(promotionID);     
}

document.addEventListener('DOMContentLoaded',init);