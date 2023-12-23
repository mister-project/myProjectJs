'use strict';
//объявление переменных
let title;
let screens;
let screenPrice;
let adaptive;

const rollback = 15;

let allServicePrices;
let fullPrice;
let servicePercentPrice;

let service1;
let service2;


//isNumber()) функция проверки на чило
const isNumber = function(num) {
    return !isNaN(parseFloat(num) && isFinite(num));
    
}

function asking() {
    title = prompt('Как назывется ваш проект?', "Калькулятор верстки");
    screens = prompt('Какие типы экранов нужно разработать? (через запятую, пожалуйста)', "Простые, сложные");

   

    do {
        screenPrice = +prompt('Сколько будет стоить данная работа (в руб.)?', 31000).trim();
    } while (!isNumber(screenPrice));
   

    adaptive = confirm('Нужен ли адаптив на сайте? (выберите нужную кнопку)');


}


const showTypeOf = function(variable){
console.log('variable', variable, typeof variable)
}

function getTitle(w) {
  return ((w.trimStart()).toUpperCase()).slice(0,1) + w.trimStart().substring(1) 
}


const getallServicePrices = function() {
    let sum = 0;
    let n = 0;

    for (let i = 0; i < 2; i++) {

        if (i === 0) {
            service1 = prompt('Какой дополнительный тип услуги нужен?', 'услуга1')
                 
        } else if (i===1) {
            service2 = prompt('Какой ещё дополнительный тип услуги нужен?', 'услуга2');
            
        }
         
        do {
        
        n = +prompt('Сколько это будет стоить (руб.)?');   
        } while (!isNumber(n)) {
           // console.log(sum);  
           sum += n;
        }


        
        
       
       
    }
        return sum;
        
   
}
        
  

function getFullPrice () {
  return screenPrice + allServicePrices;
}


// функционал
const getServicePercentPrices = function() {
    return fullPrice - (fullPrice * (rollback / 100));
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
       
   
           
asking();
allServicePrices = getallServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();

getRollbackMessage()

showTypeOf(title)
showTypeOf(screenPrice)
showTypeOf(adaptive)

// блок вывода(мусор)




console.log("Экраны: " + screens);


console.log("Доп. сервис1: " + service1);
console.log("Доп. сервис2: " + service2);

console.log("allServicePrices ", allServicePrices + " руб."); 

// стоимость верстки экранов: screenPrice + fullPrice );
console.log("Полная стоимость " + fullPrice + " руб. ");
console.log("Откат посреднику " + rollback + "%: " + (fullPrice * (rollback / 100)).toFixed(2) + " руб."); 
console.log("Цена за вычетом отката: " + Math.ceil(servicePercentPrice) + " руб.");
//формула, чтобы не забыть servicePercentPrice = fullPrice - (fullPrice*(rollback/100))
console.log(getRollbackMessage(fullPrice));

