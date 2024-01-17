'use strict';
const h1 = document.getElementsByTagName("h1")[0];

//ур9. п2
const buttonsBtn = document.getElementsByClassName("handler_btn")[0];
//ур. 9 п.3
const buttonsPlus = document.querySelector(".screen-btn");
//ур. 9 п.4
const otherItemsPercent = document.querySelectorAll(".other-items.percent");
const otherItemsNumber = document.querySelectorAll(".other-items.number");
console.log()
//ур. 9. п.5
const inputTypeRange = document.querySelector(".rollback [type='range']");
// ур 9. п.6
const spanRangeValue = document.querySelector(".rollback .range-value");

// ур 9. п.7
const totalInput = document.getElementsByClassName("main-total__items")[0].querySelectorAll("input");
const total = document.getElementsByClassName('total-input')[0]
const totalCount = document.getElementsByClassName('total-input')[1]
const totalCountOther = document.getElementsByClassName('total-input')[2]
const fullTotalCount = document.getElementsByClassName('total-input')[3]
const totalCountRollback = document.getElementsByClassName('total-input')[4]
// ур 9. п.8
let screens = document.querySelectorAll(".screen");

//console.log('1')
//объявление переменных


const appData = {
    title: '',
    screens: [],
    screenPrice: 0,
    adaptive: true,
    rollback: 15,
    servicePricesPercent: 0,
    servicePricesNumber: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    servicesPercent: {},
    servicesNumber: {},
    rollbackMessage: 0,
    isError: true,
    sumScreens: 0,

    init: function () {
        appData.addTitle()

        buttonsBtn.addEventListener('click', () => {
            appData.start()
        })
        buttonsPlus.addEventListener('click', appData.addScreenBlock)
        inputTypeRange.addEventListener('input', appData.rangeAssembled)
        inputTypeRange.addEventListener('change', appData.rangeAssembled)

    },
    addTitle: function () {
        document.title = title.textContent

    },
    start: function () {
        appData.revise()

        if (appData.isError) {
            appData.addScreens();
        }
        console.log('isError в функции Start; ' + appData.isError)

        appData.addServices()

        appData.addPrices()

        // appData.getServicePercentPrices()

        // appData.getRollbackMessage(appData.fullPrice)

        // appData.logger()                          

        appData.showResult();
    },

    rangeAssembled: (event) => {
        spanRangeValue.innerText = event.target.value + "%"

        appData.rollback = event.target.value


    },

    revise: () => {
        screens = document.querySelectorAll(".screen")
        screens.forEach((screen) => {
            const select = screen.querySelector("select");
            const input = screen.querySelector("input");
            if (select.value.trim().length === 0 || input.value.trim().length === 0) {
                appData.isError = false;
                console.log('isError в функции revise: ' + appData.isError);
            }
            select.addEventListener("change", appData.revise);

        })
    },


    showResult: function () {
        total.value = appData.screenPrice // вывод стоимости верстки
        totalCount.value = appData.sumScreens // вывод суммы экранов

        totalCountOther.value = appData.servicePricesPercent + appData.servicePricesNumber // вывод доп. услуг ( доп. сервисов)
        fullTotalCount.value = appData.fullPrice // вывод Итоговой стоимости
        totalCountRollback.value = appData.servicePercentPrice // 
    },

    addScreens: function () {

        screens = document.querySelectorAll(".screen")
        screens.forEach(function (screen, index) {
            const select = screen.querySelector('select');
            const input = screen.querySelector('input')
            const selectName = select.options[select.selectedIndex].textContent


            appData.screens.push({
                id: index,
                name: selectName,
                price: +select.value * +input.value,
                count: input.value
            })
        })

    },

    addServices: function () {
        otherItemsPercent.forEach(function (item) {
            const check = item.querySelector('input[type=checkbox]')
            const label = item.querySelector('label')
            const input = item.querySelector('input[type=text]')
            // console.log(check);
            // console.log(label);
            // console.log(input);
            if (check.checked) {
                appData.servicesPercent[label.textContent] = +input.value
            }

        })
        otherItemsNumber.forEach(function (item) {
            const check = item.querySelector('input[type=checkbox]')
            const label = item.querySelector('label')
            const input = item.querySelector('input[type=text]')
            // console.log(check);
            // console.log(label);
            // console.log(input);
            if (check.checked) {
                appData.servicesNumber[label.textContent] = +input.value

            }
        })

    },

    addScreenBlock: function () {
        const cloneScreen = screens[0].cloneNode(true)

        screens[screens.length - 1].after(cloneScreen)
    },

    addPrices: function () {

        //Считаем суммарную стоимость экранов в массиве screens через reduce        
        appData.screenPrice = appData.screens.reduce(function (sum, item) {
            return sum + (+item.price)
        }, 0)

        appData.sumScreens = appData.screens.reduce(function (sum, item) {
            return sum + (+item.count)
        }, 0)

        //метод - цикл для ввода и валидации доп. услуг
        for (let key in appData.servicesNumber) {
            appData.servicePricesNumber += appData.servicesNumber[key]
        }

        for (let key in appData.servicesPercent) {
            appData.servicePricesPercent += appData.screenPrice * (appData.servicesPercent[key] / 100);
        }

        appData.fullPrice = +appData.screenPrice + appData.servicePricesNumber + appData.servicePricesPercent;

        appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * (appData.rollback / 100))

    },



    //метод подсчета стоимости за вычетом отката
    getServicePercentPrices: function () {

    },
    // Расчет скидки в зависимости от суммы
    getRollbackMessage: function (price) {
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
            case price <= 0:
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