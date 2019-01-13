import utils from './utils.js';
import promotions from './promotions.js';

const url = 'http://api-students.popschool-lens.fr/api/students';

function getStudent(id) {
  // console.log(url);
   fetch(url)
   .then(function(response) {
    return response.json();
})
.then(function(json){
    const students = json['hydra:member'];                 // recupere tous les students et les stocks dans la variable
    const promo = "/api/promotions/" + id;
    console.log(students);  
  // console.log(student)
  students.forEach(function(student){
      if(promo == student.promotion){
  
  const list = document.querySelector('.list');   // selectionne la balise ul
  const li = document.createElement('li');                 // stock la creation d'une balise li dans var li
  const link = document.createElement('a');                // ''         ''          lien dans var link
  link.href = 'student.html?id=' + student.id;           // ajoute le lien  + l'id de la promotion
  link.textContent = student.firstname;                           // affiche les noms de promos dans la page

  li.appendChild(link);                                    // colle la balise a aux balise li
  list.appendChild(li);  
      }
  }) 
  })
}

export default {
    getStudent : getStudent
}