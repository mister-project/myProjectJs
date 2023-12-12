'use strict';

//Урок 3 п.3 начало ↓
let title = prompt('Как назывется ваш проект?');
console.log("п. 3.3 Название проекта: " + title);
//Урок 3 п.3 окончание ↑

//Урок 3 п.4 начало
let screens = prompt('Какие типы экранов нужно разработать? (через запятую, пожалуйста)');
console.log("п. 3.4 Типы экранов : " + screens);
//Урок 3 п.4 окончание ↑

//Урок 3 п.5 начало ↓
let screenPrice = +prompt('Сколько будет стоить данная работа (в руб.)?');

//Урок 3 п.5 окончание ↑

// (Урок 2) вып. п 2.3 (часть1 начало)

const KursDoll = 92; //задаю курс доллара (Урок 2)

const KursGriv = 25; //задаю курс гривны (Урок 2)

const KursYuan = 12.8; //задаю курс юани (Урок 2)

// (Урок 2) п. 2.3 вывод стоимости верстки экранов (Урок 2)

console.log("п. 2.2.3: Стоимость верстки экранов " + screenPrice.toFixed(2) + " руб./ " + (screenPrice/KursDoll).toFixed(2) + " дол./ " + (screenPrice/KursGriv).toFixed(2) + " гр./ " + (screenPrice/KursYuan).toFixed(2) + " юан. ");
// (Урок 2) вып. п 2.3 (часть1 окончание)
//Урок 3 п.6 начало ↓
const adaptive = !!prompt('Нужен ли адаптив на сайте? (! Да - НАПИШИТЕ "Да", Нет - ОСТАВЬТЕ ПОЛЕ ПУСТЫМ ! )');
console.log("п. 3.6 Адаптив: " + adaptive + " тип: " + typeof(adaptive)); 
//Урок 3 п.6 окончание//↑
//Урок 3 п.7 начало ↓
const service1 = prompt('Какой дополнительный тип услуги нужен?');
const servicePrice1 = +prompt('Сколько это будет стоить (руб.)?');
console.log("п. 3.7 Доп. сервис1: " + service1 + " Цена: " + servicePrice1 + " руб.");
const service2 = prompt('Какой ещё дополнительный тип услуги нужен?');
const servicePrice2 = +prompt('Сколько ещё это будет стоить (руб.?)');
console.log("п. 3.7 Доп. сервис2: " + service2 + " Цена: " + servicePrice2 + " руб.");
//Урок 3 п.7 окончание//↑
//Урок 3 п.8 начало ↓
const fullPrice = screenPrice + servicePrice1 + servicePrice2;

//(Урок 2) п. 2.3 - часть2-начало вывод стоимости разработки сайта 

console.log("п. 3.8 Стоимость разработки сайта " + fullPrice.toFixed(2) + " руб./ " + (fullPrice/KursDoll).toFixed(2) + " дол./ " + (fullPrice/KursGriv).toFixed(2) + " гр./ " + (fullPrice/KursYuan).toFixed(2) + " юан. ");
// // (Урок 2) вып. п 2.3 окончание 
const rollback = 15;
console.log("п. 2.2.4 Откат посреднику " + rollback + "%: " + (fullPrice*(rollback/100)).toFixed(2) + " руб."); 

//console.log("п. 2.2: " + screens.length); // вып. п 2.2 (Урок 2)


//Урок 3. пункт 9 ==Начало== ↓ вычитание отката посредника 
let servicePercentPrice = fullPrice - (fullPrice*(rollback/100));
console.log("п. 3.9 Цена за вычетом отката: " + Math.ceil(servicePercentPrice) + " руб.");
//Урок 3. пункт 9 ==Окончание== ↑ вычитание отката посредника 

//Урок 3. п. 10 ==Начало== ↓ скидки по условию
switch (true) {
    case fullPrice > 30000:
        console.log('Даем скидку 10%');
        break
    case 15000 < fullPrice && fullPrice <= 30000:
        console.log('Даем скидку 5%');
        break
    case 0 < fullPrice && fullPrice <= 15000:
        console.log('Скидка не предусмотрена');
        break
    case fullPrice <= 0:
        console.log('Что-то пошло не так');
        break
}
//Урок 3. п. 10 ==Окончание== ↑ скидки по условию

//console.log(screens.toLowerCase().split(", ")); // п 2.4 (Урок 2. формирование массива)

