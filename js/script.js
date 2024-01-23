'use strict';
const h1 = document.getElementsByTagName("h1")[0];

//ур9. п2
const buttonsBtn = document.getElementsByClassName("handler_btn")[0];
//ур. 9 п.3
const buttonsPlus = document.querySelector(".screen-btn");
//ур. 9 п.4
const otherItemsPercent = document.querySelectorAll(".other-items.percent");
console.log(otherItemsPercent)
const otherItemsNumber = document.querySelectorAll(".other-items.number");
console.log(otherItemsNumber)
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
const cms = document.getElementById('cms-open')
console.log(cms)

//console.log('1')
//объявление переменных


const appData = {
    title: '',
    screens: [],
    screenPrice: 0,
    adaptive: true,
    rollback: 0,
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
        this.addTitle()
        //НАВЕШИВАНИЕ СОБЫТИЯ НА КНОПКУ "РАСЧИТАТЬ"
        buttonsBtn.addEventListener('click', () => {
            this.start()
        })


        buttonsPlus.addEventListener('click', this.addScreenBlock)
        inputTypeRange.addEventListener('input', this.rangeAssembled)
        inputTypeRange.addEventListener('change', this.rangeAssembled)

    },


    addTitle: function () {
        document.title = title.textContent

    },
    start: function () {
        this.revise()

        if (this.isError) {
            this.addScreens();
        }
        console.log('isError в функции Start; ' + this.isError)

        this.addServices()

        this.addPrices()

        // appData.getServicePercentPrices()

        // appData.getRollbackMessage(appData.fullPrice)

        this.logger();

        this.showResult();

        inputTypeRange.disabled = 'true'
        cms.disabled = 'true'

        // this.block();
    },
    //Блокировка полей ввода после нажатия на Расчитать

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
                console.log('isError в функции revise: ' + this.isError);
            }
            select.addEventListener("change", this.revise);

        })
    },

    showResult: function () {
        total.value = this.screenPrice // вывод стоимости верстки
        totalCount.value = this.sumScreens // вывод суммы экранов

        totalCountOther.value = this.servicePricesPercent + this.servicePricesNumber // вывод доп. услуг ( доп. сервисов)
        fullTotalCount.value = this.fullPrice // вывод Итоговой стоимости
        totalCountRollback.value = this.servicePercentPrice // 
    },

    addScreens: function () {
        // ВЫДЕЛЕНИЕ ПОЛЕЙ ВВОДА: (ТИПЫ ЭКРАНА + ВЫПАДАЮЩИЙ СПИСОК) И КОЛИЧЕСТВО ЭКРАНОВ 
        // + ФОРМИРОВАНИЕ МАССИВА ПО ЭКРАНАМ С РАСЧЕТОМ СТОИМОСТИ
        // + БЛОКИРОВКА ПОЛЕЙ ЧЕРЕЗ DISABLED ПОСЛЕ НАЖАТИЯ КНОПКИ "РАСЧЕТ"
        screens = document.querySelectorAll(".screen")
        console.log(screens)
        screens.forEach(function (screen, index) {
            let select = screen.querySelector('select');
            select.disabled = 'true'; //блокировка поля "Тит экранов"

            const input = screen.querySelector('input')
            input.disabled = 'true' //блокировка поля "Количество экранов"

            const selectName = select.options[select.selectedIndex].textContent


            appData.screens.push({
                id: index,
                name: selectName,
                price: +select.value * +input.value,
                count: input.value
            })
        })

    },
    //ПЕРЕБОР ПОЛЕЙ С ЧЕК-БОКСАМИ И ИХ РАСЧЕТ
    addServices: function () {
        //ВЫЧИСЛЕНИЕ, БЛОКИРОВКА ЧЕК - БОКСОВ ПОЛЕЙ, РАСЧИТЫВАЕМЫХ ОТ % СТОИМОСТИ ЭКРАНОВ
        otherItemsPercent.forEach(function (item) {
            const check = item.querySelector('input[type=checkbox]')
            check.disabled = 'true' //блокировка чек-боксов выбора полей со стоимостью в % от стоимости экранов (АДАПТАЦИЯ ПОД ПЛАНШЕТЫ И МОБИЛЬНИКИ)
            const label = item.querySelector('label')
            const input = item.querySelector('input[type=text]')
            // console.log(check);
            // console.log(label);
            // console.log(input);
            if (check.checked) {
                this.servicesPercent[label.textContent] = +input.value
            }

        })

        //ВЫЧИСЛЕНИЕ, БЛОКИРОВКА ЧЕК-БОКСОВ ПОЛЕЙ С ФИКСИРОВАННОЙ СТОИМОСТЬЮ

        otherItemsNumber.forEach(function (item) {
            const check = item.querySelector('input[type=checkbox]')

            check.disabled = 'true' //блокировка чек-боксов выбора полей с фиксированной стоимостью
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
        this.screenPrice = this.screens.reduce(function (sum, item) {
            return sum + (+item.price)
        }, 0)

        this.sumScreens = this.screens.reduce(function (sum, item) {
            return sum + (+item.count)
        }, 0)

        //метод - цикл для ввода и валидации доп. услуг
        for (let key in this.servicesNumber) {
            this.servicePricesNumber += this.servicesNumber[key]
        }

        for (let key in this.servicesPercent) {
            this.servicePricesPercent += this.screenPrice * (this.servicesPercent[key] / 100);
        }

        this.fullPrice = +this.screenPrice + this.servicePricesNumber + this.servicePricesPercent;

        this.servicePercentPrice = this.fullPrice - (this.fullPrice * (this.rollback / 100))

    },


    // //Метод, блокирующий поля ввода 
    // block: () => {
    //     const select = document.querySelector("select");
    //     console.log(select)
    //     select.disabled = 'true';

    // },

    //метод подсчета стоимости за вычетом отката
    getServicePercentPrices: function () {

    },
    // Расчет скидки в зависимости от суммы
    getRollbackMessage: function (price) {
        switch (true) {
            case price > 30000:
                this.rollbackMessage = 'Даем скидку 10%';
                break;
            case 15000 < price && price <= 30000:
                this.rollbackMessage = 'Даем скидку 5%';
                break;
            case 0 < price && price <= 15000:
                this.rollbackMessage = 'Скидка не предусмотрена';
                break;
            case price <= 0:
                this.rollbackMessage = 'Что-то пошло не так';
                break;
        }

    },

    logger: function () {
        //вывод состава метода appData - для запуска надо активировать функцию сверху
        for (const key in appData) {

        }


        console.log('fullPrice: ' + this.fullPrice);
        console.log('servicePercentPrice: ' + this.servicePercentPrice);
        console.log('screens' + this.screens);
        //вывод в консоль общей стоимости экранов       
        console.log('Экраны_сумма(screenPrice): ' + this.screenPrice);

    },


    // --Блок функционала--

};


//КОНЕЦ ОБЬЕКТА appData    


// функционал
appData.init();