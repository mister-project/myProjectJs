//'use strict';
//объявление переменных
let title = prompt('Как назывется ваш проект?');
let screens = prompt('Какие типы экранов нужно разработать? (через запятую, пожалуйста)');
let screenPrice = +prompt('Сколько будет стоить данная работа (в руб.)?');
let adaptive = confirm('Нужен ли адаптив на сайте? (выберите нужную кнопку)');


const rollback = 15;
const kursDoll = 92; //задаю курс доллара (Урок 2)
const kursGriv = 25; //задаю курс гривны (Урок 2)
const kursYuan = 12.8; //задаю курс юани (Урок 2)

let allServicePrices;
let fullPrice;
let servicePercentPrice;

let service1 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1 = +prompt('Сколько это будет стоить (руб.)?');
let service2 = prompt('Какой ещё дополнительный тип услуги нужен?');
let servicePrice2 = +prompt('Сколько ещё это будет стоить (руб.?)');

// определение функций
const showTypeOf = function(variable){
console.log(variable, typeof variable)
}

function getTitle(w) {
  return ((w.trimStart()).toUpperCase()).slice(0,1) + w.trimStart().substring(1) 
}


const getallServicePrices = function(x, y) {
    return x + y;
}
function getFullPrice (a, b) {
    return a + b;
}
// функционал
let getServicePercentPrices = function(c, d) {
    return c - (c*(d/100));
}



function getRollbackMessage(price) {
    switch (true) {
        case price > 30000:
            return 'Даем скидку 10%';
            break;
        case 15000 < price && price <= 30000:
            return 'Даем скидку 5%';
            break;
        case 0 < price && price <= 15000:
            return 'Скидка не предусмотрена';
            break;
        case price  <= 0:
            return 'Что-то пошло не так';
            break;
    }
}
       
     getRollbackMessage()

     showTypeOf(title)
     showTypeOf(screenPrice)
     showTypeOf(adaptive) 
           

allServicePrices = getallServicePrices(servicePrice1, servicePrice2);
fullPrice = screenPrice + allServicePrices;
servicePercentPrice = getServicePercentPrices(fullPrice, rollback);
// // блок вывода(мусор)


console.log("Доп. сервис1: " + service1 + " Цена: " + servicePrice1 + " руб.");
console.log("Доп. сервис2: " + service2 + " Цена: " + servicePrice2 + " руб.");

console.log("Откат посреднику " + rollback + "%: " + (fullPrice*(rollback/100)).toFixed(2) + " руб."); 
console.log("Цена за вычетом отката: " + Math.ceil(servicePercentPrice) + " руб.");//формула, чтобы не забыть - servicePercentPrice = fullPrice - (fullPrice*(rollback/100))
console.log(getRollbackMessage(fullPrice));
//.console.log(allServicePrices); пока решил не убирать???


