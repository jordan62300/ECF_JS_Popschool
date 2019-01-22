import students from './students.js';



function init() {
    const url = new URL(window.location.href);                   // get back the id of student that was in the url
    const params = new URLSearchParams(url.search);                
    const studentID = params.get('id');    

    const promourl = new URL(window.location.href);                   // Recupere l'url et la stock dans url
    const promoparams = new URLSearchParams(promourl.search);                
    const promotionID = promoparams.get('promoid');  

    console.log(promotionID)
    
    students.getStudent(studentID)                                  // call the function that display the selected student

    const deletebtn = document.querySelector('#delete-btn');
  deletebtn.addEventListener('click', function(e) {                 // on click delete the selected student 
    e.preventDefault();
    students.deleteStudent(studentID,promotionID);
  });
        
    
}

document.addEventListener('DOMContentLoaded',init);