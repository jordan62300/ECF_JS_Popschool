function formatDate(date) {
let year = date.getFullYear();
let month = date.getMonth();
let day = date.getDate();


if(month < 10) {
    month = '0' + (month + 1);
} else {
    month = month + 1;
console.log(month);
}

if(day < 10) {
    day = '0' + day;
}
return year + '-' + month + '-' + day;
}


export default {
    API_URL : 'http://api-students.popschool-lens.fr/api/promotions',
    formatDate : formatDate
}