'use strict';

//Урок 3 п.3 начало
let title = prompt('Как назывется ваш проект?');
console.log("Название проекта: " + title);
//Урок 3 п.3 окончание
console.log("п 2.1 переменная title. тип: " + typeof(title)); // вып. п 2.1

let screens = "Простые, Сложные, Интерактивные";

let screenPrice = 30;
const rollback = 15;
const fullPrice = 50;

console.log("п 2.1 переменная fullPrice. тип: " + typeof(fullPrice)); // вып. п 2.1переменная fullPrice. тип: " + typeof(fullPrice)); // вып. п 2.1

const adaptive = true;


console.log("п 2.1 переменная adaptive. тип: " + typeof(adaptive)); // вып. п 2.1

console.log("п2.2: " + screens.length); // вып. п 2.2

// вып. п 2.3 (начало)

const KursDoll = 92; //задаю курс доллара

const KursGriv = 25; //задаю курс гривны

const KursYuan = 12.8; //задаю курс юани

// п. 2.3 вывод стоимости верстки экранов

console.log("п2.3: Стоимость верстки экранов " + screenPrice.toFixed(2) + " руб./ " + (screenPrice/KursDoll).toFixed(2) + " дол./ " + (screenPrice/KursGriv).toFixed(2) + " гр./ " + (screenPrice/KursYuan).toFixed(2) + " юан. ");

// п. 2.3 вывод стоимости разработки сайта

console.log("п2.3: Стоимость разработки сайта " + fullPrice.toFixed(2) + " рублей/ " + (fullPrice/KursDoll).toFixed(2) + " дол./ " + (fullPrice/KursGriv).toFixed(2) + " гр./ " + (fullPrice/KursYuan).toFixed(2) + " юан. ");
// вып. п 2.3 окончание

console.log(screens.toLowerCase().split(", ")); // п 2.4 

console.log("Откат посреднику " + rollback + "%: " + (fullPrice*(rollback/100)).toFixed(2) + " руб."); // п 2.5 

//alert ("Hello.This second homework");

//console.log("Hello-cosole");