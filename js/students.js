import utils from './utils.js';
import promotions from './promotions.js';

const url = 'http://api-students.popschool-lens.fr/api/students';

function getStudents(id) {
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
  link.href = 'student.html?id=' + student.id + '&promoid=' + id;           // ajoute le lien  + l'id de la promotion
  link.textContent = student.firstname;                           // affiche les noms de promos dans la page

  li.appendChild(link);                                    // colle la balise a aux balise li
  list.appendChild(li);  
      }
  }) 
  })
}

function createStudent(id) {
        const nameInput = document.getElementById("student-name");
        const lastnameInput =  document.querySelector('#student-lastname'); 
        const sex = document.querySelector('#student-sex'); 
       

        fetch(url, {                                                // récupere l'url de l'api et ajoute comme parrametre un POST qui permet d'ajouter des promotions en fonctions des information passer dans les champs
            method: 'POST',
            headers: new Headers({'content-type': 'application/json'}),
            body: JSON.stringify({
                firstname: nameInput.value,
                lastname: lastnameInput.value,
                birthdate: "2019-01-13T13:30:49.788Z",
                promotion: 'api/promotions/' + id
            })


        })
        .then(function(response){        // affiche ensuite les promotions sur la page grace a la fonction ci dessu
            getStudents(id);
        })
        .catch(function(error){             // Message d'érreur en cas d'erreur (bawi)
            console.log(error);
        })
}

function getStudent(id){            
    fetch(url + '/' + id)     // récupere l'url et y ajoute un / + l'id de la promotion que l'on obtient via le parametre de la fonction 
.then(function(response) {
   return response.json();
})
.then(function(json){
  const nameInput = document.querySelector('#student-name');                  // stock le champ ayant l'id promotion name dans nameInput
  const lastnameInput =  document.querySelector('#student-lastname'); 
  const id = document.querySelector('#student-id'); 
  
  nameInput.value = json.firstname;                                        // mettre le nom de la promo dans le champ du nom de promo
  lastnameInput.value = json.lastname;   
  id.value = json.id
   });
}

function deleteStudent(sid,pid) {
    fetch(url + '/' + sid,{
        method: 'DELETE'
    })
    .then(function(response){
        document.location.href = 'http://localhost:8000/promotion.html?id=' + pid;// Renvoit a la page index.html
    })
    .catch(function(error) {
        console.log(error);
    });
}



export default {
    getStudents : getStudents,
    createStudent : createStudent,
    deleteStudent : deleteStudent,
    getStudent : getStudent
}