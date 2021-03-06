import promotions from './promotions.js';
import students from './students.js';

function init() {
    const url = new URL(window.location.href);                   
    const params = new URLSearchParams(url.search);                
    const promotionID = params.get('id');                          // get back the id of promotion that was in the url
    promotions.get(promotionID);                                    // display the promotion


    const editPromotionForm = document.querySelector("#edit-promotion");
    editPromotionForm.addEventListener('submit',function(e){        
        e.preventDefault();                                         
        promotions.update(promotionID);    // call the function updatePromotion which allows to modify the promos
    })
    


const deleteBtn = document.querySelector('#delete-btn');        
deleteBtn.addEventListener('click', function() {                
    const deleteConfirm = document.querySelector('#delete-confirm');      

    deleteConfirm.style.display = 'block';                 // change the display to "block" (it is in none by default)
})

const confirmBtn = document.querySelector('#delete-confirm-yes');       
const cancelBtn =   document.querySelector('#delete-confirm-no');        

cancelBtn.addEventListener('click', function() {                // a click on the button makes it possible to make disappear the div
    deleteConfirm.style.display = 'none';                       
});

confirmBtn.addEventListener('click', function() {              // on click call the deletePromotion function wich delete the promo
    promotions.delete(promotionID);                             
});

students.getStudents(promotionID);                          // display all students

const newStudent = document.querySelector('#edit-student');     
newStudent.addEventListener('submit', function(e) {         // a click on the button call the createStudent function wich create a student
    e.preventDefault();
    students.createStudent(promotionID);
})

}

document.addEventListener('DOMContentLoaded',init);           // launch de init function when the DOMContent is fully loaded