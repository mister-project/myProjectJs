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
    num: 0,
    sum: 0,
    n: 0,
    price: 0,
    

    asking: function() {
        appData.title = prompt('Как назывется ваш проект?', "Калькулятор верстки");
        appData.screens = prompt('Какие типы экранов нужно разработать? (через запятую, пожалуйста)', "Простые, сложные");
       
        do {appData.screenPrice = +prompt('Сколько будет стоить данная работа (в руб.)?', 31000).trim()
        } while (!appData.isNumber(appData.screenPrice));
       
       
    
        appData.adaptive = confirm('Нужен ли адаптив на сайте? (выберите нужную кнопку)');
        
    },
//В названии проекта удаление пробелов + отделение первой буквы, превращение в заглавную и присоединении остальной части названия проекта
    getTitle: function() {
        return ((appData.title.trimStart()).toUpperCase()).slice(0,1) + appData.title.trimStart().toLowerCase().substring(1)
        
      },
      //isNumber()) функция проверки на чило
    isNumber: function(num) {
    return !isNaN(parseFloat(num) && isFinite(num))
    
        },
    //метод - цикл для ввода и валидации доп. услуг 
    getallServicePrices: function() {
              
    
            for (let i = 0; i < 2; i++) {
                
                if (i === 0) {
                    appData.service1 = prompt('Какой дополнительный тип услуги нужен?', 'услуга1')
                         
                } else if (i===1) {
                    appData.service2 = prompt('Какой ещё дополнительный тип услуги нужен?', 'услуга2');
                    
                }
                 
                do {
                
                appData.n = prompt('Сколько это будет стоить (руб.)?', 4500);   
                } while (!appData.isNumber(appData.n)) {
                   // console.log(sum);  
                   
                   appData.sum += +appData.n;
                }       
                
              
               
            }
                return appData.sum
                
           
        },
      //метод для сложения итоговой стоимости (без отката)
      getFullPrice: function() {
        return appData.screenPrice + appData.allServicePrices;
      },

      //метод подсчета стоимости за вычетом отката
      getServicePercentPrices: function() {
        return appData.fullPrice - (appData.fullPrice * (appData.rollback / 100))
    },
    // Расчет скидки в зависимости от суммы
    getRollbackMessage: function(price) {
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
} //КОНЕЦ ОБЬЕКТА


let stub = {
    
         

}
    
  

// функционал





       
   
           
appData.asking();
appData.allServicePrices = appData.getallServicePrices();
appData.fullPrice = appData.getFullPrice();
appData.servicePercentPrice = appData.getServicePercentPrices();

appData.getRollbackMessage()



// блок вывода(мусор)

console.log(appData.getTitle());
console.log(appData.fullPrice);
console.log(appData.servicePercentPrice);
console.log(appData.getRollbackMessage(appData.fullPrice));




