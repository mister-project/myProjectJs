'use strict';
//объявление переменных


const appData = {
    title: '',
    screens: '',
    screenPrice: 0,
    adaptive: true,
    rollback: 15,
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    service1: '',
    service2: '',
    

    asking: function() {
        appData.title = prompt('Как назывется ваш проект?', "Калькулятор верстки");
        appData.screens = prompt('Какие типы экранов нужно разработать? (через запятую, пожалуйста)', "Простые, сложные");
       
        do {
            appData.screenPrice = +prompt('Сколько будет стоить данная работа (в руб.)?', 31000).trim();
        } while (!isNumber(appData.screenPrice));
       
    
        appData.adaptive = confirm('Нужен ли адаптив на сайте? (выберите нужную кнопку)');
        
    },
//В названии проекта удаление пробелов + отделение первой буквы, превращение в заглавную и присоединении остальной части названия проекта
   getTitle: function() {
        return ((appData.title.trimStart()).toUpperCase()).slice(0,1) + appData.title.trimStart().toLowerCase().substring(1)
        //toLowerCase - возвращает значение вызванной строки, переведенной в нижний регистр.
      },
}

//isNumber()) функция проверки на чило
const isNumber = function(num) {
    return !isNaN(parseFloat(num) && isFinite(num));
    
}








const getallServicePrices = function() {
    let sum = 0;
    

    for (let i = 0; i < 2; i++) {
        let n = 0;
        if (i === 0) {
            appData.service1 = prompt('Какой дополнительный тип услуги нужен?', 'услуга1')
                 
        } else if (i===1) {
            appData.service2 = prompt('Какой ещё дополнительный тип услуги нужен?', 'услуга2');
            
        }
         
        do {
        
        n = prompt('Сколько это будет стоить (руб.)?', 4500);   
        } while (!isNumber(n)) {
           // console.log(sum);  
           
           sum += +n;
        }


        
        
       
       
    }
        return sum;
        
   
}
        
  

function getFullPrice () {
  return appData.screenPrice + appData.allServicePrices;
}


// функционал
const getServicePercentPrices = function() {
    return appData.fullPrice - (appData.fullPrice * (appData.rollback / 100));
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
       
   
           
appData.asking();
appData.allServicePrices = getallServicePrices();
appData.fullPrice = getFullPrice();
appData.servicePercentPrice = getServicePercentPrices();

getRollbackMessage()



// блок вывода(мусор)

console.log(appData.getTitle());
console.log(appData.fullPrice);
console.log(appData.servicePercentPrice);




