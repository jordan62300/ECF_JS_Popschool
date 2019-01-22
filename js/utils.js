function formatDate(date) {                     // fonction permettant de mettre la date dans un format correcte ( yy - mm - dd)
let year = date.getFullYear();                  // recupere l'année en yyyy
let month = date.getMonth();                     // recupere le mois
let day = date.getDate();                          // recupere le jour


if(month < 10) {                                   // si le mois est inférieur a 10 rajoute un 0 au début du chiffre et augmente le mois de 1 ( car janvier est la valeur 0)
    month = '0' + (month + 1);
} else {
    month = month + 1;
console.log(month);
}

if(day < 10) {                                      // si le mois est inférieur a 10 rajoute un 0 au début du chiffre 
    day = '0' + day;
}
return year + '-' + month + '-' + day;                  // renvoit les valeurs year month et day
}


export default {
    API_URL : 'http://api-students.popschool-lens.fr/api/promotions',           // export l'api
    formatDate : formatDate                                                     // export la fonction formatDate
}


/* @id": "/api/students/1"
​​​
"@type": "Student"
​​​
birthdate: null
​​​
firstname: "Alexandre"
​​​
id: 1
​​​
lastname: "Mahieu"
​​​
promotion: "/api/promotions/1"
​​​
sex: null

*/

// <li> `<a href=promotion.html?id=${promotionID}> ${item.id} . ${item.name} </a> </li> <br>`