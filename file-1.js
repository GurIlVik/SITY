// написать игру города. 
// словарь с городами комп выбирает город по последней букве
// потом вводит пользователь и комп продолжает без повторов

// file:///Z:

var sitys = ['Москва', 'Киров', 'Красноярск', 'Архангельск', 'Краснодар', 
'Ростов-на-Дону', 'Ульяновск', 'Калининград', 'Дмитров', 
'Владивосток','Краснознаменск', 'Казань', 'Нальчик', 'Кировоград'];

let sity_comp = '';
let list_sity_post = [];

function global_list () {
    let i;
    let res = [];
    for (i=0; i<sitys.length; i++){
        res.push(sitys[i])
    }
    for (i=0; i<list_sity_post.length; i++){
        res.push(list_sity_post[i])
    }
    return res
}


function last_letter (word) {
    let letters_no = ['ь', 'ы'];
    for (let i = 0; i < letters_no.length; i ++) {
        if (word[word.length -1] == letters_no[i]) {
            return word[word.length - 2]
        }
    }
    return word[word.length -1]
}

function check_new_sity(sity_new) {
    let i;
    let chek = 0;
    console.log(chek);
    let sit_list = global_list ();
    console.log(sit_list);
    if ('Этот город уже был, введите другой.' != sity_new) {
    for (i = 0; i < sit_list.length; i ++){
        console.log(sity_new);
        console.log(sit_list[i]);
        if (sity_new == sit_list[i]) {
            chek += 1; }}  
    console.log(chek);      
    if (chek != 1) {
        document.getElementById('s2').innerHTML += '<br>' + "Спасибо, я добавил в свой список новый город!";
        console.log(sitys);
    }console.log(list_sity_post);
    chek = 0;}}


function get_next_city(my_city) {
	for (var i = 0; i < sitys.length; i++) {
		if (sitys[i][0].toLowerCase() === last_letter(my_city)) {
            if (sitys[i] != my_city) {
			let result = sitys[i];
			sitys = sitys.filter( item => item !== result);
			return result;
		}}
	}
    for (let i = 0; i < sitys.length; i++) {
        list_sity_post.push(sitys[i]);
    }
	return "Ты выиграл!"
}

function writer (sity_comp, sity_user) {
    document.getElementById('s1').innerHTML = sity_comp;
    document.getElementById('s3').innerHTML = last_letter(sity_comp);
    document.getElementById('s2').innerHTML += '<br>' + sity_user + " - " +  sity_comp;
    list_sity_post.push(sity_user);
    list_sity_post.push(sity_comp);
    sitys = sitys.filter(item => item !== sity_user);
    document.getElementById('a1').innerHTML = ''; // почему не работает innerHTML 
}

function checkuser (use) {
    let letters = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Э', 'Ю', 'Я'];
    for (let i = 0; i < letters.length; i ++) {
        if (use[0] === letters[i]) {
            for (let j = 0; j < list_sity_post.length; j ++) {
                if (list_sity_post[j] == use){
                    return 'Этот город уже был, введите другой.'}}
            return use
        }};  return false}

function start (sitys) {
    b1.onclick = function() {
        var sity_user = document.getElementById('a1').value;
        sity_user = checkuser(sity_user);
        check_new_sity(sity_user);
        if (sity_user === false) {
            document.getElementById('s2').innerHTML += '<br>' + 'Введите правильно город, первая буква указана не верно:';
            document.getElementById('a1').innerHTML = '';
        } else {
            if (sity_user == 'Этот город уже был, введите другой.') {
                document.getElementById('s2').innerHTML += '<br>' + sity_user
            } else {
            if (sity_comp === '') {
                sity_comp = get_next_city(sity_user)
                writer (sity_comp, sity_user)
            } else {
            if (sity_comp[sity_comp.length - 1] !== sity_user[0].toLowerCase() ) {
                document.getElementById('s2').innerHTML += '<br>' + 'Введите правильно город'
            } else {
                sity_comp = get_next_city(sity_user)
                writer (sity_comp, sity_user)
        }}}};}
        }
    
window.onload = () => {
    start (sitys);
};





// постараться вынести список в файл HTML
// 
