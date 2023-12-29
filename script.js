'use strict';
//объявление переменных


const appData = {
    title: '',
    screens: [],
    screenPrice: 0,
    adaptive: true,
    rollback: 15,
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    services: {},
   
    //num: 0,
    
   // sum: 0,
    
    //price: 0,
    rollbackMessage: 0,
    start: function () {
        appData.asking()
        appData.addPrices()
        appData.getFullPrice()
        appData.getServicePercentPrices()
        appData.getTitle()
        appData.getRollbackMessage(appData.fullPrice)
       
        appData.logger() 
                         
      
      },
         

    asking: function() {
        
        do {
        appData.title = prompt('Как назывется ваш проект?', "Калькулятор верстки");
        } while (appData.isNumber(appData.title));
        // do {
        //     price = prompt('Сколько будет стоить данная работа (в руб.)?', 31000).trim() //убрал + как у Саши
        // } while (isNumber(price));

        // изменения ур. 8 фОРМИРУЕМ новые циклы, массивы, обьекты(ниже)
        for (let i = 0; i < 2; i++) {
            do {
            name = prompt('Какие типы экранов нужно разработать?' )
            }  while (appData.isNumber(name));
            let price = 0;

            do {
                price = prompt('Сколько будет стоить данная работа (в руб.)?', 31000).trim() //убрал + как у Саши
            } while (!appData.isNumber(price));

            appData.screens.push({ id: i, name: name, price: price })
        }

       
        

        //ур8. новые циклы конец

        //Начало цикла for
        for (let i = 0; i < 2; i++) {
            do {
            name = prompt('Какой дополнительный тип услуги нужен?', 'услуга1')  
        }  while (appData.isNumber(name));  
            let price = 0;            
             
            do {
            
            price = prompt('Сколько это будет стоить (руб.)?', 4500);   
            } while (!appData.isNumber(price)) 
              
               
               appData.services[name[i]] = +price
            }          
          
                appData.adaptive = confirm('Нужен ли адаптив на сайте? (выберите нужную кнопку)');        
    
},


//isNumber()) функция проверки на чило
isNumber: function(num) {
    return !isNaN(parseFloat(num) && isFinite(num))
    
    },
        addPrices: function() {
           
            //Считаем суммарную стоимость экранов в массиве screens через reduce        
           appData.screenPrice = appData.screens.reduce(function(sum, item) {      
            return sum + (+item.price)   
          }, 0)
          
             //метод - цикл для ввода и валидации доп. услуг
            for(let key in appData.services){
            appData.allServicePrices += appData.services[key]
        }
    },

    
//В названии проекта удаление пробелов + отделение первой буквы, превращение в заглавную и присоединении остальной части названия проекта
    getTitle: function() {
        appData.title = +((appData.title.trimStart()).toUpperCase()).slice(0,1) + appData.title.trimStart().toLowerCase().substring(1)
        
      },
   
    
   
      //метод для сложения итоговой стоимости (без отката)
      getFullPrice: function() {
        appData.fullPrice = appData.screenPrice + appData.allServicePrices;
      },

      //метод подсчета стоимости за вычетом отката
      getServicePercentPrices: function() {
        appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * (appData.rollback / 100))
    },
    // Расчет скидки в зависимости от суммы
    getRollbackMessage: function(price) {
        switch (true) {
            case price > 30000:
                appData.rollbackMessage = 'Даем скидку 10%';
                break;
            case 15000 < price && price <= 30000:
                appData.rollbackMessage = 'Даем скидку 5%';
                break;
            case 0 < price && price <= 15000:
                appData.rollbackMessage = 'Скидка не предусмотрена';
                break;
            case price  <= 0:
                appData.rollbackMessage = 'Что-то пошло не так';
                break;
        }
        
    },  

    logger: function () {
        //вывод состава метода appData
        for (const key in appData) {
          
        }

        
        

        console.log(appData.fullPrice);
        console.log(appData.servicePercentPrice);
        console.log(appData.screens); 
         //вывод в консоль общей стоимости экранов       
        console.log('Экраны_сумма: ' + appData.screenPrice);

      },
     
      
      // --Блок функционала--
     
    };
    
   
 //КОНЕЦ ОБЬЕКТА appData    
  

// функционал
appData.start(); 


//блок вывода(мусор)
// const result = screens.reduce(function(sum, item)) {
//     return sum + item.price
// }, 0)

// console.log(result);