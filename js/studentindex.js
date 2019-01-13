import students from './students.js';



function init() {
    const url = new URL(window.location.href);                   // Recupere l'url et la stock dans url
    const params = new URLSearchParams(url.search);                
    const studentID = params.get('id');    

    const studenturl = new URL(window.location.href);                   // Recupere l'url et la stock dans url
    const studentparams = new URLSearchParams(studenturl.search);                
    const promotionID = studentparams.get('promoid');  

    console.log(promotionID)
    
    students.getStudent(studentID)

    const deletebtn = document.querySelector('#delete-btn');
  deletebtn.addEventListener('click', function(e) {
    e.preventDefault();
    students.deleteStudent(studentID,promotionID);
  });
        
    
}

document.addEventListener('DOMContentLoaded',init);