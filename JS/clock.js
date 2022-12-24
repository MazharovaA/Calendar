//===================================================Часы==============================================================
//Градус поворота
const deg = 6;

//Выводим в константу стрелки
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');

//Используем функцию для постоянного обновления времени (секундной стрелки)
setInterval(ssUpdate);

function ssUpdate() {

    //Задаём переменные
    const day = new Date(); //Это настоящее время
    const hh = day.getHours() * 30;//Достаём из настоящего времени часы и *30 получаем градус поворота часовой стрелки
    const mm = day.getMinutes() * deg; //Получаем градус поворота минутной стрелки
    const ss = day.getSeconds() * deg; //Получаем градус поворота секундной стрелки

    //Меняем стили поворота стрелок в CSS
    hours.style.transform = `rotateZ(${(hh) + (mm / 12)}deg)`;//Поворачиваем часовую стрелку
    minutes.style.transform = `rotateZ(${(mm)}deg)`;//Поворачиваем минутную стрелку
    seconds.style.transform = `rotateZ(${(ss)}deg)`;//Поворачиваем секудную стрелку
}


//===================================================День недели========================================================
//Создаём функцию, которая ищет в настоящем времени и выводит день недели
function findDay() {
    const day = new Date(); //Это настоящее время

    //Заводим в переменную массив с днями недели
    const dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    //Получаем день недели (от 0 до 6) из константы day (настоящее время)
    var dayNumber = day.getDay();
    //Возвращаем массив с полученным днём недели вместо позиции
    return dayOfWeek[dayNumber]
    //На случай, если нужно указать выходной или рабочий день
    //return dayOfWeek[dayNumber] + ` (${dayNumber < 5 ? "workday": "holiday"})`;

    //Прописываем условия вывода дня недели
    // if (dayNumber === 0){
    //     return dayOfWeek[0];
    // }
    // else if (dayNumber === 1){
    //     return dayOfWeek[1];
    // }
    // else if (dayNumber === 2){
    //     return dayOfWeek [2];
    // }
    // else if (dayNumber === 3){
    //     return dayOfWeek [3];
    // }
    // else if (dayNumber === 4){
    //     return dayOfWeek [4];
    // }
    // else if (dayNumber === 5){
    //     return dayOfWeek [5];
    // }
    // else if (dayNumber === 6){
    //     return dayOfWeek [6];
    // }
}

//Заводим переменную для вывода результата
var result = findDay();

//Выводим результат в HTML
document.getElementById('weekday').innerHTML = result;


//=================================================Месяц, число, год====================================================
//Заводим в переменные элементы DOM месяц, число, год
const month = document.querySelector('.month');
const number = document.querySelector('.number');
const year = document.querySelector('.year');

//Это настоящее время
const day = new Date();

//Заводим массив с месяцами ( от 0 до 11)
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

//Выводим месяц в HTML, обращаясь к DOM-элементу = обращаемся к массиву, к его позиции (из настоящего времени достаём номер месяца)
month.innerHTML = months[day.getMonth()];
//Выводим число в HTML, обращаясь к DOM-элементу = из настоящего времени достаём число (от 1 до 31)
number.innerHTML = day.getDate();
//Выводим год в HTML, обращаясь к DOM-элементу = из настоящего времени достаём год 
year.innerHTML = day.getFullYear();


//===============================================Выпадающее меню по клику=================================================
//Создаём класс show, чтобы сделать список видимым, когда пользователь на него кликает
function showSettings() {
    document.getElementById("myDropdownlist").classList.toggle("show");
}

//Убираем список, когда пользователь кликает на область вне его
window.onclick = function (event) { //Заводим событие по клику на экран
    if (!event.target.matches('.dropbtn')) {//Если клик не состоялся по кнопке,
        var dropdowns = document.getElementsByClassName("content-list");//выводим в переменную выпадающий список 
        var i;//Заводим счетчик
        for (i = 0; i < dropdowns.length; i++) {//Проходим счётчиком по длине списка, где i - номер каждого элемента поочереди, а dropdowns.length - число всех элементов в списке
            var openDropdown = dropdowns[i];//Заводим в переменную каждый элемент списка
            if (openDropdown.classList.contains('show')) {//У каждого элемента убираем класс show, если он у него есть
                openDropdown.classList.remove('show');
            }
        }
    }
    document.querySelector('.dropbtn').style.visibility = 'visible';
    setTimeout(hideSettings, 3000);
    clearTimeout(hideSettings);
}

//Убираем кнопку спустя время после загрузки страницы
var hideSettings = function () {
    if (document.querySelector('.dropbtn').style.visibility = 'visible') {
        document.querySelector('.dropbtn').style.visibility = "hidden";//Обращаемся к id кнопки, и устанавливаем стиль visibility:hidden
    }
}
setTimeout(hideSettings, 3000);//Устанавливаем таймер запуска функции - 20 сек
clearTimeout(hideSettings);//Обновляем таймер*/



//Прописываем стили времён года

const seasons_styles = {
    spring: {
        // time: {from: '01.03', to: '31.05'},
        bg_image: 'IMG/Background_pic/Spring/spring2.jpg',
        seconds_class: 'season_spring',
        effects: false,
        button_image: 'IMG/Icons/settings_spring.svg',
        styleslist_shadowcolor: 'rgba(96, 70, 122, 0.288)',
        link_class: 'spring_link',
        clock_img: 'IMG/Icons/clock.svg',
        clockcenter_class: 'normalcenter_clock',
        hour_class: 'hours_normal',
        minute_class: 'minutes_normal',
        text_style: '#000000',
        congrats: false,
    },
    winter: {
        // time: {from: '01.12', to: '28.02'},
        bg_image: 'IMG/Background_pic/Winter/winter.jpg',
        seconds_class: 'season_winter',
        effects: true,
        button_image: 'IMG/Icons/settings_winter.svg',
        styleslist_shadowcolor: 'rgba(29, 74, 141, 0.288)',
        link_class: 'winter_link',
        clock_img: 'IMG/Icons/clock.svg',
        clockcenter_class: 'normalcenter_clock',
        hour_class: 'hours_normal',
        minute_class: 'minutes_normal',
        text_style: '#000000',
        congrats: false,
    },
    summer: {
        // time: {from: '01.06', to: '31.08'},
        bg_image: 'IMG/Background_pic/Summer/maki.jpg',
        seconds_class: 'season_summer',
        effects: false,
        button_image: 'IMG/Icons/settings_summer.svg',
        styleslist_shadowcolor: 'rgba(110, 18, 18, 0.288)',
        link_class: 'summer_link',
        clock_img: 'IMG/Icons/clock.svg',
        clockcenter_class: 'normalcenter_clock',
        hour_class: 'hours_normal',
        minute_class: 'minutes_normal',
        text_style: '#000000',
        congrats: false,
    },
    autumn: {
        //time: {from: '01.09', to: '30.11'},
        bg_image: 'IMG/Background_pic/Autumn/pumking1.jpg',
        seconds_class: 'season_autumn',
        effects: false,
        button_image: 'IMG/Icons/settings_autumn.svg',
        styleslist_shadowcolor: 'rgba(51, 5, 5, 0.288)',
        link_class: 'autumn_link',
        clock_img: 'IMG/Icons/clock.svg',
        clockcenter_class: 'normalcenter_clock',
        hour_class: 'hours_normal',
        minute_class: 'minutes_normal',
        text_style: '#000000',
        congrats: false,
    },
    christmas: {
        //time:{'25.12', '01.01', '07.01'},
        bg_image: 'IMG/Background_pic/Christmas/Christmas.jpg',
        seconds_class: 'season_christmas',
        effects: false,
        button_image: 'IMG/Icons/settings_christmas.svg',
        styleslist_shadowcolor: 'rgba(224, 191, 70, 0.288)',
        link_class: 'christmas_link',
        clock_img: 'IMG/Icons/clock1.svg',
        clockcenter_class: 'christmascenter_clock',
        hour_class: 'hours_christmas',
        minute_class: 'minutes_christmas',
        text_style: '#F4D891',
        congrats: true,
    }
}

function setSeason() {
    const month_number = day.getMonth();
    const day_number = day.getDate();
    let season_name;
    if (month_number == 11 || month_number == 0 || month_number == 1) {
        season_name = 'winter';
    }
    else if (month_number == 2 || month_number == 3 || month_number == 4) {
        season_name = 'spring';
    }
    else if (month_number == 5 || month_number == 6 || month_number == 7) {
        season_name = 'summer';
    }
    else if (month_number == 8 || month_number == 9 || month_number == 10) {
        season_name = 'autumn';
    }
    else if (month_number == 11 && day_number == 25 || month_number == 0 && day_number == 1 || month_number == 0 && day_number == 7) {
        season_name = 'christmas';
    }
    setStyle(season_name);
}


function setStyle(season_name) {
    setSecondsSeasonStyle(season_name);
    setStylelistLinksColor(season_name);
    setBackgroundStyle(season_name);
    setButtonImg(season_name);
    setStylelistShadowColor(season_name);
    setStyleEffect(season_name);
    setClockStyle(season_name);
    setClockCenterStyle(season_name);
    setHoursSeasonStyle(season_name);
    setMinutesSeasonStyle(season_name);
    setTextStyle(season_name);
    setCongrats(season_name);
}

function setSecondsSeasonStyle(season_name) {
    let seconds_classlist = document.getElementById('seconds').classList;
    for (season_style of Object.values(seasons_styles)) {
        seconds_classlist.remove(season_style.seconds_class);
    }
    seconds_classlist.add(seasons_styles[season_name].seconds_class);
}

function setStylelistLinksColor(season_name) {
    for (element of document.getElementById('myDropdownlist').getElementsByTagName('a')) {
        for (season_style of Object.values(seasons_styles)) {
            element.classList.remove(season_style.link_class);
        }
        element.classList.add(seasons_styles[season_name].link_class);
    }
}

function setBackgroundStyle(season_name) {
    const bg_image = seasons_styles[season_name].bg_image;
    document.body.style.backgroundImage = `url(${bg_image})`;
}

function setButtonImg(season_name) {
    const button_image = seasons_styles[season_name].button_image;
    document.querySelector('.dropbtn').style.background = `url(${button_image})0 0/cover no-repeat`;
}

function setStylelistShadowColor(season_name) {
    const styleslist_shadowcolor = seasons_styles[season_name].styleslist_shadowcolor;
    document.querySelector('.content-list').style.boxShadow = `0px 8px 16px 0px ${styleslist_shadowcolor}`;
}

function setStyleEffect(season_name) {
    snowflake.style.visibility = "hidden";
    if (seasons_styles[season_name].effects) {
        snowflake.style.visibility = "visible";
    };
}

function setClockStyle(season_name) {
    const clock_img = seasons_styles[season_name].clock_img;
    document.querySelector('.clock').style.background = `url(${clock_img})0 0/cover no-repeat`;
}

function setClockCenterStyle(season_name) {
    let clock_center = document.getElementById('clock_face').classList;
    for (season_style of Object.values(seasons_styles)) {
        clock_center.remove(season_style.clockcenter_class);
    }
    clock_center.add(seasons_styles[season_name].clockcenter_class);
}

function setHoursSeasonStyle(season_name) {
    let hour_style = document.getElementById('hours').classList;
    for (season_style of Object.values(seasons_styles)) {
        hour_style.remove(season_style.hour_class);
    }
    hour_style.add(seasons_styles[season_name].hour_class);
}

function setMinutesSeasonStyle(season_name) {
    let minute_style = document.getElementById('minutes').classList;
    for (season_style of Object.values(seasons_styles)) {
        minute_style.remove(season_style.minute_class);
    }
    minute_style.add(seasons_styles[season_name].minute_class);
}

function setTextStyle(season_name) {
    document.querySelector('.dateinf').style.color = seasons_styles[season_name].text_style;
}

function setCongrats(season_name) {
    let congradulations = document.querySelector('.congrats');
    congradulations.style.visibility = "hidden";
    if (seasons_styles[season_name].congrats) {
        congradulations.style.visibility = "visible";
    };
}


//Меняем фон по нажатию на кнопку меню (весна)
let btn_spring = document.querySelector("#spring");//заводим в переменную кнопку выпадающего списка
btn_spring.addEventListener('click', () => { //При клике меняем фон
    setStyle('spring');
}
)


//Меняем фон по нажатию на кнопку меню (лето)
let btn_summer = document.querySelector("#summer");//заводим в переменную кнопку выпадающего списка
btn_summer.addEventListener('click', () => {
    setStyle('summer');
}
)


//Меняем фон по нажатию на кнопку меню (осень)
let btn_autumn = document.querySelector("#autumn");//заводим в переменную кнопку выпадающего списка
btn_autumn.addEventListener('click', () => {
    setStyle('autumn');
}
)

//Меняем фон по нажатию на кнопку меню (зима)
let btn_winter = document.querySelector("#winter");//заводим в переменную кнопку выпадающего списка
btn_winter.addEventListener('click', () => {
    setStyle('winter');
}
)

let btn_auto = document.querySelector('#auto');
btn_auto.addEventListener('click', () => {
    setInterval(setSeason(), 1000);
})

setSeason();

