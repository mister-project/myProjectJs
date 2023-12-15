//'use strict';
//объявление переменных
let title = prompt('Как назывется ваш проект?');
let screens = prompt('Какие типы экранов нужно разработать? (через запятую, пожалуйста)');
let screenPrice = +prompt('Сколько будет стоить данная работа (в руб.)?');
let adaptive = !!prompt('Нужен ли адаптив на сайте? (! Да - НАПИШИТЕ "Да", Нет - ОСТАВЬТЕ ПОЛЕ ПУСТЫМ ! )');
let service1 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1 = +prompt('Сколько это будет стоить (руб.)?');
let service2 = prompt('Какой ещё дополнительный тип услуги нужен?');
let servicePrice2 = +prompt('Сколько ещё это будет стоить (руб.?)');
let fullPrice = screenPrice + servicePrice1 + servicePrice2;
const rollback = 15;
const kursDoll = 92; //задаю курс доллара (Урок 2)
const kursGriv = 25; //задаю курс гривны (Урок 2)
const kursYuan = 12.8; //задаю курс юани (Урок 2)
let servicePercentPrice = fullPrice - (fullPrice*(rollback/100));
let mesSale;
// определение функций

// функционал

switch (true) {
    case fullPrice > 30000:
        mesSale = 'Даем скидку 10%';
        break
    case 15000 < fullPrice && fullPrice <= 30000:
        mesSale = 'Даем скидку 5%';
        break
    case 0 < fullPrice && fullPrice <= 15000:
        mesSale = 'Скидка не предусмотрена';
        break
    case fullPrice <= 0:
        mesSale = 'Что-то пошло не так';
        break
}

// блок вывода(мусор)
console.log(title);
console.log("п. 3.7 Доп. сервис1: " + service1 + " Цена: " + servicePrice1 + " руб.");
console.log("п. 3.7 Доп. сервис2: " + service2 + " Цена: " + servicePrice2 + " руб.");
console.log("п. 3.8 Стоимость разработки сайта " + fullPrice.toFixed(2) + " руб./ " + (fullPrice/kursDoll).toFixed(2) + " дол./ " + (fullPrice/kursGriv).toFixed(2) + " гр./ " + (fullPrice/kursYuan).toFixed(2) + " юан. ");
console.log("п. 2.2.4 Откат посреднику " + rollback + "%: " + (fullPrice*(rollback/100)).toFixed(2) + " руб."); 
console.log("п. 3.9 Цена за вычетом отката: " + Math.ceil(servicePercentPrice) + " руб.");
console.log(mesSale);
