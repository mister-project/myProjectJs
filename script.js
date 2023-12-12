'use strict';

//Урок 3 п.3 начало ↓
// let title = prompt('Как назывется ваш проект?');
// console.log("П.3 Название проекта: " + title);
//Урок 3 п.3 окончание ↑

//Урок 3 п.4 начало
// let screens = prompt('Какие типы экранов нужно разработать? (через запятую, пожалуйста)');
// console.log("П.4 Типы экранов : " + screens);
//Урок 3 п.4 окончание ↑

//Урок 3 п.5 начало ↓
// let screenPrice = +prompt('Сколько будет стоить данная работа (в руб.)?');
// console.log("П.5 Стоимость работы: " + screenPrice + " руб. тип:" + typeof(screenPrice));
//Урок 3 п.5 окончание ↑
//Урок 3 п.6 начало ↓
const adaptive = !!prompt('Нужен ли адаптив на сайте? (! Да - НАПИШИТЕ "Да", Нет - ОСТАВЬТЕ ПОЛЕ ПУСТЫМ ! )');
console.log("П. 6 Адаптив: " + adaptive + " тип: " + typeof(adaptive)); 

//Урок 3 п.6 начало//↑
const rollback = 15;
const fullPrice = 50;

console.log("п 2.1 переменная fullPrice. тип: " + typeof(fullPrice)); 






console.log("п2.2: " + screens.length); // вып. п 2.2 (Урок 2)

// (Урок 2) вып. п 2.3 (начало)

const KursDoll = 92; //задаю курс доллара (Урок 2)

const KursGriv = 25; //задаю курс гривны (Урок 2)

const KursYuan = 12.8; //задаю курс юани (Урок 2)

// (Урок 2) п. 2.3 вывод стоимости верстки экранов (Урок 2)

console.log("п2.3: Стоимость верстки экранов " + screenPrice.toFixed(2) + " руб./ " + (screenPrice/KursDoll).toFixed(2) + " дол./ " + (screenPrice/KursGriv).toFixed(2) + " гр./ " + (screenPrice/KursYuan).toFixed(2) + " юан. ");

//(Урок 2) п. 2.3 вывод стоимости разработки сайта 

console.log("п2.3: Стоимость разработки сайта " + fullPrice.toFixed(2) + " рублей/ " + (fullPrice/KursDoll).toFixed(2) + " дол./ " + (fullPrice/KursGriv).toFixed(2) + " гр./ " + (fullPrice/KursYuan).toFixed(2) + " юан. ");
// (Урок 2) вып. п 2.3 окончание 

console.log(screens.toLowerCase().split(", ")); // п 2.4 (Урок 2)

console.log("Откат посреднику " + rollback + "%: " + (fullPrice*(rollback/100)).toFixed(2) + " руб.");  

//alert ("Hello.This second homework");

//console.log("Hello-cosole");