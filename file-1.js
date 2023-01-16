// написать игру города. 
// словарь с городами комп выбирает город по последней букве
// потом вводит пользователь и комп продолжает без повторов

// file:///Z:

// function main() {
// let sitys = ['Москва', 'Красноярск', 'Архангельск', 'Краснодар', 
// 'Ростов-на-Дону', 'Ульяновск', 'Калининград', 'Дмитров', 
// 'Владивосток','Краснознаменск', 'Казань', 'Нальчик', 'Кировоград'];

// // sity_user = 
// }

// window.onload = main;

let sitys = ['Москва', 'Красноярск', 'Архангельск', 'Краснодар', 
'Ростов-на-Дону', 'Ульяновск', 'Калининград', 'Дмитров', 
'Владивосток','Краснознаменск', 'Казань', 'Нальчик', 'Кировоград'];

let sity_comp = ''

function get_next_city(my_city) {
	for (var i = 0; i < sitys.length; i++) {
		if (sitys[i][0].toLowerCase() === my_city[my_city.length - 1]) {
			let result = sitys[i];
			sitys = sitys.filter(
			item => item !== result);
			return result;
		}
	}
	return "Ты выиграл!"
}

b1.onclick = function() {
    console.log(sitys[5]);
    var sity_user = document.getElementById('a1').value;
    if (sity_comp === '') {
        sity_comp = get_next_city(sity_user)
        document.getElementById('s1').innerHTML = sity_comp;
        document.getElementById('s3').innerHTML = sity_comp[sity_comp.length -1];
        document.getElementById('s2').innerHTML += sity_user + " - " +  sity_comp;
    } else {
    if (sity_comp[sity_comp.length - 1] !== sity_user[0].toLowerCase() ) {
        document.getElementById('s2').innerHTML += '<br>' + 'Введите правильно город'
    } else {
        sity_comp = get_next_city(sity_user)
        document.getElementById('s1').innerHTML = sity_comp;
        document.getElementById('s3').innerHTML = sity_comp[sity_comp.length -1];
        document.getElementById('s2').innerHTML += '<br>' + sity_user + " - " +  sity_comp;
        	}}
};

// function main() {
//     console.log(sitys[3]);
// }
// window.onload = main;