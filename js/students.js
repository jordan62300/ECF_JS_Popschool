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
  const list = document.querySelector('.list');  
  list.innerHTML = ' ';   
  students.forEach(function(student){
      if(promo == student.promotion){
    // selectionne la balise ul
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

function createStudent(id) {
        const nameInput = document.getElementById("student-name");

        fetch(url, {                                                // récupere l'url de l'api et ajoute comme parrametre un POST qui permet d'ajouter des promotions en fonctions des information passer dans les champs
            method: 'POST',
            headers: new Headers({'content-type': 'application/json'}),
            body: JSON.stringify({
                firstname: nameInput.value,
                lastname: nameInput.value,
                sex: 0,
                birthdate: "2019-01-13T13:30:49.788Z",
                promotion: 'api/promotions/' + id
            })


        })
        .then(function(response){        // affiche ensuite les promotions sur la page grace a la fonction ci dessu
            getStudent();
        })
        .catch(function(error){             // Message d'érreur en cas d'erreur (bawi)
            console.log(error);
        })
}

function deleteStudent() {}



export default {
    getStudent : getStudent,
    createStudent : createStudent
}