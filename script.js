let title = "Мой проект";
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
console.log(Math.round(KursDoll));

const KursGriv = 25; //задаю курс гривны

const KursYuan = 12.8; //задаю курс юани

// п. 2.3 вывод стоимости верстки экранов

console.log("п2.3: Стоимость верстки экранов " + screenPrice.toFixed(2) + " рублей/ " + (screenPrice/KursDoll).toFixed(2) + " долларов/ " + (screenPrice/KursGriv).toFixed(2) + " гривен/ " + (screenPrice/KursYuan).toFixed(2) + " юаней ");

// п. 2.3 вывод стоимости разработки сайта

console.log("п2.3: Стоимость разработки сайта " + fullPrice.toFixed(2) + " рублей/ " + (fullPrice/KursDoll).toFixed(2) + " долларов/ " + (fullPrice/KursGriv).toFixed(2) + " гривен/ " + (fullPrice/KursYuan).toFixed(2) + " юаней ");

// вып. п 2.3 окончание

alert ("Hello.This second homework");

console.log("Hello-cosole");