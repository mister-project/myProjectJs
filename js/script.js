'use strict';
const h1 = document.getElementsByTagName("h1")[0];

//ур9. п2
const buttonsBtn = document.getElementsByClassName("handler_btn")[0];

//ур. 9 п.3
const buttonsPlus = document.querySelector(".screen-btn");

//ур. 9 п.4
const otherItemsPercent = document.querySelectorAll(".other-items.percent");

const otherItemsNumber = document.querySelectorAll(".other-items.number");

//ур. 9. п.5
const inputTypeRange = document.querySelector(".rollback [type='range']");

// ур 9. п.6
const spanRangeValue = document.querySelector(".rollback .range-value");
// ур 9. п.7

const totalInput = document.getElementsByClassName("main-total__items")[0].querySelectorAll("input");

// ур 9. п.8
let screens = document.querySelectorAll(".screen");


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
    rollbackMessage: 0,

    init: function () {
        appData.addTitle()
        
        buttonsBtn.addEventListener('click', appData.start)
    },
    addTitle: function() {
        document.title = title.textContent
    },
    start: function () {
        
        appData.addScreens()
        // appData.asking()
        // appData.addPrices()
        // appData.getFullPrice()
        // appData.getServicePercentPrices()
        // appData.getTitle()
        // appData.getRollbackMessage(appData.fullPrice)
       
       // appData.logger()                          
      
      },
    //isNumber()) функция проверки на чило
isNumber: function(num) {
    return !isNaN(parseFloat(num) && isFinite(num))
    
    },
       
    addScreens: function() {
screens.forEach(function(screen, index) {
    const select = screen.querySelector('select');
    const input = screen.querySelector('input')
    const selectName = select.options[select.selectedIndex].textContent

    appData.screens.push({ 
        id: index, 
        name: selectName, 
        price: +select.value * +input.value
    })
   
})

console.log(appData.screens);
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
appData.init(); 


